import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCompromissos from '../../store/actions/compromissos';
import { Link, useParams } from "react-router-dom";

const newCompromisso = {
    id: -1,
    nome: '',
    data: '',
    local: '',
    tipo: '',
    importante: false
}

const CadCompromisso = (props) => {
    const { compromissos } = props;
    const [type, setType] = useState("I");
    const [compInterno, setComp] = useState(newCompromisso);

    var params = useParams();

    const handleChange = (idName) => action => {
        const comp = {
            ...compInterno,
            [idName]: action.target.value
        };
        setComp(comp);
    };

    const lancaCompromisso = () => {
        console.log('lancaCompromisso type', type, compromissos);
        if (type === 'I') {
            console.log('lancaCompromisso I', compInterno);
            props.insertCompromisso(compInterno);
        }
        if (type === 'U') {
            console.log('lancaCompromisso U', compInterno);
            props.updateCompromisso(compInterno);
        }

        console.log('lancaCompromisso 2', type, compromissos);
        setComp(newCompromisso);
        console.log('newCompromisso', newCompromisso);
    }

    useEffect(() => {
        let compromissoEdit = compromissos.find(comp => comp.id === parseInt(params.invoiceId)) || {};
        if (compromissoEdit) {
            setType('U');
        } else {
            setType('I')
        }
        setComp(compromissoEdit);
    }, [compromissos, params.invoiceId])

    return (
        <div>
            <p>Cadastro Compromisso</p>
            ------------------------------
            <div>
                Nome:<input
                    type="text"
                    value={compInterno.nome}
                    onChange={handleChange("nome")}
                />
                Local:<input
                    type="text"
                    value={compInterno.local}
                    onChange={handleChange("local")}
                />
                Tipo:<input
                    type="text"
                    onChange={handleChange("tipo")}
                />
                {/* Importante:<input
                    type='checkbox'
                    value={compInterno.importante}
                    onChange={handleChange("importante")}
                    checked={compInterno.importante}
                /> */}
                dia:<input
                    type="datetime-local"
                    value={compInterno.data}
                    onChange={handleChange("data")}
                />
            </div>
            <div>
                <Link to={`/`}>
                    <button onClick={() => lancaCompromisso()}>Salvar</button>
                    <button>Cencelar</button>
                </Link>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        compromissos: state.dados.compromissos,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCompromissos, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CadCompromisso);
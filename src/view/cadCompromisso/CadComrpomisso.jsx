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
    importante: false,
    semlocal: true,
    especial: false
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
        if (type === 'I') {
            props.insertCompromisso(compInterno);
        }
        if (type === 'U') {
            props.updateCompromisso(compInterno);
        }
        setComp(newCompromisso);
    }

    useEffect(() => {
        if (parseInt(params.invoiceId) === 0) {
            setType('I');
        } else {
            const compromissoEdit = compromissos.find(comp => comp.id === parseInt(params.invoiceId)) || {};
            setComp(compromissoEdit);
            setType('U')
        }
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
                Importante:<input
                    type='checkbox'
                    onChange={handleChange("importante")}
                    id='importante'
                    value={true}
                    name='labelimportante'
                // ref={n => { setRefere(n) }}
                />
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
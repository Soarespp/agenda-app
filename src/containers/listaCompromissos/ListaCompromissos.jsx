import './ListaCompromissos.css';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCompromissos from '../../store/actions/compromissos';
import CardCompromissos from '../../components/cardCompromissos/CardCompromissos';


const ListaCompromissos = (props) => {
    const { compromissos, especial } = props;
    const lstCompromissos = compromissos.slice();
    const [filterEspecial, setFilterEspecial] = useState(false);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        setFilterEspecial(especial)
    }, [especial])

    useEffect(() => {
        var DadosFilter;
        if (!filterEspecial) {
            DadosFilter = lstCompromissos.filter(dados => (!dados.especial))
        } else {
            DadosFilter = lstCompromissos;
        }
        setFilterEspecial(especial)
        // setDados(DadosFilter.filter(e => new Date(e.dataEvento) >= new Date()))
        setDados(DadosFilter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [compromissos, especial])

    dados.sort((a, b) => {
        return new Date(a.dataEvento) - new Date(b.dataEvento) || a.name
    });
    return (
        <div>
            <div className="ListaCompromissos">
                {dados.map((compromisso) => (
                    <div>
                        <CardCompromissos compromisso={compromisso} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        compromissos: state.dados.compromissos,
        especial: state.dados.especial,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsCompromissos, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(ListaCompromissos);
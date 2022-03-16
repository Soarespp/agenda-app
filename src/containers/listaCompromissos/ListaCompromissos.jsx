import './ListaCompromissos.css';
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCompromissos from '../../store/actions/compromissos';
import CardCompromissos from '../../components/cardCompromissos/CardCompromissos';


const ListaCompromissos = (props) => {
    const { compromissos } = props;
    const lstCompromissos = compromissos.slice();

    lstCompromissos.sort((a, b) => {
        return new Date(a.data) - new Date(b.data) || a.name
    });
    return (
        <div className="ListaCompromissos">
            {lstCompromissos.map((compromisso) => (
                <div>
                    <CardCompromissos compromisso={compromisso} />
                </div>
            ))}
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
)(ListaCompromissos);
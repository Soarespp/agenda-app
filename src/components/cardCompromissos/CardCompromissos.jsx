import React from 'react';
import './CardCompromissos.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCompromissos from '../../store/actions/compromissos';


const getMonthDesc = (dt) => {
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    let data = new Date(dt);
    return meses[(data.getMonth())]
}

const getDayDesc = (dt) => {
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    var d = new Date(dt);
    return semana[d.getDay()]
}

const CardCompromissos = (props) => {
    const { compromisso } = props;
    return (
        <div className='CardCompromissos'>
            <div className='DtCard'>
                <div>{String(new Date(compromisso.data).getDate())}</div>
                <div>{getMonthDesc(compromisso.data)}.
                    {String(new Date(compromisso.data).getFullYear())}
                </div>
                <div>{compromisso.tipo}</div>
                {/* <div>{compromisso.data}</div> */}
                {/* <input
                    type="datetime-local"
                    value={compromisso.data}
                    min="2018-06-07T00:00" max="2018-06-14T00:00"
                    readOnly
                /> */}
            </div>
            <div className='ContainerDados'>
                <div>{compromisso.nome}</div>
                <div style={{ display: 'flex', padding: '3px' }}>
                    <div style={{ display: 'flex', padding: '3px' }}>{getDayDesc(compromisso.data)}</div>
                    <div style={{ display: 'flex', padding: '3px' }}>{String(new Date(compromisso.data).toTimeString()).substring(0, 8)}</div>
                </div>
                <div>{compromisso.local}</div>
                {(compromisso.importante) ? <p> Importante</p> : <p> not</p>
                }
                <div style={{ display: 'flex' }}>
                    <Link
                        to={`/invoices/${compromisso.id}`}
                        key={compromisso.id}
                    >
                        <button>Editar</button>
                    </Link>
                    <button onClick={() => props.deleteCompromisso(compromisso)}>Delete</button>
                </div>
            </div>
        </div >
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
)(CardCompromissos);
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
    console.log('compromisso.andress', compromisso.compromisso, compromisso.andress)
    return (
        <div className='CardCompromissos'>
            <div className='DtCard'>
                <div style={{ fontSize: '70px' }}><b>{String(new Date(compromisso.dataEvento).getDate())}</b></div>
                <div style={{}}>{getMonthDesc(compromisso.dataEvento)}.
                    {String(new Date(compromisso.dataEvento).getFullYear())}
                </div>
                <div style={{ color: 'blue' }}>{compromisso.tipo}</div>
                {/* <input
                    type="datetime-local"
                    value={compromisso.data}
                    min="2018-06-07T00:00" max="2018-06-14T00:00"
                    readOnly
                /> */}
            </div>
            <div className='ContainerDados'>
                <div className='Header'>{compromisso.nameLocal}</div>
                <div className='Dados-config'>
                    <div style={{ display: 'flex', padding: '3px' }}>
                        <div style={{ display: 'flex', padding: '3px', fontSize: '25px' }}>{getDayDesc(compromisso.dataEvento)}</div>
                        <div style={{ display: 'flex', padding: '3px' }}>{String(new Date(compromisso.dataEvento).toTimeString()).substring(0, 8)}</div>
                    </div>
                    <div>

                        <span>
                            {(compromisso.andress) ? <div>
                                {compromisso.andress.rua},
                                <div>{compromisso.andress.complemento},
                                    n.{compromisso.andress.numero},
                                    {compromisso.andress.bairro},
                                    {compromisso.andress.cidade}
                                </div>
                            </div> : null}
                        </span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Link
                            to={`/compromissos/${compromisso.id}`}
                            key={compromisso.id}
                        >
                            <button>Editar Form</button>
                        </Link>
                        <button onClick={() => props.deleteCompromisso(compromisso)}>Delete</button>
                    </div>
                </div>
                <div className='Dados-evento'>
                    <div>
                        <h1>{compromisso.compromisso}</h1>
                    </div>
                    {(compromisso.importante) ? <p> Importante</p> : null
                    }
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
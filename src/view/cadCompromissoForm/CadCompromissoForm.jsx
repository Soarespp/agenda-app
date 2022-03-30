import React, { useRef, useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsCompromissos from '../../store/actions/compromissos';
import Input from './Components/Form/Input';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';
import { Link, useParams } from "react-router-dom";
import { getNewId } from '../../components/functions/functions';
import './CadCompromissoForm.css';

const CadCompromissoForm = (props) => {
    const { compromissos } = props;
    const formRef = useRef(null);
    const [type, setType] = useState('I');
    var params = useParams();

    useEffect(() => {
        if (parseInt(params.compromissoId) !== -1) {
            setType('U');
            const compInterno = compromissos.find(comp => comp.id === parseInt(params.compromissoId)) || {};
            formRef.current.setData(compInterno)
            // console.log('formref', formRef.current.getFieldValue('importante'))
        }
        else {
            setType('I');
        }
    }, [compromissos, params.compromissoId])

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                compromisso: Yup.string().required('Nome Compromisso obrigatorio'),
                nameLocal: Yup.string().required('O nome do local e obrigatorio'),
            });

            await schema.validate(data, {
                abortEarly: false,
            })
            data.importante = document.getElementById("checkedImportante").checked
            data.especial = document.getElementById("checkedEspecial").checked
            data.semlocal = document.getElementById("checkedSemLocal").checked

            if (data.andress.rua === '') {
                data.andress = {
                    cep: '88052-600',
                    cidade: 'Florianopolis',
                    bairro: 'Vargem Grande',
                    rua: 'cristovão machado campos',
                    numero: '461',
                    complemento: 'B4 Apt 403',
                }
            }
            if (type === 'I') {
                var maxID = await getNewId(compromissos);
                data.id = maxID + 1;
                props.insertCompromisso(data);
            }
            if (type === 'U') {
                data.id = parseInt(params.compromissoId);
                props.updateCompromisso(data);
            }
            setType('U');
            // reset();
            alert('Salvo com sucesso')

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessager = {};

                err.inner.forEach(error => {
                    errorMessager[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessager);
            }
        }
    }

    return (
        <div className='CadCompromissoForm'>
            <div className='header'>
                <h1>Compromisso - {type}</h1>
            </div>
            <div className='body'>
                <Form onSubmit={handleSubmit} ref={formRef}>
                    Compromisso:<Input name="compromisso" />
                    Tipo:<Input name="tipo" />
                    Nome Local:<Input name="nameLocal" />
                    Importante:<Input type="checkbox" id="checkedImportante" name="importante" defaultChecked={(formRef.current !== null) ? formRef.current.getFieldValue('importante') : false} />
                    Especial:<Input type="checkbox" id="checkedEspecial" name="especial" defaultChecked={(formRef.current !== null) ? formRef.current.getFieldValue('especial') : false} />
                    Sem Local:<Input type="checkbox" id="checkedSemLocal" name="semlocal" defaultChecked={(formRef.current !== null) ? formRef.current.getFieldValue('semlocal') : false} />
                    <label for="subscribeNews">Subscribe to newsletter?</label>
                    dia:<Input
                        type="datetime-local"
                        name="dataEvento"
                    />
                    <div>
                        Endereço:<Scope path="andress">
                            CEP:<Input name="cep" pattern="\d{5}-\d{3}" />
                            Cidade:<Input name="cidade" />
                            Bairro:<Input name="bairro" />
                            Rua:<Input name="rua" />
                            Numero:<Input name="numero" />
                            Complemento:<Input type="memo" name="complemento" />
                        </Scope>
                    </div>
                    <button type='submit'> Salvar</button>
                    <Link to={`/`}>
                        <button type='cancel'> Voltar</button>
                    </Link>
                </Form>
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
)(CadCompromissoForm);


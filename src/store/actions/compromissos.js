import {
    NEW_COMPROMISSO, UPDATE_COMPROMISSO, DELETE_COMPROMISSO, LOGIN_ESPECIAL, GET_DADOS
} from './actionsTypes';

import api from '../../service/Api';


export function insertCompromisso(newCompromisso) {
    console.log('insertCompromisso', newCompromisso)
    return {
        type: NEW_COMPROMISSO,
        payload: newCompromisso
    }
}

export function updateCompromisso(updCompromisso) {
    console.log('updateCompromisso', updCompromisso)
    return {
        type: UPDATE_COMPROMISSO,
        payload: updCompromisso
    }
}

export function deleteCompromisso(delCompromisso) {
    console.log('deleteCompromisso', delCompromisso)
    return {
        type: DELETE_COMPROMISSO,
        payload: delCompromisso
    }
}

export function loginEspecial(loginEspecial) {
    console.log('loginEspecial', loginEspecial)
    return {
        type: LOGIN_ESPECIAL,
        payload: loginEspecial
    }
}

export async function getDados(getDadosVaL) {
    let agendas = await api
        .get('/agenda')
        .then(result => {
            return result.data.agendas
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed retrieving information', err);
        });
    await console.log(`agendas`, agendas)
    return {
        type: GET_DADOS,
        payload: agendas
    }
}
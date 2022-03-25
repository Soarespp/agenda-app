import {
    NEW_COMPROMISSO, UPDATE_COMPROMISSO, DELETE_COMPROMISSO, LOGIN_ESPECIAL, GET_DADOS
} from './actionsTypes';

import api from '../../service/Api';


export async function insertCompromisso(newCompromisso) {
    console.log('insertCompromisso', newCompromisso)

    const result = await api
        .post('/agenda', newCompromisso)
        .then(result => {
            return result
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed post product', err);
        });

    if (!result.data.error) {
        return {
            type: NEW_COMPROMISSO,
            payload: newCompromisso
        }
    }


}

export async function updateCompromisso(updCompromisso) {
    console.log('updateCompromisso', updCompromisso)

    const result = await api
        .put('/agenda', updCompromisso)
        .then(result => {
            return result
        })
        .catch(err => {
            console.error('Failed alterar produto', err);
        });


    if (!result.data.error) {
        return {
            type: UPDATE_COMPROMISSO,
            payload: updCompromisso
        }
    }


}

export async function deleteCompromisso(delCompromisso) {
    console.log('deleteCompromisso', delCompromisso)

    const result = await api
        .delete('/agenda', { data: { id: delCompromisso.id } })
        .then(result => {
            return result
        })
        .catch(err => {
            console.error('Failed deletar produto', err);
        });

    if (!result.data.error) {
        return {
            type: DELETE_COMPROMISSO,
            payload: delCompromisso
        }
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
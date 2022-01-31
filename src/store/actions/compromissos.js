import {
    NEW_COMPROMISSO,
    UPDATE_COMPROMISSO,
    DELETE_COMPROMISSO
} from './actionsTypes';


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
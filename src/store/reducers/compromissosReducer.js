/* eslint-disable import/no-anonymous-default-export */
import {
    NEW_COMPROMISSO, UPDATE_COMPROMISSO, DELETE_COMPROMISSO, LOGIN_ESPECIAL, GET_DADOS
} from '../actions/actionsTypes';

var initialState = {
    filter: "",
    state: "",
    especial: false,
    compromissos: [],
};

export default function (state = initialState, action) {
    console.log('reducer', action, state.payload)
    switch (action.type) {
        case GET_DADOS:
            console.log(`action.payload`, action.payload)
            return {
                ...state,
                compromissos: action.payload
            }
        case NEW_COMPROMISSO:
            console.log('NEW_COMPROMISSO', state.payload)
            return {
                ...state,
                compromissos: [...state.compromissos, action.payload]
            }
        case UPDATE_COMPROMISSO:
            console.log('UPDATE_COMPROMISSO', state.compromissos, action.payload)
            var lstCompromissos = [...state.compromissos];
            lstCompromissos.forEach((item, idx) => {
                if (item.id === action.payload.id) {
                    lstCompromissos[idx] = action.payload
                }
            });
            return {
                ...state,
                compromissos: lstCompromissos
            }
        case DELETE_COMPROMISSO:
            var lstComp = [...state.compromissos];
            lstComp.forEach((item, idx) => {
                if (item.id === action.payload.id) {
                    lstComp.splice(idx, 1);
                }
            });
            return {
                ...state,
                compromissos: lstComp
            }
        case LOGIN_ESPECIAL:
            return {
                ...state,
                especial: action.payload
            }
        default:
            return state
    }
}
/* eslint-disable import/no-anonymous-default-export */
import {
    NEW_COMPROMISSO,
    UPDATE_COMPROMISSO,
    DELETE_COMPROMISSO
} from '../actions/actionsTypes';



var initialState = {
    filter: "",
    compromissos: [
        {
            id: 1,
            nome: 'Corta cabelo',
            data: '2021-05-27T16:35',
            local: 'beira mar',
            tipo: 'consulta',
            importante: true
        },
        {
            id: 2,
            nome: 'Fazer mudanca',
            data: '2021-02-17T08:00',
            local: 'av circular centro',
            tipo: 'viagem',
            importante: true
        },
        {
            id: 3,
            nome: 'Garden',
            data: '2022-01-16T06:45',
            local: 'multirão',
            tipo: 'compras',
            importante: true
        }
    ],
};

export default function (state = initialState, action) {
    console.log('reducer', action, state.payload)
    switch (action.type) {
        case NEW_COMPROMISSO:
            return {
                ...state,
                compromissos: [...state.compromissos, action.payload]
            }
        case UPDATE_COMPROMISSO:
            var lstCompromissos = [...state.compromissos];
            lstCompromissos.forEach((item, idx) => {
                if (item.idx === action.payload.idx) {
                    lstCompromissos[idx] = action.payload
                }
            });
            return {
                ...state,
                compromissos: lstCompromissos
            }
        case DELETE_COMPROMISSO:
            var lstComp = [...state.compromissos];
            console.log('lstComp before', lstComp)
            lstComp.forEach((item, idx) => {
                if (item.id === action.payload.id) {
                    lstComp.splice(idx, 1);
                }
            });
            console.log('lstComp aft', lstComp)
            return {
                ...state,
                compromissos: lstComp
            }
        default:
            return state
    }
}
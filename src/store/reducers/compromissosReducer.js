/* eslint-disable import/no-anonymous-default-export */
import {
    NEW_COMPROMISSO,
    UPDATE_COMPROMISSO,
    DELETE_COMPROMISSO
} from '../actions/actionsTypes';



var initialState = {
    filter: "",
    state: "",
    compromissos: [
        {
            id: 1,
            compromisso: 'Corta cabelo',
            nameLocal: 'Corta cabelo',
            dataEvento: '2021-05-27T16:35',
            local: 'beira mar',
            tipo: 'consulta',
            importante: false,
        },
        {
            id: 2,
            compromisso: 'Fazer mundaça',
            nameLocal: 'Fazer mudanca',
            dataEvento: '2021-02-17T08:00',
            local: 'av circular centro',
            tipo: 'viagem',
            importante: false,
            andress: {
                cep: '88052-600',
                cidade: 'Florianopolis',
                bairro: 'Vargem Grande',
                rua: 'cristovão machado campos',
                numero: '461',
                complemento: 'B4 Apt 403',
            }
        },
        {
            id: 3,
            compromisso: 'Garden',
            nameLocal: 'RS',
            dataEvento: '2022-01-16T06:45',
            local: 'multirão',
            tipo: 'compras',
            importante: false,
        }
    ],
};

export default function (state = initialState, action) {
    console.log('reducer', action, state.payload)
    switch (action.type) {
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
        default:
            return state
    }
}
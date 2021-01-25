import { minNumberAlterade, maxNumberAlterade } from './actionTypes'

export const alterarNumeroMinimo = (novoNumero) => {
    return {
        type: minNumberAlterade,
        payLoad: novoNumero
    }
}

export const alterarNumeroMax = ( novoNumero ) => {
    return {
        type: maxNumberAlterade,
        payLoad: novoNumero
    }
}

 
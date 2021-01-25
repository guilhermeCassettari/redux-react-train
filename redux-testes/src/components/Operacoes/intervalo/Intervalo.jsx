import './Intervalo.scss'
import React from 'react'

import { connect } from 'react-redux'

import Card from '../../card/Card'
import {alterarNumeroMinimo, alterarNumeroMax} from '../../../store/actions/actionNumeros'


const Intervalo = props => {

    const { min, max } = props
    


    return (
        <div className="Intervalo">

            <Card title="Intervalo entre Numeros" red>
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={ e => props.alterarMax(+e.target.value) }/>
                </span>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        alterarMinimo(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)            
            dispatch(action)
        },
        alterarMax( novoNumero) {
            const action = alterarNumeroMax(novoNumero)
            dispatch(action)
        }
    }
}

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(Intervalo)

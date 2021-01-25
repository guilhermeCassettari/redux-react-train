import React from 'react'
import './Sorteio.scss'

import { connect } from 'react-redux'

import Card from '../../card/Card'

const Sorteio = props => {

    const { min, max } = props

    return (
        <div className="Sorteio">
            <Card title="Sorteio entre o numbers" purple>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{Math.floor(Math.random() * (min + max) )}</strong>
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

export default connect(mapStateToProps)(Sorteio)


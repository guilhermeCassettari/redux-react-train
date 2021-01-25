import React from 'react'
import './Soma.scss'

import { connect } from 'react-redux'

import Card from '../../card/Card'

const Soma = props => {

    const { min, max } = props
    return (
        <div className="Soma">
            <Card title="Soma entre os numbers" green >
                <span>
                    <strong>Resultado: </strong>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)

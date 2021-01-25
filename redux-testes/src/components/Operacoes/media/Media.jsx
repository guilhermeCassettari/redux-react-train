import React from 'react'
import './media.scss'

import { connect } from 'react-redux'

import Card from '../../card/Card'

const Media = props => {

    const {min, max} = props
    
    return (
        <div className="Media">
            <Card title="Média entre os numeros" blue>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </Card>
        </div>
    )
}

// passar o estado para o componente
const mapStateToProps = state => {
    return {
        min: state.numeros.min, 
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Media)
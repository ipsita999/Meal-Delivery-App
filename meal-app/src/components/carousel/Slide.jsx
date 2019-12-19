import React from 'react'
import {withRouter} from 'react-router-dom'

const handleSubmit = (props) => {
    const {item, id} = props
    props.history.push(`results/${id}`, item)
}

const Slide = (props) => {
    const { item, id } = props
    console.log(props)
    return (
        <div className="card" onClick={() => {handleSubmit(props)}}>
            <img src={item.image} />
            <p>{item.title}<span>{item.totalTime}</span></p>
        </div>
    )
}
export default withRouter(Slide)
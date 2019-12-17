import React from 'react'

const Items = (props) => {

const renderItems = () => {
    return props.location.state.items.map(item => (
        <h3>{item.recipe.label}</h3>
    ))
}


    console.log(props)
    return (
        <div>{renderItems()}</div>
    )
}

export default Items
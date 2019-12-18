import React from 'react'
import Search from '../shared/Search'

const Items = (props) => {


    const renderItems = () => {
        return props.location.state.items.map(item => (
            <>
                <h3>{item.recipe.label}</h3>
                <img src={item.recipe.image} />
            </>
        ))
    }


    console.log(props)
    return (
        <>
        <Search/>
            <div>{renderItems()}</div>

        </>

    )
}

export default Items
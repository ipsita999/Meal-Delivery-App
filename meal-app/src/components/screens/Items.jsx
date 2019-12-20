import React from 'react'
import Search from '../shared/Search'
import {withRouter} from 'react-router-dom'
import './Items.css'

const Items = (props) => {

    const handleSubmit = (item, id) => {
        console.log(item)
        props.history.push(`/results/${id}`, item)
    }

    const renderItems = () => {
        return props.location.state.items.map( (item, index) => (
            <>
                <div className='item-container' onClick={ () => {handleSubmit(item.recipe, index)}}>
                    <img className = "rec-pic" src={item.recipe.image} />
                    <div className ='info-box'>
                    <div className='rec-left'>
                        <h3 className= "rec-title">{item.recipe.label}</h3>
                        <div className= 'diet-sec'>
                       <h5>{item.recipe.healthLabels.includes('Vegetarian') ?
                         <img className ='diet-pics' src = {require('../../assets/Vegetarian-icon.png')} /> : null} </h5>
                       <h5>{item.recipe.healthLabels.includes('Peanut-Free') ?
                         <img className ='diet-pics' src = {require('../../assets/nut-free.png')} /> : null} </h5>
                        </div>

                    </div>
                    <div className='rec-right'>
                        <h5 className = 'time'> {item.recipe.totalTime > 0 ? item.recipe.totalTime : 20} mins</h5>
                        
                        <div className = "cook-time">
                            <img className="person-icon" src={require('../../assets/SERVINGS (PERSON ICON).png')} alt="" /><p>{item.recipe.yield}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        ))
    }


    console.log(props)
    return (
        <>
        <div className= 'diet-icons'>
            <img className ='diet-pic' src = {require('../../assets/Vegetarian-icon.png')} />
            <p>Vegetarian</p>
            <img className ='diet-pic' src = {require('../../assets/vegan.png')} />
            <p>Vegan</p>
            <img className ='diet-pic' src = {require('../../assets/gluten-free.png')} />
            <p>Gluten-free</p>
            <img className ='diet-pic' src = {require('../../assets/nut-free.png')} />
            <p>Nut-free</p>
            <img className ='diet-pic' src = {require('../../assets/dairy-free.png')} />
            <p>Dairy-free</p>
        </div>
        <div className = 'item-page-container'>
           <div className ='search-container'><Search /></div> 
            <div className = 'items-container'>{renderItems()}</div>

        </div>
</>
    )
}

export default withRouter(Items)
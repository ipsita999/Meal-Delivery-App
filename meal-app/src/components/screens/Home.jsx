import React from 'react'
import Search from '../shared/Search'
import '../../styles/Home.css'
import { data } from '../../data/data.js'
import leftArrow from '../../assets/Arrow-left.png'
import rightArrow from '../../assets/Arrow-right.png'
import step1 from '../../assets/STEP1-SEARCH.png'
import step2 from '../../assets/STEP2-RECIPE.png'
import step3 from '../../assets/STEP3-INGREDIENTS.png'
import arrow from '../../assets/arrow.png'

import Container from '../carousel/Container'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
        }
    }

    handleClick = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    handleSubmit = (item, id) => {
        this.props.history.push(`results/${id}`, item)
    }


    render() {
        return (
            <div>
                <h2>Cook Faster With Prepped Ingredients</h2>
                <div className='steps'>
                    <div className='step-1'>
                        <img src={step1} alt='step one' />
                        <h3>STEP 1</h3>
                        <p>Search For Recipe</p>
                    </div>
                    <img className='between' src={arrow} alt='arrow' />
                    <div className='step-2'>
                        <img src={step2} alt='step two' />
                        <h3>STEP 2</h3>
                        <p>Select Recipe</p>
                    </div>
                    <img className='between' src={arrow} alt='arrow' />
                    <div className='step-3'>
                        <img src={step3} alt='step three' />
                        <h3>STEP 3</h3>
                        <p>Order Ingredients</p>
                    </div>
                </div>
                <Search />
                <h4>Top Recipes</h4>
                <Container data={data}/>
                <div className='carousel desktop'>
                    <button className='arrow' onClick={this.handleClick}><img src={leftArrow} alt='arrow' /></button>
                    {this.state.isActive ?
                        <div className='slide one'>
                            <div className='card' onClick={() => {this.handleSubmit(data[0], 0)}}>
                                <img src={data[0].image} alt='slide 0' />
                                <p>{data[0].label}</p>
                            </div>
                            <div className='card' onClick={() => {this.handleSubmit(data[1], 1)}}>
                                <img src={data[1].image} alt='slide 1' />
                                <p>{data[1].label}</p>
                            </div>
                            <div className='card' onClick={() => {this.handleSubmit(data[2], 2)}}>
                                <img src={data[2].image} alt='slide 2' />
                                <p>{data[2].label}</p>
                            </div>
                            <div className='card' onClick={() => {this.handleSubmit(data[3], 3)}}>
                                <img src={data[3].image} alt='slide 3' />
                                <p>{data[3].label}</p>
                            </div>
                        </div> :
                        <div className='slide two'>
                            <div className='card' onClick={() => {this.handleSubmit(data[4], 4)}}>
                                <img src={data[4].image} alt='slide 4' />
                                <p>{data[4].label}</p>
                            </div>
                            <div className='card' onClick={() => {this.handleSubmit(data[5], 5)}}>
                                <img src={data[5].image} alt='slide 5' />
                                <p>{data[5].label}</p>
                            </div>
                            <div className='card' onClick={() => {this.handleSubmit(data[6], 6)}}>
                                <img src={data[6].image} alt='slide 6' />
                                <p>{data[6].label}</p>
                            </div>
                            <div className='card' onClick={() => {this.handleSubmit(data[7], 7)}}>
                                <img src={data[7].image} alt='slide 7' />
                                <p>{data[7].label}</p>
                            </div>
                        </div>}
                    <button className='arrow' onClick={this.handleClick}><img src={rightArrow} alt='arrow' /></button>
                </div>
            </div>
        )
    }
}

export default Home
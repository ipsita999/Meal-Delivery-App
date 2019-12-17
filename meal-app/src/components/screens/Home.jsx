import React from 'react'
import Search from '../shared/Search'
import '../../styles/Home.css'
import { data } from '../../data/data.js'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            isActive: false
        }
    }

    handleClick = () => {
        this.setState({isActive: !this.state.isActive})
    }

    render() {
        return (
            <div>
                <Search />
                <h4>Top Recipes</h4>
                <div className='carousel'>
                    <button onClick={this.handleClick}>prev</button>
                    {this.state.isActive ? 
                    <div className='slide one'>
                        <div className='card'>
                            <img src={data[0].image} alt='slide 0'/>
                            <p>{data[0].title}</p>
                        </div>
                        <div className='card'>
                            <img src={data[1].image} alt='slide 1'/>
                            <p>{data[1].title}</p>
                        </div>
                        <div className='card'>
                            <img src={data[2].image} alt='slide 2'/>
                            <p>{data[2].title}</p>
                        </div>
                        <div className='card'>
                            <img src={data[3].image} alt='slide 3'/>
                            <p>{data[3].title}</p>
                        </div>
                    </div> : 
                    <div className='slide two'>
                        <div className='card'>
                            <img src={data[4].image} alt='slide 4'/>
                            <p>{data[4].title}</p>
                        </div>
                        <div className='card'>
                            <img src={data[5].image} alt='slide 5'/>
                            <p>{data[5].title}</p>
                        </div>
                        <div className='card'>
                            <img src={data[6].image} alt='slide 6'/>
                            <p>{data[6].title}</p>
                        </div>
                        <div className='card'>
                            <img src={data[7].image} alt='slide 7'/>
                            <p>{data[7].title}</p>
                        </div>
                    </div>}
                    <button onClick={this.handleClick}>next</button>
                </div>
            </div>
        )
    }
}

export default Home
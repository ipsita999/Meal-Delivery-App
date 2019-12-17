import React from 'react'
import Search from '../shared/Search'
import '../../styles/Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            isActive: false
        }
    }

    handleClick = () => {
        this.setState({isActive: !this.state.isActive})
        console.log(this.state.isActive)
    }

    render() {
        return (
            <div>Home Page
                <Search />
                <div className='carousel'>
                    <button onClick={this.handleClick}>prev</button>
                    {this.state.isActive ? 
                    <div className='slide one'></div> : 
                    <div className='slide two'></div>}
                    <button onClick={this.handleClick}>next</button>
                </div>
            </div>
        )
    }
}

export default Home
import React from 'react'
import Slide from './Slide'

import leftArrow from '../../assets/Arrow-left.png'
import rightArrow from '../../assets/Arrow-right.png'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            imageIndex: 0,
            currentItem: {}
        }
    }

    componentDidMount() {
        this.setState(state => {
            state.items = this.props.data
            state.currentItem = state.items[state.imageIndex]
            return state
        })
    }
    previous = () => {
        if (this.state.imageIndex === 0) {
            this.setState(state => {
                state.imageIndex = state.items.length - 1
                state.currentItem = state.items[state.imageIndex]
                return state
            })
        } else {
            this.setState(state => {
                state.imageIndex = state.imageIndex - 1
                state.currentItem = state.items[state.imageIndex]
                return state
            })
        }
    }
    next = () => {
        if (this.state.imageIndex === this.state.items.length - 1) {
            this.setState(state => {
                console.log(this)
                state.imageIndex = 0
                state.currentItem = state.items[state.imageIndex]
                return state
            })
        } else {
            this.setState(state => {
                state.imageIndex = state.imageIndex + 1
                state.currentItem = state.items[state.imageIndex]
                return state
            })
        }

    }

    render() {
        return (
            <div className="carousel mobile">
                <div className="arr left-arrow">
                    <button className='arrow' onClick={() => this.previous()}><img src={leftArrow} alt='arrow' /></button>
                </div>
                <div className="carousel-image">
                    <Slide item={this.state.currentItem} id={this.state.imageIndex} />
                </div>
                <div className="arr right-arrow">
                    <button className='arrow' onClick={() => this.next()}><img src={rightArrow} alt='arrow' /></button>
                </div>
            </div>
        )
    }
}

export default Carousel
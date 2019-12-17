import React from 'react'
import { Switch } from 'react-router-dom'
import Routes from '../routes'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            item: {
                ingredients: [],
                image: '',
                recipe: ''
            }
        }
    }
    render() {
        return (
            <div>Hello World
                    <Routes />
            </div>
        )
    }
}

export default Container
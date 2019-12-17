import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            search: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async event => {
        event.preventDefault()
        const resp = await axios.get(`https://api.edamam.com/search?q=${this.state.search}&app_id=a658f766&app_key=404751045748e4a51448ab55aec45973`)

        const items = resp.data.hits
        this.setState({items}, () =>  this.props.history.push('/results', {items:this.state.items}))
        console.log(resp.data)
       
    }
   
    render() {

        return (
            <>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type='text' value={this.state.search} name='search' onChange={(e) => this.handleChange(e)}/>
                    <input type='submit'/>
                </form>
          
            </>
        )
    }
}



export default withRouter(Search)
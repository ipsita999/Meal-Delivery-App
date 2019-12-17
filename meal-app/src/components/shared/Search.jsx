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
        //    this.props.history.push('/results', {search:this.state.search})
       
            
    }
   


    // handleSubmit = async e => {
    //     console.log("hi")
    //     e.preventDefault()
    //     try {
    //         const response = await Axios.get(`https://api.edamam.com/search?q=${this.state.search}&app_id=a658f766&app_key=404751045748e4a51448ab55aec45973`)
    //         this.setState({ searched: response.data })
    //         console.log(response)
    //     } catch (error) {
    //         console.log('Error: ', error)
    //     }
    // }

    render() {

        // if (this.state.items.length > 0) {
        //     return <Redirect to={{ pathname: '/results', state: { items: this.state.items } }} />
        // }
        return (
            <>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type='text' value={this.state.search} name='search' onChange={(e) => this.handleChange(e)}/>
                    <input type='submit'/>
                </form>
                {/* {this.state.items.length > 0 ? 
                    <Redirect to='/results'/> : null
                } */}
            </>
        )
    }
}



export default withRouter(Search)
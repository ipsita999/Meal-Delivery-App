import React from 'react'
import '../../styles/Recipe.css'

class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            instructions: [
                'Preheat the oven to 425 degrees Fahrenheit.',
                'In a large skillet over medium heat, warm the olive oil over medium heat. Once shimmering, add the carrots, bell pepper, zucchini, yellow onion, and salt. Cook, stirring every couple of minutes, until the veggies are golden on the edges, about 8 to 12 minutes.',
                'Add a few large handfuls of spinach. Cook, stirring frequently, until the spinach has wilted. Repeat with remaining spinach and cook until all of the spinach has wilted, about 3 minutes. Remove the skillet from the heat and set aside.',
                'Pour half of the cottage cheese (1 cup) into the processor and blend it until smooth, about 1 minute. Transfer the mixture to large mixing bowl. No need to rinse out the bowl of the food processor this time; just put it back onto the machine because you’ll need it later.',
                'Spread ½ cup tomato sauce evenly over the bottom of a 9” by 9” baking dish. Layer 3 lasagna noodles on top (snap off their ends to fit, and/or overlap their edges as necessary). Spread half of the cottage cheese mixture evenly over the noodles. Top with ¾ cup tomato sauce, then sprinkle ½ cup shredded cheese on top.',
                'Top with 3 more noodles, followed by the remaining cottage cheese mixture (we’re skipping the tomato sauce in this layer.) Sprinkle ½ cup shredded cheese on top. ',
                'Top with 3 more noodles, then spread ¾ cup tomato sauce over the top (you may have a little sauce leftover) to evenly cover the noodles. Sprinkle evenly with 1 cup shredded cheese.',
                'Wrap a sheet of parchment paper around the top of the lasagna (or cover the lasagna with aluminum foil, but don’t let the foil touch the cheese). Bake, covered, for 18 minutes, then remove the cover, rotate the pan by 180° and continue cooking for about 10 to 12 more minutes, until the top is turning spotty brown.',
                'Remove from oven and let the lasagna cool for 15 to 20 minutes, so it has time to set and cool down to a reasonable temperature. Sprinkle additional basil over the top, then slice and serve.'
            ],
            item: this.props.location.state
        }
    }

    componentDidMount() {
        console.log(this)
        this.state.item.ingredientLines.map((item, index) => {
            return this.setState(state => {
                state.ingredients.push({ name: item, isChecked: true })
                return state
            }
            )
        })
        console.log(this)
        if (this.props.location.state.directions) {
            this.setState({ instructions: [this.props.location.state.directions] })
        }
    }


    handleCheck = index => {
        this.setState(state => {
            state.ingredients[index].isChecked = !state.ingredients[index].isChecked
            return state
        })
    }
    renderChecks = () => {
        if (this.state.ingredients.length) {
            return this.state.ingredients.map((box, index) => {
                return (
                    <div key={index}>
                        <input
                            id={1 + index}
                            type="checkbox"
                            value={this.state.ingredients[index].isChecked}
                            checked={this.state.ingredients[index].isChecked}
                            onChange={() => this.handleCheck(index)}
                            name={box.name}
                        />
                        <label htmlFor={1 + index}>{box.name}</label>
                    </div>
                )
            })
        }
    }

    renderInstructions = () => {
        return this.state.instructions.map((step, index) => (
            <li key={index}><span>{step}</span></li>
        ))
    }
    render() {
        return (
            <div className="results">
                <div className="main">


                    <div className="item-view">
                        <img className="food-image" src={this.state.item.image} alt="food" />
                        <div className="item-info">
                            <h3>{this.state.item.label}</h3>
                            <div className="item-top">
                                <div>
                                    <img className="timer-icon" src={require('../../assets/TIMER.png')} alt="timer" /><p>{this.state.item.totalTime ? this.state.item.totalTime : `30 mins`}</p>
                                </div>
                                <div>
                                    <img className="person-icon" src={require('../../assets/SERVINGS (PERSON ICON).png')} alt="person" /><p>4</p>
                                </div>
                            </div>
                            <div className="tools-needed">
                                <p>Tools needed:</p>
                                <ul>
                                    <li>11" X 6" Dish</li>
                                    <li>Oven</li>
                                    <li>Parchment Paper</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="item-description">
                        <h2>Instructions</h2>
                        <ol>
                            {this.renderInstructions()}
                        </ol>
                    </div>
                </div>

                <div className="ingredients-list">
                    <h3>Ingredients</h3>
                    <p>Select the ingredients you need.</p>
                    <div className="checkingredients">
                        {this.renderChecks()}
                    </div>
                    <div className="cart-button">
                        <button className="to-cart">ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe
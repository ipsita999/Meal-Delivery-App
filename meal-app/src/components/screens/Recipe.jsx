import React from 'react'
import '../../styles/Recipe.css'

class Recipe extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            ingridents: [
                {id: 1, name: 'Test', isChecked: true },
                {id: 1, name: 'Test', isChecked: true }
            ],
            instructions: [
                'step 1',
                'step 2',
                'step 3',
                'step 4'
            ]
        }
    }

    handleCheck = index => {
        this.setState(state => {
            state.ingridents[index].isChecked = !state.ingridents[index].isChecked
            return state
        })
    }
    renderChecks = () => {
        if (this.state.ingridents.length) {
            return this.state.ingridents.map((box, index) => {
                return (
                    <li key={box.id + index}>
                        <input
                            type="checkbox"
                            value={this.state.ingridents[index].isChecked}
                            checked={this.state.ingridents[index].isChecked}
                            onChange={() => this.handleCheck(index)}
                        />
                        <h3>{`${box.name} ${index + 1}`}</h3>
                    </li>
                )
            })
        }
    }

    renderInstructions = () => {
        return this.state.instructions.map((step, index) => (
            <li>{step}</li>
        ))
    }
    render() {
        return (
            <>
                <div className="item-view">
                    <img src="https://s3-alpha-sig.figma.com/img/b2ce/086b/868c85535386a51bc6ee5f53010cfeb6?Expires=1577664000&Signature=JpiUqPzyMuTTDMbNN-9TW3IPw2ZK-w0afmHQhl3Q8clyqDJvdHgDc2bgZgy5lm3lA0sfkARlvPJPN4z7mk2PN88xK2~ksduJH0VHdKlZOhAsgi56UfFrRnahq82CaPk3P8~SLCgluRexeCqt2ugjgmkVUqI2n9Eg9SBjVw3IX243g3LjxKs-wDFokaXHqNBWhSDjne8M0esj~2i7D6X10b7S2jOwMXEoZcArewleMPkP8c3iM-diyYVVYA2GrrSZF~H-e~9FTiYcvi2CzbzAiUDT5Z5QZY5~dC84J7mIX~jRMZS9AXhEaGC7IEKgcR3tY2OZECADfllnveiNiEWLzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                    <div className="item-info">
                        <h3>Name</h3>
                        <p>time: </p>
                    </div>
                </div>
                <div className="item-description">
                    <h2>Instructions</h2>
                    <ul>
                        {this.renderInstructions(['1', '2', '3'])}
                    </ul>
                </div>

                <div className="ingredients-list">
                    <h3>Ingredients</h3>
                    <p>Select the ingredients you need.</p>
                    <div className="checkingridents">
                        {this.renderChecks()}
                    </div>

                </div>
            </>
        )
    }
}

export default Recipe
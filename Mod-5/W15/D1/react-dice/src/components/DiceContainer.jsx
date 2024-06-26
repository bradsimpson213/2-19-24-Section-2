import { Component, useState, useEffect } from 'react'
import Die from "./Die"
import "./DiceContainer.css"


// TODO: Refactor this component to be a functional component


// class DiceContainer extends Component {
//     // STATIC DEFAULT PROPS: remember from learning about classes, static attributes 
//     // are created on the class, not instances of the class.  
//     static defaultProps = {
//         sides: ["one", "two", "three", "four", "five", "six"]
//     }
//     constructor(props){
//         super(props)
//         this.state = { die1: 'one', die2: "two", rollValue: 3, rolling: false };
//     }

//     roll = () => {
//         const num1 = Math.floor(Math.random() * this.props.sides.length)
//         const num2 = Math.floor(Math.random() * this.props.sides.length)
//         const dieRoll1 = this.props.sides[num1]
//         const dieRoll2 = this.props.sides[num2]
//         this.setState(
//             {
//                 die1: dieRoll1, 
//                 die2: dieRoll2, 
//                 rollValue: (num1 + num2 + 2), 
//                 rolling: true 
//             }
//         )

//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.die1 !== this.state.die1 || prevState.die2 !== this.state.die2) {
//             setTimeout(()=> {
//                 this.setState({rolling: false})
//             }, 1000)
//         }
//       }


//     render(){
//         return (
//             <div className="dice-roll-container">
//                 <div className="dice-container">
//                     <Die face={ this.state.die1 } 
//                         shake={ this.state.rolling } 
//                     />
//                     <Die face={ this.state.die2 }
//                         shake={ this.state.rolling }
//                     />
//                 </div>
//                 <div className="roll-text"
//                     style={ this.state.rolling ? { opacity: '0', transition: 'None' } : 
//                         { opacity: '1', transition: 'opacity 1.0s' }}
//                 >
//                     You rolled a { this.state.rollValue }!
//                 </div>
//                 <button 
//                     className="roll-button" 
//                     onClick={ this.roll }
//                     disabled={ this.state.rolling }
//                 >
//                     {this.state.rolling ? "Rolling..." : "Roll Dice!" }
//                 </button>
//             </div>
//         )
//     }
// }

function DiceContainer () {

    const sides = ["one", "two", "three", "four", "five", "six"]
    const [dieOne, setDieOne] = useState("one")
    const [dieTwo, setDieTwo] = useState("two")
    const [rollValue, setRoleValue] = useState(3)
    const [rolling, setRolling] = useState(false)



    const roll = () => {
        const num1 = Math.floor(Math.random() * sides.length)
        const num2 = Math.floor(Math.random() * sides.length)
        const dieRoll1 = sides[num1]
        const dieRoll2 = sides[num2]
        setDieOne(dieRoll1)
        setDieTwo(dieRoll2)
        setRoleValue(num1 + num2 + 2)
        setRolling(true)
    }

    useEffect( () => {
        const cancelTO = setTimeout( () => {
            setRolling(false)
        }, 1000)

        return () => clearTimeout(cancelTO)

    },[rolling])


    
        return (
            <div className="dice-roll-container">
                <div className="dice-container">
                    <Die face={ dieOne } 
                        shake={ rolling } 
                    />
                    <Die face={ dieTwo }
                        shake={ rolling }
                    />
                </div>
                <div className="roll-text"
                    style={ rolling ? { opacity: '0', transition: 'None' } : 
                        { opacity: '1', transition: 'opacity 1.0s' }}
                >
                    You rolled a { rollValue }!
                </div>
                <button 
                    className="roll-button" 
                    onClick={ roll }
                    disabled={ rolling }
                >
                    {rolling ? "Rolling..." : "Roll Dice!" }
                </button>
            </div>
        )
    }

export default DiceContainer
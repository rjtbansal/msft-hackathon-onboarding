import React, { Component } from 'react'
import './App.scss';
import Office from './components/Office/Office';
import Snake from './components/Snake/Snake'


// FOOD COORDINATES
const randomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x, y];
}

const initialState = {
  food: randomCoordinates(),
  direction: 'RIGHT',
  speed: 250,
  snakeBody : [
    [0,0]
  ],
}




class App extends Component {

  constructor(props){
    super(props)
    this.state = initialState
    } 


    componentDidMount(){
      document.onkeydown = this.onKeyDown;
    }

    restrictMotion = () => {
      const personCoordinates = this.state.snakeBody

      if(personCoordinates[0][0] >= 94){
        return true
      }

      return false

    }

    movePerson = (direction) => {

      if(direction === "RIGHT"){
        const personCoordinates = this.state.snakeBody
        
        if(personCoordinates[0][0] >= 94){
          return
        }

        personCoordinates[0][0] = parseInt(personCoordinates[0][0]) + 2
        this.setState({
          snakeBody: personCoordinates
        })

      }

      else if(direction === "LEFT"){
        
        const personCoordinates = this.state.snakeBody

        if(personCoordinates[0][0] <= 0){
          return
        }

        personCoordinates[0][0] = parseInt(personCoordinates[0][0]) - 2
        this.setState({
          snakeBody: personCoordinates
        })

      }

      else if(direction === "UP"){

        const personCoordinates = this.state.snakeBody

        if(
          personCoordinates[0][1] <= 0 ||
          (personCoordinates[0][0] <= 35 && personCoordinates[0][1] <= 16) ||
          (personCoordinates[0][0] >= 58 && personCoordinates[0][1] <= 16) ||
          (personCoordinates[0][0] <= 35 && (personCoordinates[0][1] >= 54 && personCoordinates[0][1] < 57) ||
          personCoordinates[0][0] >= 58 && (personCoordinates[0][1] >= 54 && personCoordinates[0][1] < 57) 
          ) 
          ){
          return
        }

        personCoordinates[0][1] = parseInt(personCoordinates[0][1]) - 2
        this.setState({
          snakeBody: personCoordinates
        })

      }

      else if(direction === "DOWN"){

        const personCoordinates = this.state.snakeBody

        if(
          personCoordinates[0][1] >= 80 ||
          (personCoordinates[0][0] <= 42 && personCoordinates[0][1] <= 2) ||
          (personCoordinates[0][0] >= 55 && personCoordinates[0][1] <= 2) ||
          (personCoordinates[0][0] <= 42 && (personCoordinates[0][1] >= 42 && personCoordinates[0][1] <=  55)) ||
          (personCoordinates[0][0] >= 55 && (personCoordinates[0][1] >= 42 && personCoordinates[0][1] <=  55)) 
          ){
          return
        }

        personCoordinates[0][1] = parseInt(personCoordinates[0][1]) + 2
        this.setState({
          snakeBody: personCoordinates
        })

      }

    }

   

    onKeyDown = (e) => {
      switch (e.keyCode){
        case 38: 
          this.setState({direction: 'UP'});
          this.movePerson('UP')
          break;
        case 40: 
          this.setState({direction: 'DOWN'});
          this.movePerson('DOWN')
          break;
        case 37: 
          this.setState({direction: 'LEFT'});
          this.movePerson('LEFT')
          break;
        case 39: 
          this.setState({direction: 'RIGHT'});
          this.movePerson('RIGHT')
          break;
      }
    }
    

    

  render() {
    return (
      <div className="App">
        <Office>
          <Snake snakeBody = {this.state.snakeBody} />
        </Office>
      </div>
    )
  }
}


export default App


// Write your code here

import {Component} from 'react'
import './index.css'

import Card from './components/DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <input type="search" className="input-element" />
        <div className="card-container">
          {destinationsList.map(eachDestination => (
            <Card
              name={eachDestination.name}
              url={eachDestination.imgUrl}
              key={eachDestination.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch

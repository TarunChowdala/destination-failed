// Write your code here
import './index.css'

const Card = props => {
  const {url, name} = props
  return (
    <div>
      <img src={url} alt={name} />
      <h1>{name}</h1>
    </div>
  )
}

export default Card

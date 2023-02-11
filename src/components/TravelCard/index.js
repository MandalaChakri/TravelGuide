import './index.css'

const TravelCard = props => {
  const {travelItem} = props
  const {id, imageUrl, name, description} = travelItem

  return (
    <div className="travel-card-container">
      <img src={imageUrl} className="image" alt={name} />
      <h2 className="heading">{name}</h2>
      <p className="para">{description}</p>
    </div>
  )
}
export default TravelCard

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelCard from '../TravelCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TravelGuide extends Component {
  state = {
    isLoading: true,
    travelData: [],
  }

  componentDidMount() {
    this.getTravelDetails()
  }

  getTravelDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
      description: eachItem.description,
    }))
    this.setState({
      travelData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {travelData, isLoading} = this.state

    return (
      <>
        <h1 className="title">TravelGuide</h1>
        <div className="travel-list-container">
          {isLoading ? (
            <Loader
              type="TailSpin"
              color="#00BFFF"
              data-testid="loader"
              height={50}
              width={50}
            />
          ) : (
            travelData.map(item => (
              <TravelCard travelItem={item} key={item.id} />
            ))
          )}
        </div>
      </>
    )
  }
}
export default TravelGuide

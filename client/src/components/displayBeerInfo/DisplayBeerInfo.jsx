import {useParams} from "react-router-dom"
import axios from "axios"
import {useState, useEffect} from "react"
import RemoveDuplicates from "../RemoveDuplicates"
import FavoritesButton from "../favoritesButton/FavoritesButton"
import {DisplayBeerInfoContainer} from "../styles/DisplayBeerInfoContainer.styled"
import {ListContainer} from "../styles/ListContainer.styled"
import "./displayBeerInfo.css"

const DisplayBeerInfo = () => {
  const params = useParams()
  const {id} = params
  const [beerData, setBeerData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://api.punkapi.com/v2/beers/`
      let res = await axios.get(`${url}${id}`)
      setBeerData(res.data[0])
    }
    fetchData()
  }, [id])

  return (
    <DisplayBeerInfoContainer>
      <h1>Beer Name</h1>
      <p>{beerData?.name}</p>
      <h1>Description</h1>
      <p>{beerData?.description}</p>
      <FavoritesButton favorite={beerData} />
      <ListContainer>
        <div className="ingredients-container">
          <h1>Ingredient List</h1>
          <div className="ingredients-text-container">
            <p className="title">Yeast List</p>
            <p>{beerData?.ingredients?.yeast}</p>
            <p className="title">Malt List</p>
            {beerData?.ingredients?.malt.map((malt) => {
              return (
                <div className="list-container">
                  <p key={malt?.name}>{malt?.name}</p>
                </div>
              )
            })}
            <p className="title">Hops List</p>
            <div className="list-container">
              <RemoveDuplicates beerData={beerData} />
            </div>
          </div>
        </div>

        <div className="guidelines-container">
          <h1>Brewing Guidline</h1>
          <div className="ingredients-text-container">
            <p className="title">Fermentation Temperature</p>
            <p>{`${beerData?.method?.fermentation?.temp?.value} degrees ${beerData?.method?.fermentation?.temp?.unit}`}</p>
            <p className="title">Mash Temperature</p>
            <p>{`${beerData?.method?.mash_temp[0]?.temp?.value} degrees ${beerData?.method?.mash_temp[0]?.temp?.unit}`}</p>
            <p className="title">Mash Duration</p>
            <p>{`${beerData?.method?.mash_temp[0]?.duration} minutes`}</p>
          </div>
        </div>
      </ListContainer>
    </DisplayBeerInfoContainer>
  )
}

export default DisplayBeerInfo

import {useParams} from "react-router-dom"
import axios from "axios"
import {useState, useEffect} from "react"
import RemoveDuplicates from "./RemoveDuplicates"
import FavoritesButton from "./FavoritesButton"
import {DisplayBeerInfoContainer} from "./styles/DisplayBeerInfoContainer.styled"
import {GuidelineContainer} from "./styles/GuidelineContainer.styled"
import {IngredientListContainer} from "./styles/IngredientListContainer.styled"
import {ListContainer} from "./styles/ListContainer.styled"

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
  }, [])

  return (
    <DisplayBeerInfoContainer>
      <h1>Beer Name</h1>
      <p>{beerData?.name}</p>
      <h1>Description</h1>
      <p>{beerData?.description}</p>
      <FavoritesButton favorite={beerData} />
      <ListContainer>
        <IngredientListContainer>
          <h1>Ingredient List</h1>
          <h2>Yeast List</h2>
          <p>{beerData?.ingredients?.yeast}</p>
          <h2>Malt List</h2>
          {beerData?.ingredients?.malt.map((malt) => {
            return <p key={malt?.name}>{malt?.name}</p>
          })}
          <h2>Hops List</h2>
          <RemoveDuplicates beerData={beerData} />
        </IngredientListContainer>
        <GuidelineContainer>
          <h1>Brewing Guidline</h1>
          <h2>Fermentation Temperature</h2>
          <p>{`${beerData?.method?.fermentation?.temp?.value} degrees ${beerData?.method?.fermentation?.temp?.unit}`}</p>
          <h2>Mash Temperature</h2>
          <p>{`${beerData?.method?.mash_temp[0]?.temp?.value} degrees ${beerData?.method?.mash_temp[0]?.temp?.unit}`}</p>
          <h2>Mash Duration</h2>
          <p>{`${beerData?.method?.mash_temp[0]?.duration} minutes`}</p>
        </GuidelineContainer>
      </ListContainer>
    </DisplayBeerInfoContainer>
  )
}

export default DisplayBeerInfo

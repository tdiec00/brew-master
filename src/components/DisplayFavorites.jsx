import {useState, useEffect} from "react"
import api from "../services/apiConfig"
import {FavoritesLink} from "./styles/FavoritesLink.styled"
import {FavoriteListContainer} from "./styles/FavoriteListContainer.styled"
import DeleteButton from "./DeleteButton"
const DisplayFavorites = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let res = await api.get()
      setDatas(res.data.records)
    }
    fetchData()
  }, [])

  return (
    <div>
      <FavoriteListContainer>
        <h1>Your List Favorite Beers</h1>
        <ul>
          {datas.map((data) => {
            return (
              <FavoritesLink to={`/description/${data.fields.id}`}>
                <li key={data.id}>{data.fields.name}</li>
                <DeleteButton />
              </FavoritesLink>
            )
          })}
        </ul>
      </FavoriteListContainer>
    </div>
  )
}

export default DisplayFavorites

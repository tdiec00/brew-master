import {useNavigate} from "react-router-dom"
import api from "../../services/apiConfig"
import "./favoritesButton.css"

const FavoritesButton = ({favorite}) => {
  const default_input = {
    name: favorite.name,
    id: favorite.id,
    description: favorite.description,
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fields = default_input
    await api.post("/", {fields})
    navigate("/favorites")
  }

  return (
    <div className="favorite-button">
      <button onClick={handleSubmit}>Add to Favorites List</button>
    </div>
  )
}

export default FavoritesButton

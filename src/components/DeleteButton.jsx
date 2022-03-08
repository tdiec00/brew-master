import api from "../services/apiConfig"

export default function DeleteButton(props) {
  const handleDelete = async () => {
    await api.delete(props.id)
    window.location.reload(false)
  }

  return <button onClick={() => handleDelete()}>Delete</button>
}

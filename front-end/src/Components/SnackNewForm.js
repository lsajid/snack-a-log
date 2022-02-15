import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  const [ snack, setSnack ] = useState({
    name: "",
    image: "",
    fiber: null,
    protein: null,
    added_sugar: null,
    is_healthy: null
  });

  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios.post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({...snack, [event.target.id]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={snack.name}
          onChange={handleTextChange} 
        />
        <label htmlFor="image">Image</label>
        <input 
          id="image"
          type="text"
          value={snack.image}
          onChange={handleTextChange} 
        />
        <label htmlFor="fiber">Fiber</label>
        <input 
          id="fiber"
          type="number"
          value={snack.fiber}
          onChange={handleTextChange} 
        />
        <label htmlFor="protein">Protein</label>
        <input
          id="protein"
          type="number"
          value={snack.protein} 
          onChange={handleTextChange} 
        />
        <label htmlFor="added_sugar">Added Sugar</label>
        <input 
          id="added_sugar"
          type="number"
          value={snack.added_sugar} 
          onChange={handleTextChange} 
        />
        <br />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default SnackNewForm
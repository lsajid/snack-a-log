import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
	const { id } = useParams();
	let navigate = useNavigate();

	const [snack, setSnack] = useState({
		name: "",
		image: "",
		fiber: "",
		protein: "",
		added_sugar: "",
	});

	const updateSnack = (updatedSnack) => {
		axios
			.put(`${API}/snacks/${id}`, updatedSnack)
			.then(
				() => {
					navigate(`/snacks/${id}`);
				},
				(error) => console.error(error)
			)
			.catch((c) => console.warn("catch", c));
	};

	const handleTextChange = (event) => {
		setSnack({ ...snack, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		axios
			.get(`${API}/snacks/${id}`)
			.then(
				(res) => setSnack(res.data.payload),
				(error) => navigate(`not-found`)
			)
			.catch((err) => console.log(err));
	}, [id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		updateSnack(snack, id);
		navigate("/snacks");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					value={snack.name}
					onChange={handleTextChange}
					required
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
				<input type="submit" />
			</form>
		</div>
	);
}

export default SnackEditForm;

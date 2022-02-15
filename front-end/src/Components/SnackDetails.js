import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import solid from "../assets/heart-solid.png";
import regular from "../assets/heart-regular.png";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
	const [snack, setSnack] = useState([]);
	let { id } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		axios
			.get(API + "/snacks/" + id)
			.then((res) => {
				setSnack(res.data.payload);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const handleDelete = () => {
		axios
			.delete(`${API}/snacks/${id}`)
			.then((res) => {
				navigate("/snacks");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<aside>
			<article>
				<h2>{snack.name}</h2>
				{snack.is_healthy ? (
					<img src={solid} alt="healthy food" />
				) : (
					<img src={regular} alt="unhealthy food" />
				)}
				<div>
					<img src={snack.image} alt={snack.name}></img>
				</div>
				<div>Protein: {snack.protein}</div>
				<div>Fiber: {snack.fiber}</div>
				<div>Added Sugar: {snack.added_sugar}</div>
			</article>

			<button onClick={handleDelete}>Delete</button>
			<button>
				<Link to={`/snacks/${id}/edit`}>Edit</Link>
			</button>
			<button>
				<Link to="/snacks"> <a href="/snacks">Back</a></Link>
			</button>
		</aside>
	);
}

export default SnackDetails;

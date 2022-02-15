import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
	const [snack, setSnack] = useState();
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

	console.log(snack);

	return (
		<article>
			<aside>
				<img />
			</aside>
			<div>{/* <img src={snack.image} alt="Snack" /> */}</div>
		</article>
	);
}

export default SnackDetails;

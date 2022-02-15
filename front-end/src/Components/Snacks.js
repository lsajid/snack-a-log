import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
	// state to be stored
	const [snacks, setSnacks] = useState([]);
	useEffect(() => {
		axios
			.get(API + "/snacks")
			.then((res) => {
				setSnacks(res.data.payload);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<main>
			<h1>Index Page</h1>
			<section className="Snacks">
				{snacks.map((e) => {
					return (
						<article key={e.id} className="Snack">
							<Link to={`/snacks/${e.id}`}>
									<img src={e.image} alt="Snack picture" />
									<h4><HeartHealth snackHealth={e.is_healthy}/></h4>
									<h4>{e.name}</h4>
								
							</Link>
						</article>
					);
				})}
			</section>
		</main>
	);
}

export default Snacks;
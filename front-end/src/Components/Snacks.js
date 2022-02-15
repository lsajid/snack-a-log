import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import solid from "../assets/heart-solid.png";
import regular from "../assets/heart-regular.png";

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
								<div>
									<img src={e.image} alt="Snack picture" />
									{e.is_healthy ? (
										<div>
											<h4 alt="healthy food">{e.name} </h4>{" "}
											<img height="10px" src={solid} />
										</div>
									) : (
										<div>
											<h4 alt="unhealthy food">{e.name} </h4>
											<img height="50px" src={regular} />
										</div>
									)}
								</div>
							</Link>
						</article>
					);
				})}
			</section>
		</main>
	);
}

export default Snacks;

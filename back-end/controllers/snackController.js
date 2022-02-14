const express = require("express");
const snacks = express.Router();
const {
	getAllSnacks,
	getSnack,
	createSnack,
	deletedSnack,
} = require("../queries/snacks");

const { confirmHealth } = require("../confirmHealth");

// get all snacks
snacks.get("/", async (req, res) => {
	try {
		const allSnacks = await getAllSnacks();

		if (allSnacks[0]) {
			// console.log(allSnacks);
			res.status(200).json({ success: true, payload: allSnacks });
		} else {
			res.status(500).json({
				error: "server error",
			});
		}
	} catch (err) {
		console.log(err);
	}
});

// get indivigual snack
snacks.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const oneSnack = await getSnack(id);
		if (oneSnack.id) {
			res.status(200).json({ success: true, payload: oneSnack });
		} else {
			res.status(404).json({ success: false, payload: "/not found/" });
		}
	} catch (err) {
		console.log(err);
	}
});

snacks.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deleteSnack = await deletedSnack(id);
		if (deleteSnack.id) {
			res.status(200).json({ success: true, payload: deleteSnack });
		} else {
			res.status(404).json({ success: false, payload: "/not found/" });
		}
	} catch (err) {
		console.log(err);
	}
});

snacks.post("/", async (req, res) => {
	const { body } = req;
	body.is_healthy = confirmHealth(body);
	try {
		const createdSnack = await createSnack(body);
		if (createdSnack.id) {
			res.status(200).json({ success: true, payload: createdSnack });
		} else {
			res.status(404).json({ success: false, payload: "/not found/" });
		}
	} catch (err) {
		console.log(err);
	}
});

// snacks.post("/", async (req, res) => {
// 	const { body } = req;
// 	console.log(body);
// 	try {
// 		const createdSnack = await createSnack(body);

// 		if (createdSnack.id) {
// 			if (typeof body.name !== "string") {
// 				res.status(422).json({ error: "Must include name field" });
// 			} else if (typeof body.name === "string" && body.image === "") {
// 				body.image =
// 					"https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
// 				res.status(200).json({ success: true, payload: createdSnack });
// 			}
// 			res.status(200).json({ success: true, payload: createdSnack });
// 		} else {
// 			res.status(404).json({ success: false, payload: "/not found/" });
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// });

module.exports = snacks;

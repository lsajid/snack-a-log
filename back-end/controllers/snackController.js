const express = require("express");
const snacks = express.Router();
const {
	getAllSnacks,
	getSnack,
	createSnack,
	deletedSnack,
	updateSnack,
} = require("../queries/snacks");
const validateSpace = require("../validations/stringValidation.js");
const confirmHealth = require("../confirmHealth.js");

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
	body.name = validateSpace(body);
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

snacks.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const updatedSnack = await updateSnack(id, body);
	
	if (updatedSnack.id) {
		res.status(200).json({ success: true, payload: updatedSnack});
	} else {
		res.status(404).json({ error: "Snack not found " });
	}
});

module.exports = snacks;
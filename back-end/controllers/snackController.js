const express = require("express");
const { one } = require("../db/dbConfig");
const snacks = express.Router();
const { getAllSnacks, getSnack } = require("../queries/snacks");

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

module.exports = snacks;

// .payload).toMatch(/not found/)

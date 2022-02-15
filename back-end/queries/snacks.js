const db = require("../db/dbConfig.js");

// creating a method to get all the information

const getAllSnacks = async () => {
	try {
		const getAllSnacks = await db.any("SELECT * FROM snacks");
		return getAllSnacks;
	} catch (err) {
		return err;
	}
};

const getSnack = async (id) => {
	try {
		const getSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
		return getSnack;
	} catch (err) {
		return err;
	}
};

const createSnack = async (snack) => {
	try {
		const newSnack = await db.one(
			"INSERT INTO snacks (name,image , fiber, protein, added_sugar, is_healthy) VALUES ($1 , $2 , $3 , $4 , $5 , $6) RETURNING *",
			[
				snack.name,
				snack.image,
				snack.fiber,
				snack.protein,
				snack.added_sugar,
				snack.is_healthy,
			]
		);
		return newSnack;
	} catch (err) {
		return err;
	}
};

const deletedSnack = async (id) => {
	try {
		const deleteSnack = await db.one(
			"DELETE FROM snacks WHERE id = $1 RETURNING * ",
			id
		);
		return deleteSnack;
	} catch (err) {
		return err;
	}
};

const updateSnack = async (id, snack) => {
	try {
		const updateSnack = await db.one(
			"UPDATE snacks SET name=$1, image=$2 , fiber=$3 , protein=$4 , added_sugar=$5 WHERE id=$6 RETURNING *",
			[
				snack.name,
				snack.image,
				snack.fiber,
				snack.protein,
				snack.added_sugar,
				id,
			]
		);
		return updateSnack;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllSnacks,
	getSnack,
	createSnack,
	deletedSnack,
	updateSnack,
};

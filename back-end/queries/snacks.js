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

module.exports = { getAllSnacks, getSnack };

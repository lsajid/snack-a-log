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

module.exports = { getAllSnacks };

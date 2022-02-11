const express = require("express");
const snacks = express.Router();
const { getAllSnacks } = require("../queries/snacks");

// get all snacks

snacks.get("/", async (req, res) => {
	try {
		const allSnacks = await getAllSnacks();

		if (allSnacks[0]) {
			console.log(allSnacks);
			res.status(200).json({ success: true, payload: { allSnacks } });
		} else {
			res.status(500).json({
				error: "server error",
			});
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = snacks;

// {
//     "success":true,
//     "payload":{
//       "id":3,
//       "name":"Honey Covered Granola",
//       "image":"https://picsum.photos/id/312/300/300",
//       "fiber":30,"protein":12,"added_sugar":22,
//       "is_healthy":false
//     }
//   }

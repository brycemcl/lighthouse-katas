const whereCanIPark = function (spots, vehicle) {
	parkingLot.replaceLayout(spots);
	// uncomment to see debuging info
	//	count(vehicle);
	return parkingLot.park(vehicle);
};
//logic is contained in the parkingLot object
//park, leave & replaceLayout methods are implemented
//the park method will try to fit the vehicle into the smallest spot possible
//there is no point of putting a motorcycle into a full size spot
const parkingLot = {
	layout: [],
	availableSpots: {
		regularCar: [],
		small: [],
		motorcycle: [],
	},
	park: function (kindOfVehicle) {
		let spotAvailable;
		const canIFitInSpot = function (kindOfVehicle, spotSize) {
			if (kindOfVehicle === "regular") {
				switch (spotSize) {
					case "R":
						return true;
					default:
						return false;
				}
			} else if (kindOfVehicle === "small") {
				switch (spotSize) {
					case "R":
						return true;
					case "S":
						return true;
					default:
						return false;
				}
			} else if (kindOfVehicle === "motorcycle") {
				switch (spotSize) {
					case "R":
						return true;
					case "S":
						return true;
					case "M":
						return true;
					default:
						return false;
				}
			}
		};
		const whatTypeOfSpotShouldIParkIn = function () {
			if (
				parkingLot.availableSpots.motorcycle.length > 0 &&
				canIFitInSpot(kindOfVehicle, "M")
			) {
				return "motorcycle";
			} else if (
				parkingLot.availableSpots.small.length > 0 &&
				canIFitInSpot(kindOfVehicle, "S")
			) {
				return "small";
			} else if (
				parkingLot.availableSpots.regularCar.length > 0 &&
				canIFitInSpot(kindOfVehicle, "R")
			) {
				return "regularCar";
			} else {
				return false;
			}
		};
		const parkInSpot = function (type) {
			let assignedParkingSpot = parkingLot.availableSpots[type][0];
			parkingLot.availableSpots[type].splice(0, 1);
			parkingLot.layout[assignedParkingSpot[1]][
				assignedParkingSpot[0]
			] = parkingLot.layout[assignedParkingSpot[1]][
				assignedParkingSpot[0]
			].toLowerCase();
			return assignedParkingSpot;
		};
		if ((spotAvailable = whatTypeOfSpotShouldIParkIn(kindOfVehicle))) {
			return parkInSpot(spotAvailable);
		} else {
			return spotAvailable;
		}
	},
	leave: function (spot) {
		switch (parkingLot.layout[spot[1]][spot[0]]) {
			case "r":
				parkingLot.layout[spot[1]][spot[0]] = "R";
				parkingLot.availableSpots.regularCar.push([spot[1], spot[0]]);
				return true;
			case "s":
				parkingLot.layout[spot[1]][spot[0]] = "S";
				parkingLot.availableSpots.small.push([spot[1], spot[0]]);
				return true;
			case "m":
				parkingLot.layout[spot[1]][spot[0]] = "M";
				parkingLot.availableSpots.motorcycle.push([spot[1], spot[0]]);
				return true;
			default:
				console.error("The spot was already empty");
				return false;
		}
	},
	replaceLayout: function (layout) {
		parkingLot.layout = layout;
		parkingLot.availableSpots.regularCar = [];
		parkingLot.availableSpots.small = [];
		parkingLot.availableSpots.motorcycle = [];
		for (let row = 0; row < layout.length; row++) {
			for (let column = 0; column < layout[row].length; column++) {
				if (/[R]/.test(layout[row][column])) {
					parkingLot.availableSpots.regularCar.push([column, row]);
				} else if (/[S]/.test(layout[row][column])) {
					parkingLot.availableSpots.small.push([column, row]);
				} else if (/[M]/.test(layout[row][column])) {
					parkingLot.availableSpots.motorcycle.push([column, row]);
				}
			}
		}
	},
};

let counter = 0;
const count = function (note = "") {
	counter++;
	console.info(
		"###############################################################"
	);
	console.info("count " + counter);
	console.info(note);
	console.table(parkingLot.layout);
	console.info(parkingLot.availableSpots);
	console.info(
		"###############################################################"
	);
};

console.log(
	whereCanIPark(
		[
			// COLUMNS ARE X
			// 0    1    2    3    4    5
			["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
			["s", "M", "s", "S", "r", "M"], // 1
			["s", "M", "s", "S", "r", "m"], // 2
			["S", "r", "s", "m", "r", "M"], // 3
			["S", "r", "s", "m", "r", "M"], // 4
			["S", "r", "S", "M", "M", "S"], // 5
		],
		"regular"
	)
);

console.log(
	whereCanIPark(
		[
			["M", "M", "M", "M"],
			["M", "s", "M", "M"],
			["M", "M", "M", "M"],
			["M", "M", "r", "M"],
		],
		"small"
	)
);

console.log(
	whereCanIPark(
		[
			["s", "s", "s", "s", "s", "s"],
			["s", "m", "s", "S", "r", "s"],
			["s", "m", "s", "S", "r", "s"],
			["S", "r", "s", "m", "r", "s"],
			["S", "r", "s", "m", "R", "s"],
			["S", "r", "S", "M", "m", "S"],
		],
		"motorcycle"
	)
);

const blocksAway = function (directions) {
	//	let direction = 'north' // this would make sense if we already had a direction
	//left or right doesn't really work when you are given a point to start
	//this is a workaround based off what direction the samples consider as left or right
	let direction
	if (directions[0] === 'right') {
		direction = 'north'
	} else {
		direction = 'east'
	}
	let startingPosition = [0, 0]
	for (const movementCommand of directions) {
		if (typeof movementCommand === 'number') {
			switch (direction) {
				case 'north':
					startingPosition[1] += movementCommand
					break
				case 'east':
					startingPosition[0] += movementCommand
					break
				case 'south':
					startingPosition[1] -= movementCommand
					break
				case 'west':
					startingPosition[0] -= movementCommand
					break
			}
		} else {
			if (movementCommand === 'left') {
				switch (direction) {
					case 'north':
						direction = 'west'
						break
					case 'east':
						direction = 'north'
						break
					case 'south':
						direction = 'east'
						break
					case 'west':
						direction = 'south'
						break
				}
			} else if (movementCommand === 'right') {
				switch (direction) {
					case 'north':
						direction = 'east'
						break
					case 'east':
						direction = 'south'
						break
					case 'south':
						direction = 'west'
						break
					case 'west':
						direction = 'north'
						break
				}
			}
		}
	}
	return {
		east: startingPosition[0],
		north: startingPosition[1],
	}
}

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]))
console.log(
	blocksAway([
		'left',
		1,
		'right',
		1,
		'left',
		1,
		'right',
		1,
		'left',
		1,
		'right',
		1,
	])
)
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]))

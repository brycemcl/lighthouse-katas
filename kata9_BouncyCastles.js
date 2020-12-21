// Use the value below whenever you need the value of Pi
const PI = 3.14159

const sphereVolume = function (radius) {
	return (4 / 3) * Math.PI * radius * radius * radius
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189)

const coneVolume = function (radius, height) {
	return Math.PI * radius * radius * (height / 3)
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49)

const prismVolume = function (height, width, depth) {
	return height * width * depth
}

console.log(prismVolume(3, 4, 5) === 60)

const objectVolume = function (object) {
	switch (object.type) {
		case 'sphere':
			return sphereVolume(object.radius)
		case 'cone':
			return coneVolume(object.radius, object.height)
		case 'prism':
			return prismVolume(object.height, object.width, object.depth)
		default:
			console.error('not a valid object')
			return 0
	}
}

const totalVolume = function (solids) {
	let volumeToReturn = 0
	for (object of solids) {
		volumeToReturn += objectVolume(object)
	}
	return volumeToReturn
}

const prism = {
	type: 'prism',
	height: 10,
	width: 10,
	depth: 10,
}

const largeSphere = {
	type: 'sphere',
	radius: 40,
}

const smallSphere = {
	type: 'sphere',
	radius: 10,
}

const cone = {
	type: 'cone',
	radius: 3,
	height: 5,
}

const duck = [largeSphere, smallSphere, cone]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000)

import React from "react"



function Entity({ x = 0, y = 0, width = null, heigth = null, source = null }) {

	let style = {

		position	: "absolute",
		left		: `${x}vh`,
		bottom		: `${y}vh`,
		width		: `${width}vh`,
		height		: `${heigth}vh`,
	}

	return (
		<img style={style} src={source} alt="Entity" />
	)
}

export default Entity

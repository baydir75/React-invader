import React from "react"
import Entity from "./Entity";

import image from "../Images/fighter.png"

const Player = p =>

    <Entity
        x={p.x} y={2}
        width={6}
        heigth={7}
        source={image}
    />

export default Player;

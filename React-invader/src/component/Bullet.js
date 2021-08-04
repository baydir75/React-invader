import React from "react";
import Entity from "./Entity";

import image from "../Images/bullet.png"


const Bullet = p => (

    <Entity
        x={p.x} y={p.y}
        width={0.8} heigth={4}
        source={image}
    />
)

export default Bullet

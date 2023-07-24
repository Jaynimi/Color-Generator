import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	console.log(hexColor);
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	const hex = rgbToHex(...rgb);

	return (
		<article
			className={`${index > 10 && "text-white"}`}
			style={{ backgroundColor: `rgb(${bcg})` }}>
			<p className="">{weight}%</p>
			<p className="">{`rgb(${bcg})`}</p>
			<p className="">{`#${hexColor}`}</p>
		</article>
	);
};

export default SingleColor;

import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	console.log(hexColor);
	const [hexAlert, setHexAlert] = useState(false);
	const [rgbAlert, setRgbAlert] = useState(false);
	const rgbs = `rgb(${rgb.join(",")})`;
	const hexValue = `#${hexColor}`;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setHexAlert(false);
			setRgbAlert(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [hexAlert, rgbAlert]);

	return (
		<article
			className={` w-large h-32 ${index > 10 && "text-white"}`}
			style={{ backgroundColor: `${rgbs}` }}>
			<div className="pl-3 pt-3">
				<p className="">{weight}%</p>
				<p
					className=""
					onClick={() => {
						setHexAlert(true);
						navigator.clipboard.writeText(hexValue);
					}}>
					{hexValue}
				</p>
				<p
					className="text-xs"
					onClick={() => {
						setRgbAlert(true);
						navigator.clipboard.writeText(rgbs);
					}}>
					{rgbs}
				</p>
			</div>
			{hexAlert && <p className="">Copied HEX to Clipboard </p>}
			{rgbAlert && <p className="">Copied RGB to Clipboard </p>}
		</article>
	);
};

export default SingleColor;

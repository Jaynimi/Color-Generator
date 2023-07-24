import { useState } from "react";
import SingleColor from "./SingleColor.jsx";
import Values from "values.js";
function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
			setError(false);
			console.log(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className="">
				<h3>Jay&apos;s Colors</h3>
				<form action="" onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="#f15025"
						className={`focus:outline-none border-2 border-blue-200 ${
							error ? "border-4 border-red-500" : null
						} `}
					/>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</section>
			<section className="">
				{list.map((color, index) => {
					console.log(color);
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;

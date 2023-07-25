import { useState } from "react";
import SingleColor from "./SingleColor.jsx";
import Values from "values.js";
function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values("#b284be").all(10));

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
			<div className="overflow-hidden bg-box">
				<section className="flex my-12 place-items-center justify-center">
					<h3 className="text-center text-4xl text-header font-quicksand mr-12">
						Jay&apos;s Colors
					</h3>
					<form action="" onSubmit={handleSubmit} className="text-center">
						<input
							type="text"
							value={color}
							onChange={(e) => setColor(e.target.value)}
							placeholder="#b284Be"
							className={`focus:outline-none border-2 border-box rounded-sm ${
								error ? "border-4 border-red-500" : null
							} `}
						/>
						<button
							className="text-box font-quicksand px-2 py-1 mx-3 bg-header rounded-md"
							type="submit">
							Submit
						</button>
					</form>
				</section>
				<section className="flex flex-column flex-wrap ">
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
			</div>
		</>
	);
}

export default App;

import React from "react";
import DeviceData from "../device_data.json";

export default function CustomDropdown(props) {
	const checkbox = React.useRef();
	const [customInput, setCustomInput] = React.useState(false);

	const onCheckboxChange = (e) => {
		setCustomInput(e.target.checked);
	};

	const onValueChange = (e) => {
		if (checkbox.current.checked) {
			props.customSet(e.target.value, true);
		} else {
			props.customSet(e.target.selectedIndex, false);
		}
	};

	return (
		<>
			{props.deviceDataId}
			<form>
				<input
					type="checkbox"
					checked={customInput}
					onChange={onCheckboxChange}
					ref={checkbox}
				/>
				{customInput ? (
					<input type="text" onChange={onValueChange} />
				) : (
					<select id="cars" onChange={onValueChange}>
						{DeviceData[props.deviceDataId].map((el, index) => (
							<option key={index} value={el}>
								{el}
							</option>
						))}
					</select>
				)}
			</form>
		</>
	);
}
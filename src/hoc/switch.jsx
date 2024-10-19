import React, { useState } from "react";

const ToggleSwitch = ({ onToggle }) => {
	const [check, setCheck] = useState(false);

	const handleToggle = (event) => {
		const newCheck = event.target.checked;
		setCheck(newCheck);
		onToggle(newCheck);
	};

	return (
		<label
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				cursor: 'pointer',
				color: '#394a56'
			}}
		>
			<div
				style={{
					isolation: 'isolate',
					position: 'relative',
					height: '30px',
					width: '60px',
					borderRadius: '15px',
					overflow: 'hidden',
					boxShadow: check
						? '-8px -4px 8px 0px rgb(200, 200, 200), 8px 4px 12px 0px rgb(220, 220, 220), 4px 4px 4px 0px rgb(220, 220, 220) inset, -4px -4px 4px 0px rgb(250, 250, 250) inset'
						: '-8px -4px 8px 0px rgb(50, 50, 50), 8px 4px 12px 0px rgb(25, 25, 25), 4px 4px 4px 0px rgb(25, 25, 25) inset, -4px -4px 4px 0px rgb(50, 50, 50) inset'
				}}
			>
				<input
					style={{ display: 'none' }}
					type="checkbox"
					name="check"
					value="check"
					checked={check}
					onChange={handleToggle}
				/>
				<div
					style={{
						height: '100%',
						width: '200%',
						background: check ? '#F5F7F8' : '#262626',
						borderRadius: '15px',
						transform: check ? 'translate3d(25%, 0, 0)' : 'translate3d(-75%, 0, 0)',
						transition: 'transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35), box-shadow 0.4s',
						boxShadow: check
							? '-8px -4px 8px 0px rgb(200, 200, 200), 8px 4px 12px 0px rgb(220, 220, 220)'
							: '-8px -4px 8px 0px rgb(25, 25, 25), 8px 4px 12px 0px rgb(25, 25, 25)'
					}}
				></div>
			</div>
		</label>
	);
};

export default ToggleSwitch;

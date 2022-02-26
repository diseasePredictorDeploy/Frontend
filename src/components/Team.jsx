import React from "react";

function Team(props) {
	return (
		<div className=" my-10 flex flex-col px-32">
			<div className="flex flex-row pb-10">
				<p className="my-auto mr-16">{props.name}</p>
				<img
					className="w-40 h-40 object-cover rounded-full"
					src={props.imgURL}
					alt={props.key}
				/>
			</div>
			<div className="w-96">{props.about}</div>
		</div>
	);
}

export default Team;

/** @format */

import React from "react";

type headerProps = {
	name: string;
};

function Header(props:headerProps) {
	
	return (
		<div>
			<h2>Welcome {props.name} To Personel Friend List</h2>
		</div>
	);
}

export default Header;

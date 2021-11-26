/** @format */

import React from "react";
import FriendList from "./FriendList";

function Friend() {
	const myFriends = [
		{
			id: 1,
			fName: "Kevin",
			lName: "Garnet",
			single: true,
		},
		{
			id: 2,
			fName: "Shema",
			lName: "Elvis",
			single: false,
		},
		{
			id: 3,
			fName: "King",
			lName: "David",
			single: true,
		},
		{
			id: 4,
			fName: "Master",
			lName: "Chief 117",
			single: false,
		},
		{
			id: 5,
			fName: "Captain",
			lName: "Price",
			single: true,
		},
	];
	return (
		<div>
			<h4>The List of your friends</h4>
			<FriendList myFriend={myFriends} />
		</div>
	);
}

export default Friend;

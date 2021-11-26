/** @format */

import React from "react";

type myFriends = {
	myFriend: {
		id: number;
		fName: string;
		lName: string;
		single: boolean;
	}[];
};
function FriendList(props: myFriends) {
	return (
		<div>
			<h4>Lucifer Morning Star</h4>
			{props.myFriend.map((friend) => {
				return (
					<h4>
						{friend.fName} {friend.lName} {friend.single ? "👩‍❤️‍👨" : "👨🏻‍💻"}
					</h4>
				);
			})}
		</div>
	);
}

export default FriendList;

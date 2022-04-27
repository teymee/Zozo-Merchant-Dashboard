import React from "react";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import UserColumn from "./table-columns/UserColumn";

const TableCustomerItems = ({ users, type }) => {
	const userList = users.map((user, index) => {
        
		return <UserColumn user={user} key={index}  num={index}/>;
	});
	return (
		<div className="table-responsive">
			<table className="table ps-table">
				<thead>
					<tr>
						<th>ID</th>
						<th >Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Pending </th>
                        <th>Ongoing</th>
                        <th>Completed</th>
						<th>Status</th>
						<th>Downgrade</th>
					</tr>
				</thead>
				<tbody>{userList}</tbody>
			</table>
		</div>
	);
};

export default TableCustomerItems;

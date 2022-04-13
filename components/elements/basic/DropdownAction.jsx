import React from "react";
import { Dropdown, Menu } from "antd";
import { useDispatch } from "react-redux";
import { deleteActionCategory } from "~/store/category/action";

const DropdownAction = ({ type, id }) => {
	const dispatch = useDispatch();
   
	const deleteCategory = () => {
		switch (type) {
			case "category":
				dispatch(deleteActionCategory(id));
                console.log(type)
				break;
		}
	};

	const menuView = (
		<Menu>
			<Menu.Item key={0}>
				<a className="dropdown-item" href="#">
					<i className="icon-pencil mr-2"></i>
					Edit
				</a>
			</Menu.Item>
			<Menu.Item key={0} onClick={deleteCategory}>
				<a className="dropdown-item" href="#">
					<i className="icon-trash2 mr-2"></i>
					Delete
				</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<Dropdown overlay={menuView} className="ps-dropdown">
			<a onClick={(e) => e.preventDefault()} className="ps-dropdown__toggle">
				<i className="icon-ellipsis"></i>
			</a>
		</Dropdown>
	);
};

export default DropdownAction;

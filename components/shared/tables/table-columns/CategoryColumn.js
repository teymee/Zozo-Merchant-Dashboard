import React from "react";
import { useDispatch } from "react-redux";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import { deleteActionCategory } from "~/store/category/action";

const CategoryColumn = ({ category, num }) => {
    const dispatch = useDispatch()
	const deleteCategory = () => {
        console.log(category.id)

		dispatch(deleteActionCategory(category.id));
	};
	return (
		<tr>
			<td>{num+1}</td>
			<td>
				<strong>{category.name}</strong>
			</td>
			<td>{category.description}</td>
			<td>{category.createdAt}</td>
			{/* <td onClick={deleteCategory}>delete</td> */}
			<td>
				<DropdownAction type="category" id={category.id} key={num+1} />
			</td>
		</tr>
	);


};

export default CategoryColumn;

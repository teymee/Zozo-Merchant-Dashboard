import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategory } from "~/store/category/action";
import CategoryColumn from "./table-columns/CategoryColum";

const TableCategoryItems = () => {
	const dispatch = useDispatch();
    const {category, cateGetLoading } = useSelector(state=>state.category)

  
	useEffect(() => {
		dispatch(fetchCategory());
      
	}, [category]);

    let categories
    if(!cateGetLoading){
        categories = category.map((cate, index)=>{
            
            return <CategoryColumn category={cate} num={index} key={cate.id}/>
        })
    }
  

	return (
		<div className="table-responsive">
			<table className="table ps-table">
				<thead>
					<tr>
                    <th>No</th>
						<th>Category name</th>
						<th>Description</th>
						<th>Created at</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
                    {!cateGetLoading && categories}
					{/* <tr>
                        <td>
                            <strong>Babies &amp; Moms</strong>
                        </td>
                        <td>babies-and-moms</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Clothing &amp; Apparel</strong>
                        </td>
                        <td>clothing-and-apparel</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Electronic</strong>
                        </td>
                        <td>clothing-and-apparel</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Home Garden &amp; Kitchen</strong>
                        </td>
                        <td>Home-garden-and-kitchen</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Computer &amp; Technologies</strong>
                        </td>
                        <td>computer-and-technologies</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default TableCategoryItems;

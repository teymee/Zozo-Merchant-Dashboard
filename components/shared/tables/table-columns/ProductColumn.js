import React from "react";
import { useDispatch } from "react-redux";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import styles from "../TableExtraStyles/extraStyles.module.css";
import { deleteActionCategory } from "~/store/product/action";
import Link from "next/link";

function ProductColumn({ product, num }) {
	const dispatch = useDispatch();
	// const deleteProduct = () => {
	//   console.log(product.id)

	// 	dispatch(deleteActionCategory(product.id));
	// };
	let badgeView;
	if (product.auction === null) {
		badgeView = <span className="ps-badge gray">No Event</span>;
	} else if (product.auction.status === "pending") {
		badgeView = <span className="ps-badge success">Ongoing</span>;
	}
	return (
		<tr>
			<td>{num + 1}</td>
			<td>
				<strong>{product.name}</strong>
			</td>
			<td>{product.price}</td>
			<td>{product.description}</td>
			<td>{product.createdAt}</td>
			<td>{badgeView}</td>
			<td>
				<Link href={"/bids/create-bid/"+product.id}>
					<button className={styles.createEventButton}>Create Event</button>
				</Link>
			</td>
			<td>
				<DropdownAction type="product" id={product.id} key={num + 1} />
			</td>
		</tr>
	);
}

export default ProductColumn;

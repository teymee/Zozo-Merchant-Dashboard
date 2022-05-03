import React from "react";
import { useDispatch } from "react-redux";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import styles from "../TableExtraStyles/extraStyles.module.css";
// import { deleteActionCategory } from "~/store/userDetails/action";
import Link from "next/link";
import { actionVerifyMechant } from "~/store/merchant/action";
import { actionUpgradeCustomer } from "~/store/customer/action";

function CustomerColumn({ user, num }) {
	const dispatch = useDispatch();
	const userDetails = user.account;

	// if (type === "merchant") {
	// 	const pendingAuction = user.auctions.filter((auction) => {
	// 		return (auction.status = "pending");
	// 	});
	// }

	// const deleteProduct = () => {
	//   console.log(userDetails.id)

	// 	dispatch(deleteActionCategory(userDetails.id));
	// };

	const verifyUser = () => {
		dispatch(actionVerifyMechant(userDetails.id));
	};

	const upgradeToMerchant = () => {
		dispatch(actionUpgradeCustomer(userDetails.id));
	};

	let badgeView, button;
	if (!userDetails.verified) {
		badgeView = <span className="ps-badge gray">Not Verified</span>;
		button = (
			<td>
				<button
					className={styles.createEventButton}
					style={{ width: "150px" }}
					onClick={verifyUser}
				>
					Verify
				</button>
			</td>
		);
	} else {
		badgeView = <span className="ps-badge success">Verified</span>;
		button = (
			<td>
				<button
					className={styles.createEventButton}
					style={{ backgroundColor: "#80BC00", width: "150px" }}
					onClick={upgradeToMerchant}
				>
					Upgrade to Merchant
				</button>
			</td>
		);
	}

	return (
		<tr>
			<td>{num + 1}</td>
			<td>
				<strong>{`${userDetails.first_name} ${userDetails.last_name} `}</strong>
			</td>
			<td>{userDetails.phone_number}</td>
			<td>{userDetails.email}</td>
			{/* <td colSpan={1}>{pendingAuction.length}</td> */}
			<td>0</td>

			<td>{badgeView}</td>
			{button}
			<td>
				<DropdownAction type="customer" id={userDetails.id} key={num + 1} />
			</td>
		</tr>
	);
}

export default CustomerColumn;

import React from "react";
import { useDispatch } from "react-redux";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import { dateFormat } from "~/store/API/Api";
import { actionApproveEvent } from "~/store/bid/action";
import styles from "../TableExtraStyles/extraStyles.module.css";

function BidColumn({bidEvent, num, type}) {
	const dispatch = useDispatch();
	console.log(bidEvent)

      const approveEvent = ()=>{
            console.log('approve event')
            dispatch(actionApproveEvent(bidEvent.id))
      }



	return (
		<tr>
			<td>{num + 1}</td>
			<td>
				<strong>{bidEvent.product.name}</strong>
			</td>
			<td>{dateFormat(bidEvent.start_time)}</td>
			<td>{bidEvent.access_amount}</td>
			<td>{bidEvent.minimum_amount}</td>
			<td>{dateFormat(bidEvent.createdAt)}</td>
			{/* <td>{badgeView}</td> */}
			<td>
				<button onClick={approveEvent} className={styles.createEventButton}>Approve</button>
			</td>
			<td>
				<button onClick={approveEvent} className={styles.declineEventButton}>Delcine</button>
			</td>
			<td>
				<DropdownAction type="bidEvent" id={bidEvent.id} key={num + 1} />
			</td>
		</tr>
	);
}

export default BidColumn;

import React from "react";
import { useDispatch } from "react-redux";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import { actionApproveEvent } from "~/store/bid/action";
import styles from "../TableExtraStyles/extraStyles.module.css";

function PendingBidColumn({bidEvent, num}) {
	const dispatch = useDispatch();

      const approveEvent = ()=>{
            console.log('approve event')
            dispatch(actionApproveEvent(bidEvent.id))
      }



	return (
		<tr>
			<td>{num + 1}</td>
			<td>
				<strong>{bidEvent.product_id}</strong>
			</td>
			<td>{bidEvent.start_time}</td>
			<td>{bidEvent.access_amount}</td>
			<td>{bidEvent.minimum_amount}</td>
			<td>{bidEvent.createdAt}</td>
			{/* <td>{badgeView}</td> */}
			<td>
				<button onClick={approveEvent} className={styles.createEventButton}>Approve Event</button>
			</td>
			<td>
				<DropdownAction type="bidEvent" id={bidEvent.id} key={num + 1} />
			</td>
		</tr>
	);
}

export default PendingBidColumn;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionAdminFetchPending } from "~/store/bid/action";
import PendingBidColumn from "./table-columns/PendingBidColumn";

function TablePendingBid() {
	const dispatch = useDispatch();
	const { pendingBids, bidGetLoading } = useSelector((state) => state.bid);

	useEffect(() => {
		dispatch(actionAdminFetchPending());
	}, []);

    console.log( pendingBids)

	let bidEvents;
	if (!bidGetLoading) {
		bidEvents = pendingBids.map((bidEvent, index) => {
			return <PendingBidColumn bidEvent={bidEvent} num={index} key={index} />;
		});
	}

	return (
		<div className="table-responsive">
			<table className="table ps-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
                                    <th>Start Time</th>
						<th>Access Amount</th>
						<th>Minimum Amount</th>
						
						<th> Created Date</th>
                                    <th>Approve</th>
						{/* <th>Bid Status</th>
                          <th>Create Event</th>
                          <th></th> */}
					</tr>
				</thead>
				<tbody>{!bidGetLoading && bidEvents}</tbody>
			</table>
		</div>
	);
}

export default TablePendingBid;

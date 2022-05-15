import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { connect, useDispatch } from "react-redux";
import { toggleDrawerMenu } from "~/store/app/action";
import { addProduct, getProductDetails } from "~/store/product/action";
import { useSelector } from "react-redux";
import { fetchCategory } from "~/store/category/action";
import { useRouter } from "next/router";
import protectedRoute from "../HOC/protectedRoute";

const ViewUser = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const id = router.query.product;

	const { singleProduct, getSingleProductLoading } = useSelector(
		(state) => state.product
	);

	let details, content, isLoading;

	useEffect(() => {
		dispatch(getProductDetails(id));
		dispatch(toggleDrawerMenu(false));
		dispatch(fetchCategory());
	}, [id]);

	if (!getSingleProductLoading) {
		console.log(singleProduct.name);
		content = (
			<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
				<figure className="ps-block--form-box">
					<figcaption style={{ color: "white" }}>General</figcaption>
					<div className="ps-block__content">
						<div className="form-group">
							<label>
								Product Name<sup>*</sup>
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Enter product name..."
								name="product"
								defaultValue={singleProduct.name}
								// defaultValue={singleProduct.name}
							/>
						</div>

						<div className="form-group">
							<label>
								Product Description<sup>*</sup>
							</label>
							<textarea
								className="form-control"
								rows="6"
								name="description"
								defaultValue={singleProduct.description}
							></textarea>
						</div>

						{/* <div className="form-group">
							<label>
								Category<sup>*</sup>
							</label>
							<select
								className="form-control"
								name="category"
								multiple
								onChange={categoryArray}
							>
								{!cateGetLoading && categories}
							</select>
						</div> */}

						<div className="form-group">
							<label>
								Auction Status<sup>*</sup>
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Height"
								name="height"
								defaultValue={singleProduct.auction.status}
							/>
						</div>
						<div className="form-group">
							<label>
								Price<sup>*</sup>
							</label>
							<input
								className="form-control"
								type="number"
								placeholder="Price of Product"
								name="price"
								defaultValue={singleProduct.price}
							/>
						</div>

						<div>
							<label>
								Width<sup>*</sup>
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Width"
								name="width"
								defaultValue={singleProduct.features.width}
							/>
						</div>

						<div className="form-group">
							<label>
								Height<sup>*</sup>
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Height"
								name="height"
								defaultValue={singleProduct.features.height}
							/>
						</div>

						<div className="form-group">
							<label>
								Color<sup>*</sup>
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Color"
								name="color"
								defaultValue={singleProduct.features.color}
							/>
						</div>

						<div className="form-group">
							<label>
								Weight<sup>*</sup>
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Weight"
								name="weight"
								defaultValue={singleProduct.features.weigth}
							/>
						</div>
					</div>
				</figure>
			</div>
		);
	}
	// if (!singleCustomerGetLoading || !singleMerchantGetLoading) {
	// 	if (type === "customer") {
	// 		details = customerDetails.account;
	// 	} else if (type === "merchant") {
	// 		details = merchantDetails.account;
	// 	}
	// 	content = (
	// 		<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
	// 			<figure className="ps-block--form-box">
	// 				<figcaption style={{ color: "white" }}>User's Information</figcaption>
	// 				<div className="ps-block__content">
	// 					<div className="form-group">
	// 						<label>Name</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 							}}
	// 						>
	// 							{`${details.first_name} ${details.last_name}`}
	// 						</p>
	// 					</div>

	// 					<div className="form-group">
	// 						<label>Email</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 							}}
	// 						>
	// 							{details.email}
	// 						</p>
	// 					</div>

	// 					<div className="form-group">
	// 						<label>Phone Number</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 								display: "flex",
	// 								justifyContent: "space-between",
	// 							}}
	// 						>
	// 							{details.phone_number}
	// 							<span style={{ color: "green !important" }}> GO</span>
	// 						</p>
	// 					</div>

	// 					<div className="form-group">
	// 						<label>Role</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 							}}
	// 						>
	// 							{details.account_type}
	// 						</p>
	// 					</div>
	// 					<div className="form-group">
	// 						<label>Verifed</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 							}}
	// 						>
	// 							{details.verified ? "Yes" : "No"}
	// 						</p>
	// 					</div>

	// 					<div className="form-group">
	// 						<label>Pending Auctions</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 							}}
	// 						>
	// 							No
	// 						</p>
	// 					</div>

	// 					<div className="form-group">
	// 						<label>Ongoing Auctions</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 							}}
	// 						>
	// 							No
	// 						</p>
	// 					</div>

	// 					<div className="form-group">
	// 						<label>Completed Auctions</label>
	// 						<p
	// 							style={{
	// 								border: "none",
	// 								borderBottom: "1px solid #DDDDDD",
	// 								padding: "5px 20px",
	// 							}}
	// 						>
	// 							No
	// 						</p>
	// 					</div>

	// 					{/* <div className="form-group">
	// 										<label>
	// 											Product Description<sup>*</sup>
	// 										</label>
	// 										<textarea
	// 											className="form-control"
	// 											rows="6"
	// 											name="description"
	// 										></textarea>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Category<sup>*</sup>
	// 										</label>
	// 										<select
	// 											className="form-control"
	// 											name="category"
	// 											multiple
	// 											onChange={categoryArray}
	// 										>
	// 											{!cateGetLoading && categories}
	// 										</select>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Price<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="number"
	// 											placeholder="Price of Product"
	// 											name="price"
	// 										/>
	// 									</div>

	// 									<div>
	// 										<label>
	// 											Width<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder="Width"
	// 											name="width"
	// 										/>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Height<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder="Height"
	// 											name="height"
	// 										/>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Color<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder="Color"
	// 											name="color"
	// 										/>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Weight<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder="Weight"
	// 											name="weight"
	// 										/>
	// 									</div> */}

	// 					{/* <div className="form-group">
	// 										<label>
	// 											Reference<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder="Enter product Reference..."
	// 										/>
	// 									</div> */}

	// 					{/* <div className="form-group">
	// 										<label>
	// 											Product Summary<sup>*</sup>
	// 										</label>
	// 										<textarea
	// 											className="form-control"
	// 											rows="6"
	// 											placeholder="Enter product description..."
	// 										></textarea>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Sale Price<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder=""
	// 										/>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Sale Quantity<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder=""
	// 										/>
	// 									</div>

	// 									<div className="form-group">
	// 										<label>
	// 											Sold Items<sup>*</sup>
	// 										</label>
	// 										<input
	// 											className="form-control"
	// 											type="text"
	// 											placeholder=""
	// 										/>
	// 									</div> */}
	// 				</div>
	// 			</figure>
	// 		</div>
	// 	);
	// }

	return (
		<ContainerDefault title="Create new product">
			<HeaderDashboard
				title="Create Product"
				description="Martfury Create New Product "
			/>
			<section className="ps-new-item">
				<form className="ps-form ps-form--new-product">
					<div className="ps-form__content">
						<div className="row">{content}</div>
					</div>
					<div className="ps-form__bottom">
						<a className="ps-btn ps-btn--black" href="products.html">
							Back
						</a>
						{/* <button className="ps-btn ps-btn--gray">Cancel</button> */}
						<button className="ps-btn">Submit</button>
					</div>
				</form>
			</section>
		</ContainerDefault>
	);
};
export default protectedRoute(connect((state) => state.app)(ViewUser));

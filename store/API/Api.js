import axios from "axios";

const ISSERVER = typeof window === "undefined";
let token;
if (!ISSERVER) {
	// Access localStorage
	token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
}

export const API = {
	MERCHANT_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
	BASE_URL: "http://smart-park.xyz/api/v1",
	MERCHANT_MERCHANT_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
	TOKEN: token,

};


export const whoami = async () => {
	const url = API.BASE_URL+"/whoami";
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	const data = await axios.get(url, config).then((res) => {
		return res.data;
	});

	return data;
};


export const dateFormat = (timeFormat) => {
	const event = new Date(timeFormat);
	const time = event.toString();

	const totalStringLength = time.length;
	const stringToSlice = time.indexOf("G");
	const finalDate = time.slice(0, stringToSlice);
	console.log(totalStringLength);
	console.log(time);
	console.log(stringToSlice);
	console.log(timeFormat.toLocaleString());

	return finalDate;
};

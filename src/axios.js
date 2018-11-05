import axios from "axios";

export const wp = axios.create({
	baseURL: "http://api.mw.test/wp-json/"
});

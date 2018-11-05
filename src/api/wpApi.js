const API_URL = "http://api.mw.test/wp-json/";

const MENUS_URL = API_URL + "menus/v1/menus/";

export async function getAppMenu(slug = "header-menu") {
	const response = await fetch(MENUS_URL + slug);
	return await response.json();
}

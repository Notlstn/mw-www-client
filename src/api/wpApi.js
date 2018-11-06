const API_URL = "http://api.mw.test/wp-json/";

const MENUS_URL = API_URL + "menus/v1/menus/";
const CATEGORY_BY_SLUG_URL = API_URL + "wp/v2/categories/";

export async function getAppMenu(slug = "header-menu") {
	const response = await fetch(MENUS_URL + slug);
	return await response.json();
}

export async function getCategoryBySlug(slug = "") {
	const response = await fetch(CATEGORY_BY_SLUG_URL + "?slug=" + slug);
	return await response.json();
}

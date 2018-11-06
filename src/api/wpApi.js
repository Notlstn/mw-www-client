const API_URL = "http://api.mw.test/wp-json/";

const MENUS_URL = API_URL + "menus/v1/menus/";
const CATEGORY_URL = API_URL + "wp/v2/categories/";
const POSTS_URL = API_URL + "wp/v2/posts/";
const FRONT_POSTS_URL = API_URL + "mw/v1/news/";

export async function getAppMenu(slug = "header-menu") {
	const response = await fetch(MENUS_URL + slug);
	return await response.json();
}

export async function getCategoryBySlug(slug = "") {
	const response = await fetch(CATEGORY_URL + "?slug=" + slug);
	return await response.json();
}

export async function getPostsByCategoryId(id = 0) {
	if (id === 0) return [];
	const response = await fetch(POSTS_URL + "?categories=" + id);
	return await response.json();
}

export async function getFrontNewsCategoryId(id = 0) {
	if (id === 0) return [];
	const response = await fetch(FRONT_POSTS_URL + id);
	return await response.json();
}

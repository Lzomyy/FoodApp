const BASE_URL = "https://upskilling-egypt.com:3006/api/v1";
export const BASE_URL_Image = "https://upskilling-egypt.com:3006";

export const API_URLs = {

login: `${BASE_URL}/Users/Login`,
register: `${BASE_URL}/Users/Register`,
forgetPassword: `${BASE_URL}/Users/Reset/Request`,
resetPassword: `${BASE_URL}/Users/Reset`,

get_categories: `${BASE_URL}/Category/`,
delete_categories: (id) =>{ return `${BASE_URL}/Category/${id}`},

get_Recipes: `${BASE_URL}/Recipe/`,
delete_recipe: (id) =>{ return `${BASE_URL}/Recipe/${id}`},

get_users: `${BASE_URL}/Users/`,
delete_user: (id) =>{ return `${BASE_URL}/Users/${id}`},
};


export const authorization = {
headers: {
    Authorization: `Bearer ${localStorage.getItem('tkn')}`
}
}
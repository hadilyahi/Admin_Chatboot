import { GET_CATEGORIES_URL , CREATE_CATEGORY_URL, DELETE_ALL_CATEGORIES_URL } from "../const";


export const getCategories = async () => {
    try {
        const response = await fetch(GET_CATEGORIES_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const createCategory = async (data) => {
    const response = await fetch(CREATE_CATEGORY_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
}

export const deleteCategories = async (data) => {
    await fetch(DELETE_ALL_CATEGORIES_URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}
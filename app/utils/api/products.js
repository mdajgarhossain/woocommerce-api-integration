// utils/api/products.js

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WOOCOMMERCE_REST_API_BASE_URL,
    consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
    consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
    version: "wc/v3",
});

export async function getProducts(page = 1, searchQuery = '') {
    try {
        const response = await api.get("products", {
            per_page: 12,
            page: page,
            search: searchQuery
        });

        const data = response.data;
        const totalProducts = parseInt(response.headers['x-wp-total'], 10);

        return {
            products: data,
            totalProducts: totalProducts
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}

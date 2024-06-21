import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function GET(req) {
    const api = new WooCommerceRestApi({
        url: process.env.NEXT_PUBLIC_WOOCOMMERCE_REST_API_BASE_URL,
        consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
        consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
        version: "wc/v3",
    });

    try {
        const { searchParams } = new URL(req.url);
        const page = searchParams.get('page') || 1;
        const searchQuery = searchParams.get('search') || '';

        const response = await api.get("products", {
            per_page: 12,
            page: page,
            search: searchQuery
        });

        const data = response.data;
        const totalProducts = parseInt(response.headers['x-wp-total'], 10);

        return new Response(JSON.stringify({
            products: data,
            totalProducts: totalProducts
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WOOCOMMERCE_REST_API_BASE_URL,
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
    version: "wc/v3",
});

export async function POST(req) {
    const orderData = await req.json();
    try {
        const response = await api.post("orders", orderData);
        return new Response(JSON.stringify(response.data), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error("Error placing order:", error);
        return new Response(JSON.stringify({ error: "Failed to place order" }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
}
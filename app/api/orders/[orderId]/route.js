import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WOOCOMMERCE_REST_API_BASE_URL,
    consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
    consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
    version: "wc/v3",
});

export async function PUT(req, { params }) {
    const { orderId } = params;
    const updateData = await req.json();

    try {
        const response = await api.put(`orders/${orderId}`, updateData);

        return new Response(JSON.stringify(response.data), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error("Error updating order:", error);
        return new Response(JSON.stringify({ error: "Failed to update order" }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
}

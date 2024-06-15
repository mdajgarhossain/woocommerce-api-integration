import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "http://localhost/ecommerce",
    consumerKey: "ck_6c6d8f618e284c86bed3da3abc1156e5ec64bbf4",
    consumerSecret: "cs_044ddfaa49cf43f898777795617bf3f6b20352da",
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
// pages/api/orders/updateOrder.js

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WOOCOMMERCE_REST_API_BASE_URL,
    consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
    consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
    version: "wc/v3",
});

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { orderId, status } = req.body;

    if (!orderId || !status) {
        return res.status(400).json({ error: 'Missing orderId or status' });
    }

    try {
        const response = await api.put(`orders/${orderId}`, { status });
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ error: "Failed to update order" });
    }
}

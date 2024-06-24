import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";

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

        if (orderData.payment_method === "sslcommerz") {
            // Initiate SSLCommerz payment
            const sslcommerzResponse = await axios.post(
                'https://sandbox.sslcommerz.com/gwprocess/v4/api.php', 
                {
                    store_id: process.env.SSLCOMMERZ_STORE_ID,
                    store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD,
                    total_amount: response.data.total,
                    currency: "BDT",
                    tran_id: response.data.id,
                    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sslcommerz-success`,
                    fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sslcommerz-fail`,
                    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sslcommerz-cancel`,
                    cus_name: orderData.billing.first_name,
                    cus_email: orderData.billing.email,
                    cus_add1: orderData.billing.address_1,
                    cus_phone: orderData.billing.phone,
                    shipping_method: "NO",
                    num_of_item: orderData.line_items.length,
                    product_name: "Cart Items",
                }
            );

            if (sslcommerzResponse.data.status === 'SUCCESS') {
                return new Response(JSON.stringify({ payment_url: sslcommerzResponse.data.GatewayPageURL }), {
                    headers: { 'Content-Type': 'application/json' },
                    status: 200,
                });
            } else {
                throw new Error('Failed to initiate SSLCommerz payment');
            }
        }

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


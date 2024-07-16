// // utils/api/orders.js

// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// import axios from "axios";

// const api = new WooCommerceRestApi({
//     url: process.env.NEXT_PUBLIC_WOOCOMMERCE_REST_API_BASE_URL,
//     consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
//     consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
//     version: "wc/v3",
// });

// export async function createOrder(orderData) {
//     try {
//         const response = await api.post("orders", orderData);

//         if (orderData.payment_method === "sslcommerz") {
//             const sslcommerzResponse = await axios.post(
//                 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php', 
//                 {
//                     store_id: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_ID,
//                     store_passwd: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_PASSWORD,
//                     total_amount: response.data.total,
//                     currency: "BDT",
//                     tran_id: response.data.id,
//                     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sslcommerz-success`,
//                     fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sslcommerz-fail`,
//                     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sslcommerz-cancel`,
//                     cus_name: orderData.billing.first_name,
//                     cus_email: orderData.billing.email,
//                     cus_add1: orderData.billing.address_1,
//                     cus_phone: orderData.billing.phone,
//                     shipping_method: "NO",
//                     num_of_item: orderData.line_items.length,
//                     product_name: "Order " + response.data.id,
//                     product_category: "General",
//                     cus_city: "Dhaka",
//                     cus_country: "BD",
//                     product_profile: 'general'
//                 }
//             );

//             if (sslcommerzResponse.data.status === 'SUCCESS') {
//                 return { payment_url: sslcommerzResponse.data.GatewayPageURL };
//             } else {
//                 throw new Error('Failed to initiate SSLCommerz payment');
//             }
//         }

//         return response.data;
//     } catch (error) {
//         console.error("Error placing order:", error);
//         throw new Error("Failed to place order");
//     }
// }



// import axios from "axios";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// const consumerKey = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY;
// const consumerSecret = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET;

// export const createOrder = async (orderData) => {
//   try {
//     const response = await axios.post(`${baseUrl}/wp-json/wc/v3/orders`, orderData, {
//       auth: {
//         username: consumerKey,
//         password: consumerSecret,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error placing order: ", error);
//     throw error;
//   }
// };


import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_WOOCOMMERCE_REST_API_BASE_URL;

export const placeOrder = async (orderData) => {
  console.log("orderData", orderData);
    try {
        const response = await axios.post(`${baseUrl}/wp-json/custom/v1/place_order`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error placing order: ', error);
        throw error;
    }
};


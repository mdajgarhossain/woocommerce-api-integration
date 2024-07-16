// utils/api/sslcommerz.js

import axios from "axios";

export async function processPayment(requestData) {
    const formData = new FormData();
    for (const key in requestData) {
        if (requestData.hasOwnProperty(key)) {
            formData.append(key, requestData[key]);
        }
    }

    try {
        const response = await axios.post("https://sandbox.sslcommerz.com/gwprocess/v4/api.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error processing payment:", error);
        throw new Error("Payment processing failed.");
    }
}

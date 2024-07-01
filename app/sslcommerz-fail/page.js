// pages/sslcommerz-success.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SSLCommerzSuccess() {
  const router = useRouter();

  useEffect(() => {
    const handleSuccess = async () => {
      const { tran_id } = router.query;

      if (tran_id) {
        // Update order status in WooCommerce
        await axios.post("/api/orders/update", { tran_id, status: "completed" });
        
        // Redirect to order confirmation page
        router.push("/order-confirmation");
      }
    };

    handleSuccess();
  }, [router]);

  return <div>Processing payment...</div>;
}

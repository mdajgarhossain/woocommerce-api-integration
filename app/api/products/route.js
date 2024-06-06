import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function GET(req, res) {
   const api = new WooCommerceRestApi({
      url: "http://localhost/ecommerce",
      consumerKey: "ck_6c6d8f618e284c86bed3da3abc1156e5ec64bbf4",
      consumerSecret: "cs_044ddfaa49cf43f898777795617bf3f6b20352da",
      version: "wc/v3",
   });

   try {
      const { data } = await api.get("products", {
         per_page: 20, // 20 products per page
      });
      return Response.json(data);
   } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ error: "Failed to fetch products" });
   }
}

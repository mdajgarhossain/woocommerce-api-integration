// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// export async function GET(req, res) {
//    const api = new WooCommerceRestApi({
//       url: "http://localhost/ecommerce",
//       consumerKey: "ck_6c6d8f618e284c86bed3da3abc1156e5ec64bbf4",
//       consumerSecret: "cs_044ddfaa49cf43f898777795617bf3f6b20352da",
//       version: "wc/v3",
//    });

//    try {
//       const { data } = await api.get("products", {
//          per_page: 12, // 12 products per page
//       });
//       return Response.json(data);
//    } catch (error) {
//       console.error("Error fetching products:", error);
//       return res.status(500).json({ error: "Failed to fetch products" });
//    }
// }


// api/products/route.js
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// export async function GET(req, res) {
//    const api = new WooCommerceRestApi({
//       url: "http://localhost/ecommerce",
//       consumerKey: "ck_6c6d8f618e284c86bed3da3abc1156e5ec64bbf4",
//       consumerSecret: "cs_044ddfaa49cf43f898777795617bf3f6b20352da",
//       version: "wc/v3",
//    });

//    const url = new URL(req.url);
//    const page = url.searchParams.get("page") || 1;

//    try {
//       const { data } = await api.get("products", {
//          per_page: 12, // 12 products per page
//          page: page,
//       });
//       return Response.json(data);
//    } catch (error) {
//       console.error("Error fetching products:", error);
//       return res.status(500).json({ error: "Failed to fetch products" });
//    }
// }


import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function GET(req) {
   const api = new WooCommerceRestApi({
      url: "http://localhost/ecommerce",
      consumerKey: "ck_6c6d8f618e284c86bed3da3abc1156e5ec64bbf4",
      consumerSecret: "cs_044ddfaa49cf43f898777795617bf3f6b20352da",
      version: "wc/v3",
   });

   try {
      const { searchParams } = new URL(req.url);
      const page = searchParams.get('page') || 1;

      const response = await api.get("products", {
         per_page: 12,
         page: page
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



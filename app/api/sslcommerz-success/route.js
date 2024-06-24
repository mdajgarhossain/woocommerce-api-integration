// /pages/api/sslcommerz-success.js
export async function GET(req, res) {
  // Handle the success callback
  res.redirect('/order-confirmation');
}

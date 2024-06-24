// /pages/api/sslcommerz-cancel.js
export async function GET(req, res) {
  // Handle the cancel callback
  res.redirect('/order-canceled');
}
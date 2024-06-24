// /pages/api/sslcommerz-fail.js
export async function GET(req, res) {
  // Handle the fail callback
  res.redirect('/order-failed');
}
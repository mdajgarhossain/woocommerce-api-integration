// import axios from "axios";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const response = await axios.post("https://sandbox.sslcommerz.com/gwprocess/v4/api.php", req.body, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       res.status(200).json(response.data);
//     } catch (error) {
//       console.error("Error processing payment:", error);
//       res.status(500).json({ error: "Payment processing failed." });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// import axios from "axios";

// export async function POST(req) {
//     const requestData = await req.json();
//     console.log(req)
//     console.log(requestData)
//     try {
//         const response = await axios.post("https://sandbox.sslcommerz.com/gwprocess/v4/api.php", requestData, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         return new Response(JSON.stringify(response.data), {
//             headers: { 'Content-Type': 'application/json' },
//             status: 200,
//         });
//     } catch (error) {
//         console.error("Error processing payment:", error);
//         return new Response(JSON.stringify({ error: "Payment processing failed." }), {
//             headers: { 'Content-Type': 'application/json' },
//             status: 500,
//         });
//     }
// }

// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         return POST(req);
//     } else {
//         res.setHeader("Allow", ["POST"]);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }


import axios from "axios";

export async function POST(req) {
    const requestData = await req.json();
    console.log(req)
    console.log(requestData)
    
    // Convert requestData to FormData
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

        return new Response(JSON.stringify(response.data), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error("Error processing payment:", error);
        return new Response(JSON.stringify({ error: "Payment processing failed." }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        return POST(req);
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount, currency = "INR", receipt = "donation_rcpt" } = body;

    if (!amount) {
      return new Response(JSON.stringify({ error: "Amount is required" }), {
        status: 400,
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // convert to paise
      currency,
      receipt: `${receipt}_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.log("Razorpay Order Error:", error);
    return new Response("Error creating Razorpay order", { status: 500 });
  }
}

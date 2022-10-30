import { i as invalid } from "../../../chunks/index2.js";
import "dotenv/config";
import Stripe from "stripe";
const stripe = Stripe(process.env.VITE_STRIPE_SECRET);
const load = () => {
  return { msg: "from the server" };
};
const actions = {
  donate: async ({ request }) => {
    const formData = await request.formData();
    const amount = formData.get("amount") * 100;
    if (amount < 5) {
      return invalid(400, {
        error: true,
        message: "Amount must be greater than $5"
      });
    }
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `http://127.0.0.1:5173/`,
      cancel_url: `http://127.0.0.1:5173/`,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: "Iphone",
              description: "modern, best iphone",
              images: []
            }
          },
          quantity: 1
        }
      ],
      metadata: {
        items: JSON.stringify([
          {
            sku: "",
            name: ""
          }
        ])
      }
    });
    return {
      success: true,
      url: session.url
    };
  }
};
export {
  actions,
  load
};

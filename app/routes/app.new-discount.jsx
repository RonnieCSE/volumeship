import { json } from "@remix-run/react";
import { NewDiscount } from "../components/newDiscount";
import {DiscountForm} from "../components/discounts/discountForm"
import { authenticate } from "../config/shopify";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  return json({});
};

export const action = async ({ request }) => {
  const {admin} = await authenticate.admin(request)

  const formData =  Object.fromEntries(await request.formData());
  console.log(">>>> Action Request data", formData)
  console.log("Action end <<<<<<<<<>>>>>>>>>")
  return json({});
};

export default function NewDiscountPage() {
  return <NewDiscount />;
  return <DiscountForm />;
}

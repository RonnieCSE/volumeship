
import {json} from "@remix-run/node";
import {authenticateExtra} from "../config/shopify.js";
import {VolumeShipModel} from "../models/volumeship.model.js"
import {useLoaderData} from "@remix-run/react";
import { DiscountForm } from "../components/discounts/discountForm.jsx";


export const loader = async ({params, request}) => {
  const {admin, metaobject} = await authenticateExtra(request)
  const discountId = `gid://shopify/Metaobject/${params.id}`;

  try {
    const discountData = await metaobject.find(VolumeShipModel, discountId);

    const parsedData = {
      ...discountData,
      products: discountData.products,
      discountValues: discountData.discountValues,
      combinesWith: discountData.combinesWith,
      isActive: discountData.isActive,
    };

    return json(parsedData);
  } catch (error) {
    console.error("Error loading discount data:", error);
    return json({ error: "Failed to load discount data" }, { status: 500 });
  }

}

export async function action({request}) {
  const { admin, metaobject } = await authenticateExtra(request);
  let formData = await request.json();

  console.log('>>>> formData >>>>')
  console.log(formData)
}
export default function discountEditPage() {
  const loaderData = useLoaderData();
  if (loaderData.error) {
    return <div>Error: {loaderData.error}</div>;
  }
  return <DiscountForm  isEditing={true} />;
}

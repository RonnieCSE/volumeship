
import {json} from "@remix-run/node";
import {authenticateExtra} from "../config/shopify.js";
import {VolumeShipModel} from "../models/volumeship.model";
import {useLoaderData} from "@remix-run/react";
import { DiscountForm } from "../components/discounts/discountForm.jsx";


export const loader = async ({params, request}) => {

  const {admin, metaobject} = await authenticateExtra(request)

  const discountId = `gid://shopify/Metaobject/${params.id}`;
    console.log(discountId)

  return json({})
  try {
    // const discountData = await metaobject.find(VolumeDiscountModel, discountId);

    // const parsedData = {
    //   ...discountData,
    //   products: JSON.parse(discountData.products),
    //   discountValues: JSON.parse(discountData.discountValues),
    //   combinesWith: JSON.parse(discountData.combinesWith),
    //   isActive: discountData.isActive === 'true',
    // };
    // return json(parsedData);
  } catch (error) {
    console.error("Error loading discount data:", error);
    return json({ error: "Failed to load discount data" }, { status: 500 });
  }

}

export async function action({request}) {

}
export default function discountEditPage() {
  const loaderData = useLoaderData();
  if (loaderData.error) {
    return <div>Error: {loaderData.error}</div>;
  }

  return <DiscountForm  isEditing={true} />;
}

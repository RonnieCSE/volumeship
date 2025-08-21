
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
    // console.log('parsedData >>>> ')
    // console.log(parsedData)
    return json(parsedData);
  } catch (error) {
    console.error("Error loading discount data:", error);
    return json({ error: "Failed to load discount data" }, { status: 500 });
  }

}

export async function action({request}) {
  const { admin, metaobject } = await authenticateExtra(request);
  let formData = await request.json();

  console.log('>>>> formData Discount ID >>>>')
  console.log(formData)
  if (formData.updateDiscount) {
    const updatedDiscount = await updateDiscount(formData, metaobject);
  }
  return json({});
}
export default function discountEditPage() {
  const loaderData = useLoaderData();
  if (loaderData.error) {
    return <div>Error: {loaderData.error}</div>;
  }
  return <DiscountForm  isEditing={true} />;
}


// Helper function
async function updateDiscount(formData, metaobject) {

  const newData = {
    title: formData.title,
    // discountId: formData.id,
    products_reference: JSON.stringify(formData.products.flatMap(g => (g.variants.map(v => v.id)))),
    products: JSON.stringify(formData.products),
    discountValues: JSON.stringify(formData.discountValues),
    isActive: formData.isActive ? 'true' : 'false',
    combinesWith: JSON.stringify(formData.combinesWith),
    createdAt: formData.createdAt || ''
  };

  if (formData.id) {
    await metaobject.update(VolumeShipModel, formData.id, newData);
  }

}

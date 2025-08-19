import {json} from "@remix-run/node";
import {authenticateExtra} from "../config/shopify.js";
import {VolumeShipModel} from "../models/volumeship.model.js"
import Discounts from "../components/discounts/index.jsx";

export const loader = async ({request}) => {

  const {metaobject} = await authenticateExtra(request);

  const url = new URL(request.url);
  const cursor = url.searchParams.get('cursor');
  const limit = 10;
  const volumeDiscounts = await metaobject.list(VolumeShipModel, limit, cursor)
  return json({volumeDiscounts})
};

export async function action({request}) {
  const {metaobject} = await authenticateExtra(request)
  let formData = await request.json();

  if (formData.deleteObject) {
    await metaobject.delete(formData.objectId)
    return json({
      status: {
        success: true,
        message: "Discount Deleted Successfully"
      }
    })
  }

}

export default function SettingsPage() {
  return <Discounts/>;
}

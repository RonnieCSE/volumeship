import {
    Card,
  TextField,
  BlockStack,
  FormLayout,
  Button,

  Text,
  Layout,
  InlineStack,
  Select,
  Checkbox,
  Badge,
  AppProvider as PolarisAppProvider,
} from "@shopify/polaris";
import { useCallback, useState, useEffect } from "react";
import { AppProvider as DiscountsProvider } from "@shopify/discount-app-components";
import PageLayout from "../shared/pageLayout";
import ProductSelectionCard from "../shared/ProductSelectionCard";
import ColorPickerInput from "../shared/ColorPickerInput";
import { DeleteIcon, PlusIcon } from "@shopify/polaris-icons";

import {
  DiscountClass,
  DiscountMethod,
  SummaryCard,
  CombinationCard,
} from "@shopify/discount-app-components";

import { PageTitleBar } from "../shared/pageTitleBar";
import enPolarisTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import "@shopify/discount-app-components/build/esm/styles.css";
import PreviewMarkup from "../discounts/previewMarkup";
import { Form, useSubmit, useLoaderData } from "@remix-run/react";


export const NewDiscount = ({ isEditing = false }) => {
  const submit = useSubmit();
  const loaderData = useLoaderData();

  const [title, setTitle] = useState("");
  const [products, setProducts] = useState([]);
  const [combinesWith, setCombinesWith] = useState({
    orderDiscounts: false,
    productDiscounts: false,
    shippingDiscounts: false,
  });
  const [status, setStatus] = useState("draft");
 

  // useEffect(() => {
  //   if (isEditing && loaderData) {
  //     setTitle(loaderData.title || "");
  //     setProducts(loaderData.products || []);
  //     setCombinesWith(loaderData.combinesWith || []);
  //     setDiscountValues(loaderData.discountValues || []);
  //     setStatus(loaderData.isActive ? "active" : "draft");
  //   }
  // }, [isEditing, loaderData]);



  return (

    <PolarisAppProvider i18n={enPolarisTranslations}>
         <DiscountsProvider locale="en-US" ianaTimezone="America/Los_Angeles">
           <PageLayout
             showBackButton
             title={isEditing ? "Edit discount" : "New discount"}
             titleMetadata={
               status === "draft" ? (
                 <Badge tone="info"> Draft </Badge>
               ) : (
                 <Badge tone="success"> Active </Badge>
               )
             }
           >
<Form
            method="POST"
            data-save-bar
            data-discard-confirmation
            onReset={() => {}}
          >
            <Layout>
              <Layout.Section>
                <BlockStack gap="500">
                  <Card sectioned>
                    <FormLayout>
                      <Text variant="headingSm">Basic settings</Text>
                      <TextField
                        name="title"
                        label="Title"
                        value={title}
                        onChange={setTitle}
                        helpText="For your own internal reference. Only you can see it."
                      />
                    </FormLayout>
                  </Card>

                   <Card>
                    <BlockStack gap="300">
                      <InlineStack align="space-between">
                        <Text variant="headingSm">
                          Volume Discount Settings
                        </Text>
                      </InlineStack>
                      <BlockStack gap="400">
                          
                      </BlockStack>
                    </BlockStack>
                    <br />

                    <InlineStack align="end">
                      <Button
                        icon={PlusIcon}
                        variant="secondary"
                        accessibilityLabel="Add more tier"
                      >
                        Add more tier
                      </Button>
                    </InlineStack>
                  </Card> 

                  <div>
                    {/* <CombinationCard
                      combinableDiscountTypes={{
                        value: combinesWith,
                        onChange: setCombinesWith,
                      }}
                      discountClass={DiscountClass.Product}
                      discountDescriptor={title}
                    /> */}

                    {/* <ProductSelectionCard
                      title="Product"
                      products={products}
                      setProducts={setProducts}
                      multiple={true}
                    /> */}
                  </div>

                </BlockStack>
              </Layout.Section>

              {/* Sidebar */}
              <Layout.Section variant="oneThird">
                <BlockStack gap="500">
                   <Card>
                    <Select
                      label="Status"
                      options={[
                        { label: "Draft", value: "draft" },
                        { label: "Active", value: "active" },
                      ]}
                      value={status}
                      onChange={setStatus}
                    />
                  </Card> 

                  {/*
                  <SummaryCard
                    header={{
                      discountMethod: DiscountMethod.Automatic,
                      appDiscountType: "Volume discounts",
                      discountDescriptor: title,
                      isEditing: isEditing,
                      discountStatus: null,
                    }}
                    additionalDetails={[
                      `Selected products: ${products.length}`,
                    ]}
                    combinations={{
                      combinesWith,
                    }}
                  />
                  */}

                  {/* <PreviewMarkup discountValues={discountValues} /> */}
                </BlockStack>
              </Layout.Section>
            </Layout>
          </Form>
      
        </PageLayout>
      </DiscountsProvider>
    </PolarisAppProvider>
  );
};
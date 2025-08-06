import {
  Card,
  Tabs,
  TextField,
  BlockStack,
  Collapsible,
  Text,
  InlineGrid,
  Box,
  ResourceList,
  ResourceItem,
  Button,
} from "@shopify/polaris";
import PageLayout from "../shared/pageLayout";
import { PageTitleBar } from "../shared/pageTitleBar";

import { useCallback, useState } from "react";

export const NewDiscount = () => {
  

  return (
    <PageLayout showBackButton title="New Discount">
    
      <PageTitleBar title="New Discount" />
      <h1>Holla</h1>
      
    </PageLayout>
  );
};

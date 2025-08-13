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
  AppProvider as PolarisAppProvider
} from "@shopify/polaris";
import {AppProvider as DiscountsProvider} from '@shopify/discount-app-components';
import enPolarisTranslations from '@shopify/polaris/locales/en.json';
// Import polaris styles
import "@shopify/polaris/build/esm/styles.css";

// Import this discount-app-components styles
import "@shopify/discount-app-components/build/esm/styles.css";


import PageLayout from "../shared/pageLayout";
import { PageTitleBar } from "../shared/pageTitleBar";

import { useCallback, useState } from "react";

export const NewDiscount = () => {
  

  return (
        <PolarisAppProvider i18n={enPolarisTranslations}>
        {/* discount-app-component specific AppProvider */}
        <DiscountsProvider locale="en-US" ianaTimezone="America/Los_Angeles">
          
          <PageLayout showBackButton title="New Discount">
          
            <PageTitleBar title="New Discount" />
            <h1>Holla</h1>
            
          </PageLayout>
        </DiscountsProvider>
      </PolarisAppProvider>

      

    
  );
};

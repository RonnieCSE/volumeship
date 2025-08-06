import { Button, Card, EmptyState, Layout } from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { PageTitleBar } from "../shared/pageTitleBar";
import { SideTabs } from "./sideTabs";
import { GeneralSettings } from "./generalSettings";
import { FeaturesSettings } from "./featuresSettings";
import { NotificationsSettings } from "./notificationsSettings";
import { ChangeLogs } from "./changeLogs";
import PageLayout from "../shared/pageLayout";

export default function Settings() {
  const { settingsData } = useLoaderData();
  return (
    <PageLayout showBackButton title="Discounts page" primaryAction={ <Button variant="primary" url='/app/new-discount'>New Discount</Button>}>

           <Card>
                <EmptyState
                  heading="Manage your discounts"
                  action={{content: 'Add Discount', url: '/app/new-discount'}}
                  secondaryAction={{
                    content: 'Learn more',
                    url: 'https://help.shopify.com',
                  }}
            image="https://cdn.shopify.com/b/shopify-guidance-dashboard-public/m66z0a57ues1gygrane8proz6gqn.svgz"

                >
                  <p>Create discounts for your products and collections.</p>
                </EmptyState>
            </Card>
    </PageLayout>
  );
}

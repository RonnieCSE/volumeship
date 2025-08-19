import {Button, Card, EmptyState, Layout} from "@shopify/polaris";
import {useLoaderData} from "@remix-run/react";
import PageLayout from "../shared/pageLayout";
import ReadyTable from '../shared/readyTable.jsx';

export default function Discounts() {
  const {volumeDiscounts} = useLoaderData();

  const headings = [
    {title: 'title'},
    {title: 'Status'},
    {title: 'Created At'},
    {title: 'Actions'},
  ];


  return (
    <PageLayout showBackButton title="Discounts page"
                primaryAction={<Button variant="primary" url='/app/discounts/new'>New Discount</Button>}>

      {volumeDiscounts.nodes.length < 1 ? (
        <Card>
          <EmptyState
            heading="Manage your discounts"
            action={{content: 'Add Discount', url: '/app/discounts/new'}}
            secondaryAction={{
              content: 'Learn more',
              url: 'https://help.shopify.com',
            }}
            image="https://cdn.shopify.com/b/shopify-guidance-dashboard-public/m66z0a57ues1gygrane8proz6gqn.svgz"

          >
            <p>Create discounts for your products and collections.</p>
          </EmptyState>
        </Card>
      ) : (
        <ReadyTable
          data={volumeDiscounts}
          headings={headings}
          resourceName={{singular: 'Volume Discount', plural: 'Volume Discounts',handle:'discounts'}}
          selectable={false}
          pagination={true}
          actions={true}
        />
      )}
    </PageLayout>
  );
}

import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  let customerId: string | undefined;
  let customer = null;

  try {
    const resolvedSearchParams = await searchParams;
    customerId = resolvedSearchParams.customerId;

    if (customerId) {
      customer = await getCustomer(parseInt(customerId));
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }

  if (customerId && !customer) {
    return (
      <div className="p-4">
        <h2 className="mb-2 text-2xl">Customer ID #{customerId} not found</h2>
        <BackButton title="Go Back" variant="default" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="mb-2 text-2xl">New Customer Form</h2>
      {/* We will build the creation form here later */}
    </div>
  );
}

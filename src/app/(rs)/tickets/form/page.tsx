import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import { getTicket } from "@/lib/queries/getTIcket";
import * as Sentry from "@sentry/nextjs";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  let customerId: string | undefined;
  let ticketId: string | undefined;
  let ticket = null,
    customer = null;

  try {
    const resolvedSearchParams = await searchParams;
    customerId = resolvedSearchParams.customerId;
    ticketId = resolvedSearchParams.ticketId;

    if (customerId) {
      customer = await getCustomer(parseInt(customerId));
    }
    if (ticketId) {
      ticket = await getTicket(parseInt(ticketId));
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }

  if (!customerId && !ticketId) {
    return (
      <div className="p-4">
        <h2 className="mb-2 text-2xl">
          Ticket ID or Customer ID required to load ticket form
        </h2>
        <BackButton title="Go Back" variant="default" />
      </div>
    );
  }

  if (customerId) {
    if (!customer) {
      return (
        <div className="p-4">
          <h2 className="mb-2 text-2xl">Customer ID #{customerId} not found</h2>
          <BackButton title="Go Back" variant="default" />
        </div>
      );
    }

    if (!customer.active) {
      return (
        <div className="p-4">
          <h2 className="mb-2 text-2xl">
            Customer ID #{customerId} is not active
          </h2>
          <BackButton title="Go Back" variant="default" />
        </div>
      );
    }

    return <>FormPage</>;
  }

  if (ticketId) {
    if (!ticket) {
      return (
        <div className="p-4">
          <h2 className="mb-2 text-2xl">Ticket ID #{ticketId} not found</h2>
          <BackButton title="Go Back" variant="default" />
        </div>
      );
    }

    customer = await getCustomer(ticket.customerId);
    if (customer) {
      if (!customer.active) {
        return (
          <div className="p-4">
            <h2 className="mb-2 text-2xl">
              Customer ID #{customerId} is not active
            </h2>
            <BackButton title="Go Back" variant="default" />
          </div>
        );
      }
    }
  }

  return <>Ticket</>;
}

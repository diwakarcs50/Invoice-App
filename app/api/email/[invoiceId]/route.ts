import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";

import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ invoiceId: string }> }
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: "Diwakar Kumar",
    };

    emailClient.send({
      from: sender,
      to: [{ email: "diwakar2506agrawal@gmail.com" }],

      template_uuid: "5e1bc981-946b-42c8-9819-3b47f54484f2",

      template_variables: {
        first_name: invoiceData.clientName,
        company_info_name: "Sri hari",
        company_info_address: "Kadam kuan",
        company_info_city: "Patna",
        company_info_zip_code: "800003",
        company_info_country: "India",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email to client" },
      { status: 500 }
    );
  }
}

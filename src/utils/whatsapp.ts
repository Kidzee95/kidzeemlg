import { z } from "zod";
import { formSchema } from "@/components/EnquiryForm/schema";

export const formatWhatsAppMessage = (values: z.infer<typeof formSchema>) => {
  return encodeURIComponent(
    `*New Student Enquiry*\n\n` +
    `*Parent's Name:* ${values.parentName}\n` +
    `*Child's Name:* ${values.childName}\n` +
    `*Email:* ${values.email}\n` +
    `*Phone:* ${values.phone}\n` +
    `*Child's Age Group:* ${values.childAge}\n` +
    `*Message:* ${values.message || 'No additional message'}`
  );
};

export const getWhatsAppUrl = (values: z.infer<typeof formSchema>) => {
  const phoneNumber = "+917989043138";
  const message = formatWhatsAppMessage(values);
  return `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`;
};
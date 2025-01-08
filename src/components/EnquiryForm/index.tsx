import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { motion } from "framer-motion";
import { FormFields } from "./FormFields";
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormHeader } from "./FormHeader";

const EnquiryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      email: "",
      phone: "",
      childAge: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      // Format the message for WhatsApp
      const message = `New Student Enquiry:\n
Parent's Name: ${values.parentName}\n
Child's Name: ${values.childName}\n
Email: ${values.email}\n
Phone: ${values.phone}\n
Child's Age Group: ${values.childAge}\n
Message: ${values.message || 'No additional message'}`;

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp link with the phone number
      const whatsappUrl = `https://wa.me/917989043138?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      toast.success("Redirecting to WhatsApp to send your enquiry!");
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-accent">
      <div className="container max-w-4xl mx-auto px-4">
        <FormHeader />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormFields form={form} />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                type="submit"
              >
                Submit Enquiry
              </motion.button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default EnquiryForm;
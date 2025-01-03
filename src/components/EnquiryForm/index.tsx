import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { motion } from "framer-motion";
import { FormFields } from "./FormFields";
import { formSchema } from "./schema";
import * as z from "zod";

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
      // Log the form data to console for now
      console.log("Form submitted with values:", values);
      
      // Show success message
      toast.success("Enquiry submitted successfully! We'll get back to you soon.");
      
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Student Enquiry
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you! Fill out the form below and we'll get back
            to you shortly.
          </p>
        </motion.div>

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
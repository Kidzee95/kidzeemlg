import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./schema";

interface FormFieldsProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

export const FormFields = ({ form }: FormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="parentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent's Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter parent's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="childName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Child's Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter child's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="childAge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Child's Age Group</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="2-3">2-3 years</SelectItem>
                  <SelectItem value="3-4">3-4 years</SelectItem>
                  <SelectItem value="4-5">4-5 years</SelectItem>
                  <SelectItem value="5-6">5-6 years</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Message (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Any specific requirements or questions?"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
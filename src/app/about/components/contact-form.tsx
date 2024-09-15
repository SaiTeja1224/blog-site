"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/UI/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
import { Textarea } from "@/components/UI/textarea";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { sendEmail } from "@/actions/email";
import { contactFormSchema, ContactFormValues } from "@/lib/types/schema";

function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    // Server Action call.
    sendEmail(values.email, "Portfolio Contact Form", values.message);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="text-xl" placeholder="E-Mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={6}
                  className="resize-none text-xl"
                  placeholder="Enter your Message over here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              {!form.formState.errors.message && (
                <FormDescription>
                  Should be at least 5 characters
                </FormDescription>
              )}
            </FormItem>
          )}
        />
        <div className="w-full text-center">
          <Button
            variant={"secondary"}
            className="text-xl flex items-center gap-2 ms-auto py-6 border input-border  hover-effect active:scale-95 hover:scale-105"
            type="submit"
          >
            <span className="pb-1">Send Message</span>{" "}
            <PaperPlaneIcon width={20} height={20} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;

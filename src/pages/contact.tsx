import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

import { sendContactForm } from "@/lib/api";
import { SUBJECT_DATA } from "@/config/constants/common";
import Button from "@/components/ui/button";
import PageLayout from "@/components/layout/pageLayout";
import { ContactCard } from "@/components/contactCard";
import { FormField } from "@/components/ui/formField";
import SEO from "@/components/seo";
import { ROUTES } from "@/config/appConfig";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please input your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please input your email"),
  message: Yup.string()
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Please input your message"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  return (
    <>
      <SEO title="Contact" path={ROUTES.CONTACT} />
      <PageLayout
        pretitle="Contact"
        title="Let's build something together."
        description="Hiring for a frontend role or have a project in mind? Send a note and I will reply promptly."
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14">
          {/* Contact information */}
          <div className="space-y-3">
            <ContactCard
              icon={<FiMail />}
              label="Email"
              value={SUBJECT_DATA.contact.email}
              href={`mailto:${SUBJECT_DATA.contact.email}`}
            />
            <ContactCard
              icon={<FiPhone />}
              label="Phone"
              value={`${SUBJECT_DATA.contact.phone}`}
              href={`tel:${SUBJECT_DATA.contact.phone}`}
            />
            <ContactCard
              icon={<FiLinkedin />}
              label="LinkedIn"
              value={SUBJECT_DATA.social.linkedin}
              href={SUBJECT_DATA.social.linkedin}
              external
            />
            <ContactCard
              icon={<FiGithub />}
              label="GitHub"
              value={SUBJECT_DATA.social.github}
              href={SUBJECT_DATA.social.github}
              external
            />
          </div>

          {/* Contact form */}
          <div className="border border-primary/80 bg-gradient-to-br from-primary/5 to-primary/15 p-6 sm:p-8">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  const response = await sendContactForm(values);

                  if (response.status === 200) {
                    toast.success("Message sent successfully!");
                    resetForm();
                  } else {
                    toast.error("Something went wrong. Please try again.");
                  }
                } catch {
                  toast.error("Something went wrong. Please try again.");
                }
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="flex flex-col gap-5">
                  <FormField
                    name="name"
                    label="Name"
                    placeholder="Your name"
                    error={errors.name}
                    touched={touched.name}
                  />
                  <FormField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    error={errors.email}
                    touched={touched.email}
                  />
                  <FormField
                    name="message"
                    label="Message"
                    as="textarea"
                    placeholder="Tell me about the role or project"
                    error={errors.message}
                    touched={touched.message}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="solid-accent"
                    className="w-full"
                    buttonClassName="min-h-12 w-full justify-center font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>

                  <p className="text-sm text-primary-text/70">
                    I usually reply within a day.
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </PageLayout>
      <ToastContainer toastClassName="!bg-elevated !text-primary-text border border-brand/80" />
    </>
  );
}

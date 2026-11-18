import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-toastify";
import { SUBJECT_DATA } from "@/config/constants";
import Button from "./button";
import SectionLayout from "./sectionLayout";
import { SectionProps } from "@/lib/types";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Please input email"),
  name: Yup.string().required("Please input name"),
  message: Yup.string().max(1000).required("Please input message"),
});

const initialValues = {
  email: "",
  name: "",
  message: "",
};

const Contact = (props: SectionProps) => {
  return (
    <SectionLayout title="Contact Me" {...props}>
      <div className="grid w-full grid-cols-1 place-content-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="py-4 text-2xl font-bold">Get In Touch</h2>
          <p className="flex items-center gap-4 py-2 font-semibold">
            Email:
            <Link
              className="cursor-pointer font-medium underline"
              href={`mailto:${SUBJECT_DATA.email_id}`}
            >
              {SUBJECT_DATA.email_id}
            </Link>
          </p>
          <p className="flex items-center gap-4 py-2 font-semibold">
            Phone:
            <Link
              className="cursor-pointer font-medium underline"
              href={`tel:${SUBJECT_DATA.mobile_number}`}
            >
              +91 {SUBJECT_DATA.mobile_number}
            </Link>
          </p>
          <p className="pt-8 text-lg">
            Thank you for your interest in getting in touch with me. Whether you
            have inquiries, project proposals, or simply wish to establish a
            connection, I am eager to lend an ear. Please do not hesitate to
            complete the contact form with your information and message, and I
            will promptly respond to your inquiry. Your feedback holds great
            value to me, and I am excited about the prospect of collaborating
            with you and providing support tailored to your requirements.
          </p>
        </div>
        <div className="">
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
              console.log("hello", values);
              try {
                setSubmitting(true);
                const res = await sendContactForm(values);
                console.log(res, "res");
                setSubmitting(false);
                if (res.status === 200) {
                  toast.success("Email Sent Successfully");
                  resetForm();
                } else {
                  toast.error("Something went wrong!");
                }
              } catch (err) {
                console.log(err, "sdgj");
                toast.error("Something went wrong!");
              }
            }}
          >
            {({ errors, touched, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit} className="flex flex-col gap-8 p-0">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Name:</label>
                  <Field
                    name="name"
                    placeholder="Enter Name"
                    className="h-12 w-full border border-slate-500 bg-transparent px-4 py-2 outline-none"
                  />
                  {errors.name && touched.name && (
                    <span className="px-4 text-red-500">{errors.name}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Email:</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="h-12 w-full border border-slate-500 bg-transparent px-4 py-2 outline-none"
                  />
                  {errors.email && touched.email && (
                    <span className="px-4 text-red-500">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Message:</label>
                  <Field
                    name="message"
                    as="textarea"
                    rows={4}
                    placeholder="Enter Message"
                    className="w-full border border-slate-500 bg-transparent px-4 py-2 outline-none"
                  />
                  {errors.message && touched.message && (
                    <span className="px-4 text-red-500">{errors.message}</span>
                  )}
                </div>
                <Button disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      {" "}
                      <FaSpinner className="mr-1 animate-spin" /> Submitting{" "}
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;

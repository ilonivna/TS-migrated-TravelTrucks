import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import Button from "../Button/Button";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import iziToast from "izitoast";

import "react-datepicker/dist/react-datepicker.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "Must be longer that 2 characters")
    .required("Required"),
  comment: Yup.string().max(200, "Must be 20 characters or less"),
  email: Yup.string().email("Invalid email address").required("Required"),
  date: Yup.date().required(),
});

export default function BookingForm() {
  return (
    <div>
      <div className={css.container}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            date: "",
            comment: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            iziToast.success({
              title: "OK",
              message: "Successfully sent request!",
              position: "topRight",
              color: "green",
            });
            console.log("Request sent");
            console.log(values);
            resetForm();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <h2 className={css.title}>Book your campervan now</h2>
              <p className={css.text}>
                Stay connected! We are always ready to help you.
              </p>
              <label htmlFor="name"></label>
              <Field className={css.input} name="name" placeholder="Name*" />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
              <label htmlFor="email"></label>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
              <label htmlFor="date"></label>
              <DatePicker
                className={css.input}
                selected={values.date}
                onChange={(date) => setFieldValue("date", date)}
                placeholderText="Booking date*"
              />
              <ErrorMessage
                name="date"
                component="span"
                className={css.error}
              />
              <label htmlFor="comment"></label>
              <Field
                className={clsx(css.input, css.textarea)}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="span"
                className={css.error}
              />
              <div className={css.btnCont}>
                <Button>Send</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

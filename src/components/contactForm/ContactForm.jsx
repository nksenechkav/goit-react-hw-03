import css from './ContactForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import { useId } from 'react';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().trim().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().trim().min(7, "Must be a valid phone number!").max(10, "Must be a valid phone number!").required("Required")
});


const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const nextContact = {
      ...values,
      id: nanoid(),
      name: values.name.trim(),
      number: values.number.trim(),
    }
    onAdd(nextContact);
		actions.resetForm();
	};

  return (
  
  <Formik initialValues={{
    id: nanoid(),
    name: "",
    number: ""
  }} 
  onSubmit={handleSubmit}
  validationSchema={FeedbackSchema}
  >
      <Form className={css.form}>
        <div className={css["form-wrapper"]}>
        <label className={css.label} htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="p" className={css.error} />
        </div>

        <div className={css["form-wrapper"]}>
        <label className={css.label} htmlFor={numberFieldId}>Number</label>
        <Field className={css.field} type="text" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="p" className={css.error} />
        </div>
       
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
  </Formik>
  );
}
export default ContactForm;
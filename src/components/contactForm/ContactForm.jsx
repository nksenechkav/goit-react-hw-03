import css from './ContactForm.module.scss';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
		console.log(values);
    onAdd(values);
		actions.resetForm();
	};

  return (
  
  <Formik initialValues={{
    id: nanoid(),
    name: "",
    number: ""
  }} 
  onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />

        <label className={css.label} htmlFor={numberFieldId}>Number</label>
        <Field className={css.field} type="text" name="number" id={numberFieldId} />

        <button className={css.btn} type="submit">Add contact</button>
      </Form>
  </Formik>
  );
}
export default ContactForm;
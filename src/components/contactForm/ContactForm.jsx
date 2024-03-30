import css from './ContactForm.module.scss';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  // const handleSubmit = (values, actions) => {
	// 	console.log(values);
  //   onAdd({
  //         id: nanoid(),
  //         name: e.target.elements.name.value,
  //         number: e.target.elements.number.value,
  //       });
	// 	actions.resetForm();
	// };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
  
  <Formik initialValues={{
    name: "",
    number: ""
  }} 
  onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />

        <label className={css.label} htmlFor={numberFieldId}>Number</label>
        <Field className={css.field} type="text" name="number" id={numberFieldId} />

        <button type="submit">Add contact</button>
      </Form>
  </Formik>
  );
}
export default ContactForm;
import css from './ContactForm.module.scss';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd }) => {
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
    <form className={css.form} onSubmit={handleSubmit}>
      <p className={css.label}>Name</p>
      <input className={css.field} type="text" name="name" />
      <p className={css.label}>Number</p>
      <input className={css.field} type="text" name="number" />
      <button className={css.btn} type="submit">Add contact</button>
    </form>
  );
}
export default ContactForm;
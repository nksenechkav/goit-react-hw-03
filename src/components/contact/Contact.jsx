import css from "./Contact.module.scss";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.item}>
      {/* <img className={css.image} src={avatar} alt="Avatar" width="48" /> */}
      <p className={css.info}>{name}</p>
      <p className={css.info}>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
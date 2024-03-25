import css from "./Contact.module.scss";

const Contact = ({ name, number }) => {
  return (
    <div className={css.item}>
      {/* <img className={css.image} src={avatar} alt="Avatar" width="48" /> */}
      <p className={css.info}>{name}</p>
      <p className={css.info}>{number}</p>
    </div>
  );
};

export default Contact;
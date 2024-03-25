import Contact from "../contact/Contact";
import css from "./ContactList.module.scss";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
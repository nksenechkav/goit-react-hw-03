import css from "./Contact.module.scss";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.item}>
      <div>  
      <div className={css["icon-wrapper"]}> 
      <ImUser className="my-icon" size="24"/>
      <p className={css.info}>{name}</p>
      </div>
      <div className={css["icon-wrapper"]}> 
      <ImPhone className="my-icon" size="24"/>
      <p className={css.info}>{number}</p>
      </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
      </div>
  );
};

export default Contact;
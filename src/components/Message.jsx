import styles from "./Message.module.css";
import PropTypes from 'prop-types'; 
function Message({message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}
Message.propTypes={

    // ... Other prop types ...
    message: PropTypes.string.isRequired, // Assuming 'message' should be a string
 
}
export default Message;

import "./styles.css";
import { Button } from "flowbite-react";

const Contact = (props) => {
  const handleCallClick = () => {
    window.location.href = `${props.type} ${props.contactType}`;
  };
  return (
    <Button className="" onClick={handleCallClick} pill>
      {props.message}
    </Button>
  );
};

export default Contact;

// return (
//     <>
//       <div onClick={handleCallClick} className="email-button">
//         <p>{props.message}</p>
//       </div>
//     </>
//   );

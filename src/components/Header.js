import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
const onClick = () => {
  console.log("click");
};
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick}/>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired, // required string prop
};

Header.defaultProps = {
  title: "Task Tracker",
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;

// PropTypes are a way to make your code more robust and avoid errors
// Style Methods
// Use camel case unlike dash method in css
// Inline = make sure to use double braces after style

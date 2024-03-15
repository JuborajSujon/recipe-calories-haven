import PropTypes from "prop-types";

export default function Button({ innerText }) {
  const buttonContent = {
    innerText: "",
  };
  return <button>{innerText}</button>;
}

Button.PropTypes = {
  innerText: PropTypes.string,
};

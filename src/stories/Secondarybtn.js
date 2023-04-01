import PropTypes from "prop-types";

function Button({ bg = true, label, backgroundColor = "#07407B", handleClick, color = "white" }) {
  const mode = bg
    ? (backgroundColor, color)
    : ((backgroundColor = "transparent"), (color = "#07407B"));

  const style = {
    backgroundColor,
    padding: "8px 20px",
    color,
    border: "none",
    fontSize: 16,
    borderRadius: 8,
    mode,
  };

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  handleClick: PropTypes.func,
  bg: PropTypes.bool,
};

export default Button;

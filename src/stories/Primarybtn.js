import PropTypes from "prop-types";

function Button({ label, backgroundColor = "#07407b", onClick, color = "white" }) {
  const style = {
    backgroundColor,
    padding: "11px 24px",
    width: "100%",
    color,
    border: "none",
    fontSize: 16,
    borderRadius: 8,
  };
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

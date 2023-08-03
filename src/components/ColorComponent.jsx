import propTypes from "prop-types";

const ColorComponent = (props) => {
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    background: props.color,
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
    padding: "1rem 1rem",
    margin: "1rem 1rem",
    width: "80%",
  };

  return (
    <div style={containerStyles}>
      <h1>{props.color}</h1>
    </div>
  );
};

ColorComponent.propTypes = {
  color: propTypes.string.isRequired,
};

export default ColorComponent;

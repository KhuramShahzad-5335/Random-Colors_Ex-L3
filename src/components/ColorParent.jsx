import ColorComponent from "./ColorComponent";

const ColorParent = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    height: "auto",
    width: "90%",
    margin: "0 auto",
    padding: "1rem 1rem",
    transition: "all 0.3s ease-in-out",
  };

  const containerWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    padding: "1rem",
    margin: "0",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={containerWrapper}>
      <div style={containerStyles}>
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
      </div>
      <div style={containerStyles}>
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
      </div>
      <div style={containerStyles}>
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
        <ColorComponent color={hexColor()} />
      </div>
    </div>
  );
};

const hexColor = () => {
  let color = "";
  let str = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

export default ColorParent;

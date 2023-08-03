import "./App.css";
import ColorParent from "./components/ColorParent";

function App() {
  return (
    <div className="container">
      <div className="sectionContainer">
        <div className="sectionDescriptionStyles">
          <h1>Colorful Bars with Hex Value</h1>
          <h3>Description</h3>
          <p>
            This section showcases an array of vibrant bars, each filled with a
            unique and random color. Alongside each colorful bar, you will find
            its corresponding hexadecimal value, providing an exciting visual
            exploration of various hues and shades. Immerse yourself in this
            colorful display and discover the magic of colors represented in the
            digital world through their hexadecimal codes.
          </p>
        </div>
        <ColorParent />
      </div>
    </div>
  );
}

export default App;

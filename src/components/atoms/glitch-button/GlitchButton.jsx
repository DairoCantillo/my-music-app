import "./glitch-button.scss";
const GlitchButton = ({text, onclick}) => {
  return (
    <>
      <button data-testid="glitch-button" onClick={onclick} className="glitch-button">
        {text}
      </button>
    </>
  );
};

export default GlitchButton;

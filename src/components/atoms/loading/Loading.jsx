import "./loading.scss";
const Loading = () => {
  return (
    <div data-testid="loading" className="loading">
      <div className="loading-spinner">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

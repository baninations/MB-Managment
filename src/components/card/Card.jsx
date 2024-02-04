import "./styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="informative-card">
        <div className="card-content">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

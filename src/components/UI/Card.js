import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // this will add all the classes from where Card component is used
  return <div className={classes}>{props.children}</div>; // this will add all children item from where Card component is used
};

export default Card;

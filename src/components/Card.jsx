function Card(props) {
  return (
    <div>
      <p>{props.icon} Title</p>
      {props.children}
    </div>
  );
}

export default Card;

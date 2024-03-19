function Card(props) {
  return (
    <div>
      <h2>Card</h2>
      <p>
        Define a set of 2 components - Card and Icon. the card takes the icon as
        a prop, then renders custom HTML below it with props.children.
      </p>
      <p>{props.icon} Card Title</p>
      {props.children}
    </div>
  );
}

export default Card;

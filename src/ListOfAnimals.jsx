//Define an array of animals called data. Use a .map() to return a list of all the animals in the data array.

const data = [
  { id: 1, name: "Zarah Nielsen 🐵" },
  { id: 2, name: "Fatima Griffith 🐶" },
  { id: 3, name: "Franklin Farmer 🐺" },
  { id: 4, name: "Sophie John 🦊" },
  { id: 5, name: "Jaxon Palmer 🐯" },
  { id: 6, name: "Lachlan Salinas 🦁" },
  { id: 7, name: "Kezia Salas 🐴" },
];

function ListOfAnimals() {
  return (
    <ul>
      {data.map(({ name, id }) => (
        <li key={id}> {name}</li>
      ))}
    </ul>
  );
}

export default ListOfAnimals;

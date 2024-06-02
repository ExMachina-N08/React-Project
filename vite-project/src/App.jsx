import "./App.css";
import Card from "./components/Card.jsx";
import Pokedex from "./components/Pokemon.jsx";
function App() {
  return (
    <>
      <div className="container d-flex flex-row  g-5">
        {Pokedex.map((item, index) => {
          return (
            <Card
              Key={index}
              image={item.image}
              Name={item.name}
              Types={item.type.map((he) => {
                return (
                  <a
                    href="#"
                    className="btn rounded-pill flex-row"
                    style={{ marginRight: 3 }}
                  >
                    {he}
                  </a>
                );
              })}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

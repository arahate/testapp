import "./App.scss";
import cardInfo from "./cards.json";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CardList cardInfo={cardInfo} />
      </div>
    </div>
  );
}

export default App;

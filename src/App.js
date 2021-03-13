import "./App.scss";
import cardInfo from "./cards.json";
import CardList from "./components/CardList";

function App() {
  return <CardList cardInfo={cardInfo} />;
}

export default App;

import Card from "./components/Card";
import { CardContextprovider } from "./context/CardContext";

function App() {
  return (
    <div>
      <CardContextprovider>
        <Card />
      </CardContextprovider>
    </div>
  );
}

export default App;

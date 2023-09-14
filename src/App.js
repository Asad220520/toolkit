import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Todo2 from "./components/Todo2";
import Todo3 from "./components/Todo3";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Todo2 />
      <Todo3 />
      <User />
      <Cart />
    </div>
  );
}

export default App;

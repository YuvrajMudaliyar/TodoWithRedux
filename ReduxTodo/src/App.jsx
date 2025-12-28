import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Todos from "./component/Todos.jsx";
import AddTodo from "./component/AddTodo.jsx";
import "react-toastify/dist/ReactToastify.css";
import ThemeSwitcher from "./component/ThemeSwitcher.jsx";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <Provider store={store}>
      <Row>
        <Col md={10} align="center">
          <AddTodo />
        </Col>
        <Col md={2}>
          <ThemeSwitcher />
        </Col>
        <Col></Col>
      </Row>
      <Todos />
    </Provider>
  );
}

export default App;

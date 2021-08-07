import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import SmartComponent from "./SmartComponent";
import store from "./redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <SmartComponent.Todo />
      </Provider>
    </>
  );
}

export default App;

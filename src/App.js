import logo from './logo.svg';
import './App.css';
import PageTitle from "./components/PageTitle/PageTitle";
import AppHeader from "./components/AppHeader/AppHeader";
import {useSelector} from "react-redux";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
    const modalIsOpen = useSelector(store => store.modalIsOpen);
    console.log(modalIsOpen);
    return (
    <div className="container">
      <PageTitle/>
      <AppHeader/>
      {modalIsOpen && <ModalWindow/>}
    </div>
  );
}

export default App;

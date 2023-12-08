import './App.css';
import PageTitle from "./components/PageTitle/PageTitle";
import AppHeader from "./components/AppHeader/AppHeader";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import {useState} from "react";

function App() {
    const [modalIsOpen , setModalIsOpen] = useState(false);
    function handleOpenModal(){
        setModalIsOpen(true);
    }
    function handleCloseModal() {
        setModalIsOpen(false);
    }
    return (
    <div className="container">
      <PageTitle/>
      <AppHeader onOpenModal={handleOpenModal} onCloseModal={handleCloseModal} modalIsOpen={modalIsOpen}/>
      {modalIsOpen && <ModalWindow onCloseModal={handleCloseModal}/>}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import PageTitle from "./components/PageTitle/PageTitle";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="container">
      <PageTitle/>
      <AppHeader/>
    </div>
  );
}

export default App;

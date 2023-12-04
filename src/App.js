import Footer from './layout/Footer';
import Header from './layout/Header';
import AddForm from './components/AddForm';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
   <Header/>
   <AddForm/>
   <Search/>
   <Footer/>
    </div>
  );
}

export default App;

import Footer from './components/Footer/Footer';
import MainContents from './components/MainContents/MainContents';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

const App = () =>{
  return(
    <main>
      <Navbar/>
      <SearchBar/>
      <Footer/>
    </main>
  );
}

export default App;
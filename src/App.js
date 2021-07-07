import './App.css';
import Loader from "react-loader-spinner";
import Navbar from './Navbar';
import { Carousel } from './Carousel';
import Login from './Login';
import Search from './Search';
import Cakedata from './Cakesdata';
import Cake from './Cake';


function App() {

  return (
    <div className="App">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <Navbar />
      <Carousel />
      <Login />
      <Search />
      <div className="row w-100 justify-content-center">
        {Cakedata.map((cake, index)=>{
          return <Cake data={cake} key={index}/>
        })}
        
      </div>
    </div>
  );
}

export default App;

import './App.scss';
import Navbar from './page/navbar/Navbar';
import SideBar from './page/sidebar/SideBar';

function App() {
  return (
    <div className="main">
      <SideBar/>
      <Navbar />
     
    </div>
  );
}

export default App;

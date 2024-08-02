import './App.scss';
import Navbar from './page/navbar/Navbar';
import SideBar from './page/sidebar/SideBar';

function App() {
  return (
    <div className="main">
      <Navbar />
      <SideBar/>
    </div>
  );
}

export default App;

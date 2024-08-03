import './App.scss';
import Content from './page/content/Content';
import Navbar from './page/navbar/Navbar';
import SideBar from './page/sidebar/SideBar';

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <span className='breadcumb'>Dashboard </span>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;

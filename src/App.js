import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Body from './Body';



function App() {
  return (
    // BEM
    <div className="app">
          <Header />
          
           
           <div className="app_main">
           <Sidebar />
           <Body />


           </div>    
    </div>
  );
}

export default App;

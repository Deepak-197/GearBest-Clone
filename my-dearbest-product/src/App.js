import logo from './logo.svg';
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import { Footer } from './Component/Footer';

import { LandingPage } from './Component/landingPage';

import { Navbar } from './Component/Navbar';

function App() {
  return (
    <div className="App">
     
      {/* <AllRoutes /> */}
      
      <Navbar />
      <LandingPage />
      
      <Footer />
      
    </div>
  );
}

export default App;

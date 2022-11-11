import logo from './logo.svg';
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import { Footer } from './Component/Footer';

import { LandingPage } from './Component/landingPage';

function App() {
  return (
    <div className="App">
      <h1>My DearBest Project</h1>
      {/* <AllRoutes /> */}
      <LandingPage />
      
      <Footer />
      
    </div>
  );
}

export default App;

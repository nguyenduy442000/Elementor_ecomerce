import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./client/views/Home/Home";
import Slogan from "./client/views/layout/Slogan/Slogan";
import Navigation from "./client/views/layout/Navigation/Navigation";
import Footer from "./client/views/layout/Footer/Footer"
import './app.scss';
import Catalogue from "./client/components/Catalogue/Catalogue";
import About from "./client/components/About/About";
import { Category } from "./data";
function App() {
  return (
    <div>
    <div className="container background-slogan">
    <Slogan/>
  </div>
  <div className="container">
    <Navigation />
  </div>
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<About/>}/>
    <Route path='/Catalogue' element={<Catalogue/>}/>

    </Routes>
    </BrowserRouter>

    <div style={{backgroundColor:'#f4f4f5'}}>
<div className="section_footer">
<Footer/>
</div>
</div>
    </div>
   
  );
}

export default App;

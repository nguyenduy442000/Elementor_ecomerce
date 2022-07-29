import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Slogan from "./client/views/layout/Slogan/Slogan";
import Navigation from "./client/views/layout/Navigation/Navigation";
import Footer from "./client/views/layout/Footer/Footer"
import './app.scss';
import Catalogue from "./client/views/Catalogue/Catalogue";
import About from "./client/views/About/About"
import Account from "./client/views/Account/Account";
import ShopInfo from "./client/views/ShopInfo/ShopInfo"
function App() {
  return (
    <div>
    <div className="container background-slogan">
    <Slogan/>
  </div>
  <div >
    <Navigation />
  </div>
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Account/>}/>
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

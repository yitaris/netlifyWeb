import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Hero2, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-custom-gradient'>
        <div className='bg-cover bg-no-repeat bg-center' style={{backgroundColor:'transparent'}}>
         
          <Hero2 />
        </div>
        <div className='relative z-0'>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

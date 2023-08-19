
  import React from 'react'
import Navbar from './Navbar';
import All from './All';
import Fullstack from './Fullstack';
import{Route,Routes} from 'react-router-dom';
import Datascience from './Datascience';
import Cybersecurity from './Cybersecurity';
import Career from './Career';
  
  function App() {
   
    return (
      
      <>
       <Navbar/>
        <Routes>
            <Route path='/'element={<All/>}></Route>
            <Route path='/FULLSTACKDEVELOPMENT' element={<Fullstack/>}></Route>
            <Route path='/DATASCIENCE'element={<Datascience/>}></Route>
            <Route path='/CYBERSECURITY' element={<Cybersecurity/>}></Route>
            <Route path='/CAREER' element={<Career/>}></Route>
          </Routes>
      
      </>
       
        
   
    )
  }
  
  export default App






  
 


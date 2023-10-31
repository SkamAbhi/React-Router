import { createBrowserRouter , createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/faq';
import Contact, { contactAction } from './pages/contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './Careers';
import CareerDetails, { careerDetailsLoader } from './CareerDetails';
import CareerError from './CareerError';

import Rootlayout from './layoyts/Rootlayout';
import Helplayout from './layoyts/Helplayout';
import CareersLayout from './layoyts/CareersLayout';


const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}> 
        <Route index element={<Home /> } />
        <Route path='about' element={<About /> }/>

        <Route path='help' element={<Helplayout />}>
          <Route path='faq' element={<Faq />}/>
          <Route path='contact' element={<Contact/>} action={contactAction}/>
        </Route>
         
        <Route path='careers' element={<CareersLayout />} errorElement={ < CareerError />}>
            <Route 
            index
            element={<Careers /> }
            loader={careersLoader}
            />
         

         <Route 
           path=":id"
           element={ <CareerDetails />}
           loader={careerDetailsLoader}
            />
          </Route>
         

        <Route path='*' element={<NotFound />} />
        
      </Route>
   )

)
function App() {
  return (
  
   <RouterProvider router={router} />
    
    
  );
}

export default App

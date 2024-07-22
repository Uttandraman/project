import React, { Component } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Subsrciption from './Component/Subsrciption';
import Terms from './Terms/Terms';
import About from './About/About';
import SignUp from './StyledSignup/StyledSignup';
import SignInSide from './Styledcomponent/Styledcomponent';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Comedy from './Comedy/Comedy';
import Horror from './Horror/Horror';
import Motovlog from './Motovlog/Motovlog';
import Gaming from './Gaming/Gaming';
import Vlog from './Vlog/Vlog';
import Food from './Food/Food';
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/signin' element={<SignInSide/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/comedy' element={<Comedy/>}/>
            <Route path='/horror' element={<Horror/>}/>
            <Route path='/motovlog' element={<Motovlog/>}/>
            <Route path='/gaming' element={<Gaming/>}/>
            <Route path='/vlog' element={<Vlog/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/sub' element={<Subsrciption/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
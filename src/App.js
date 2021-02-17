import './App.css';
import Headers from './components/header/Headers';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialog from './components/dialog/dialog';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import {BrowserRouter, Route, Router} from 'react-router-dom';

const App = () => {
  return ( 
    <BrowserRouter>
      <div className="wrapper-content">
      <Headers />
      </div>
      <div className = "app-wrapper container" >
          <Navbar />
         <div className="content">
            <Route path='/profile' component={Profile}/>
            <Route path='/dialog' component={Dialog}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
         </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
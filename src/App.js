import './App.css';

import Headers from './components/header/Headers';
import Profile from './components/profile/Profile';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';
import DialogContainer from './components/dialog/dialog-container';

import {Switch, Route} from 'react-router-dom';
import UserContainer from './components/users/user-container';



const App = (props) => {
  return (
      <>
      <div className="wrapper-content">
      <Headers />
      </div>
      <div className = "app-wrapper container" >
      <Sidebar />
         <div className = "content">
           <Switch>
              <Route exact path='/' render = { () => <Profile/>}/>
              <Route path='/dialog' render = { () => <DialogContainer /> }/>          
              <Route path='/music' component = {Music}/>
              <Route path='/news' component = {News}/>
              <Route path='/users' render = { () => <UserContainer /> }/> 
              <Route path='/settings' component = {Settings}/>
           </Switch>
          </div>
      </div> 
      </>
  );
}

export default App;
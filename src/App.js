import './App.css';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';
import DialogContainer from './components/dialog/dialog-container';
import {Switch, Route} from 'react-router-dom';
import UserContainer from './components/users/user-container';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/login';

const App = (props) => {
  return (
      <>
      <div className="wrapper-content">
      <HeaderContainer />
      </div>
      <div className = "app-wrapper container" >
      <Sidebar />
         <div className = "content">
     
              <Route path='/profile/:userId?' render = { () => <ProfileContainer />}/>
              <Route path='/dialog' render = { () => <DialogContainer /> }/>          
              <Route path='/music' component = {Music}/>
              <Route path='/news' component = {News}/>
              <Route path='/users' render = { () => <UserContainer /> }/> 
              <Route path='/settings' component = {Settings}/>
              <Route path='/login' render = { () => <Login />} />
          </div>
      </div> 
      </>
  );
}

export default App;
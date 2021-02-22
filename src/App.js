import './App.css';

import Headers from './components/header/Headers';
import Profile from './components/profile/Profile';
import Dialog from './components/dialog/dialog';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = (props) => {
  debugger;
  return ( 
    <Router>
      <div className="wrapper-content">
      <Headers />
      </div>
      <div className = "app-wrapper container" >
      <Sidebar friends={props.state.sidebar.friends}/>
         <div className="content">
          
           <Switch>
           
              <Route exact path='/' render={ () => 
                            <Profile profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}
                            />}/>
              <Route path='/dialog' 
                          render={ () =>
                                  <Dialog 
                                    data={props.state.dialogsPages} 
                                    dispatch={props.dispatch}
                                    />
                              }/>           
              <Route path='/music' component={Music}/>
              <Route path='/news' component={News}/>
              <Route path='/settings' component={Settings}/>
             
           </Switch>
           </div>
      </div> 
    </Router>
  );
}

export default App;
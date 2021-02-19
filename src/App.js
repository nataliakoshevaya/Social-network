import './App.css';
import Headers from './components/header/Headers';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/Profile';
import Dialog from './components/dialog/dialog';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
  return ( 
    <BrowserRouter>
      <div className="wrapper-content">
      <Headers />
      </div>
      <div className = "app-wrapper container" >
          <Sidebar friends={props.state.sidebar.friends}/>
         <div className="content">
            <Route path='/profile' render={ () => 
                          <Profile posts={props.state.profilePage.posts}
                          addPost={props.addPost}
                          newPostText={props.state.profilePage.newPostText}
                          postChange={props.postChange}
                          />}/>
            <Route path='/dialog' 
                        render={ () =>
                               <Dialog 
                                  data={props.state.dialogsPages} 
                                  addMessage={props.addMessage}
                                  messageChange={props.messageChange}
                                  newMessageText={props.state.dialogsPages.textMessage}
                                  />
                            }/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
         </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
import React from 'react'
import Movies from '../Movies/Movies';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';


function App() {

  //стэйт открытия навигации
  const [isOpenNavigation, setIsOpenNavigation] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({})

  function handleOpenNavigation() {
    setIsOpenNavigation(true)
  }
  function handleCloseNavigation() {
    setIsOpenNavigation(false)
  }

  function handleUpdateUser(user) {
      setCurrentUser(user)
    }
  
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies 
            openNavigation={handleOpenNavigation} 
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            openNavigation={handleOpenNavigation}
          />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register handleUpdateUser={handleUpdateUser} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Navigation 
      closeNavigation={handleCloseNavigation} 
      isOpenNavigation={isOpenNavigation}
      />
    </div>
  );
}

export default App;

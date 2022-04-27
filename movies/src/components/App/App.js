import React, { useEffect, useState } from 'react'
import Movies from '../Movies/Movies';
import { Route, Switch, useLocation, withRouter } from 'react-router-dom';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Movies/Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute';
import auth from '../../utils/Auth';
import mainApi from '../../utils/MainApi';
import ProtectedRouteAuth from '../ProtectedRouteAuth';



function App(props) {
  const location = useLocation();
  //стэйт открытия навигации
  const [isOpenNavigation, setIsOpenNavigation] = React.useState(false);
  //стэйт данных юзера
  const [currentUser, setCurrentUser] = React.useState({ data: {} });
  //стейт загруженных фильмов с beatfilm-movies
  const [movies, setMovies] = React.useState([]);

  const [savedMovies, setSavedMovies] = useState([]);
  //стейт ширины экрана
  const [width, setWidth] = React.useState(window.innerWidth)
  //стейт логирования
  const [loggedIn, setLoggedIn] = useState(false)

  const [profileRequest, setProfileRequest] = useState(false)

  const [disableButton, setDisableButton] = useState(false);




  useEffect(() => {
    window.addEventListener("resize", () => setTimeout(() => {
      handleResize();
    }, 1000));
  }, []);

  //проверка сохранённого токена авторизации пользователя
  //вызывается один раз при создании компонента
  useEffect(() => {
    handleTokenCheck(location.pathname);
  }, []);

  //загрузка данных авторизованного пользователя
  //вызывается при каждом изменении `loggedIn`
  useEffect(() => {
    if (loggedIn) {
      mainApi.getUser()
        .then(data => {
          setCurrentUser(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    moviesApi.getMovies()
      .then(setMovies)
      .catch((err) => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      return;
    }

    mainApi.getSaveMovies()
      .then(data => {
        // data = data.filter((d) => d.owner === currentUser._id);
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err)
        // saveMovieError("")
      })
  }, [currentUser, loggedIn]);

  useEffect(() => {
    const result = movies.map(movie => {
      // console.log(movies);
      // console.log(savedMovies);
      const savedMovie = savedMovies.find(x => movie.id === x.movieId);
      movie.movieId = movie.id;
      movie._id = savedMovie?._id;
      movie.saved = !!savedMovie;
      return movie;
    });

    setMovies(result);
  }, [savedMovies]);

  //изменение данных юзера
  function handleUpdateUser(name, email) {
    mainApi.updateUser(name, email)
      .then(data => {
        setCurrentUser(data)
        setProfileRequest(true)
      })
      .catch((err) => {
        setProfileRequest(true)
        console.log(err)
      })
  }

  function handleMovieSave(movie) {
    mainApi.saveMovie(movie)
      .then(updatedMovie => {
        setSavedMovies([...savedMovies, updatedMovie])
      })
      .catch(err => console.log(err))
  }


  function handleMovieDelete(movie) {
    mainApi.deleteSaveMovie(movie.movieId)
      .then(() => {
        setSavedMovies((movies) => movies.filter(x => x.movieId !== movie.movieId))
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const handleTokenCheck = (path) => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            props.history.push(path)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleLogin() {
    setLoggedIn(true)
    handleTokenCheck()
  }

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    props.history.push("/");
    setCurrentUser({});
  };

  function handleOpenNavigation() {
    setIsOpenNavigation(true)
  }
  function handleCloseNavigation() {
    setIsOpenNavigation(false)
  }

  const handleResize = () => {
    setWidth(
      window.innerWidth,
    )
  };
  // function handleUpdateUser(user) {
  //   setCurrentUser(user)
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
              openNavigation={handleOpenNavigation}
            />
          </Route>
          <ProtectedRoute path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            openNavigation={handleOpenNavigation}
            movies={movies}
            width={width}
            handleSaveMovie={handleMovieSave}
            handleMovieDelete={handleMovieDelete}
            showMore={true}
            showEmpty={true}
          />
          <ProtectedRoute path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            openNavigation={handleOpenNavigation}
            movies={savedMovies}
            savedMovies={savedMovies}
            width={width}
            handleMovieDelete={handleMovieDelete}
          
          />
          <ProtectedRoute path="/profile"
            handleUpdateUser={handleUpdateUser}
            loggedIn={loggedIn}
            component={Profile}
            openNavigation={handleOpenNavigation}
            handleSignOut={handleSignOut}
            profileRequest={profileRequest}
            setCurrentUser={setCurrentUser}
          />
          <ProtectedRouteAuth path="/signin"
            loggedIn={loggedIn}
            component={Login}
            handleLogin={handleLogin} 
            disableButton={disableButton}
            setDisableButton={setDisableButton}
          />
          <ProtectedRouteAuth path="/signup"
            loggedIn={loggedIn}
            component={Register}
            handleLogin={handleLogin} 
            disableButton={disableButton}
            setDisableButton={setDisableButton}
          />

          {/* <Route path="/signin">
            <Login handleLogin={handleLogin} />
          </Route> */}
          {/* <Route path="/signup">
            <Register />
          </Route> */}
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Navigation
          closeNavigation={handleCloseNavigation}
          isOpenNavigation={isOpenNavigation}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);

import React, { useState } from 'react';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';
import {Route, Switch} from 'react-router-dom'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        
        <Route path='/movies/:id'>
          <Movie />
        </Route>

        <Route path='/'>
          <MovieList />
        </Route>

      </Switch>
    </div>
  );
};

export default App;






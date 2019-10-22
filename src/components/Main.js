import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import MovieSearch from '../components/MovieSearch';
import MovieDetail from '../components/MovieDetail';
import FavouriteMovies from '../components/FavouriteMovies';

export default class Main extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={MovieSearch}/>
          <Route path='/movie-search' component={MovieSearch}/>
          <Route path='/movie-detail' component={MovieDetail}/>
          <Route path='/my-favourite-movies' component={FavouriteMovies}/>
        </Switch>
      </div>
    )
  }
}


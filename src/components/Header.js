import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MovieIcon from '@material-ui/icons/Movie';

export default class Header extends Component {
  render() {
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <MovieIcon className="header-item"></MovieIcon>    
            <NavLink to={'/movie-search'} className="header-item" activeClassName="active">Movie Search</NavLink>
            <NavLink to={'/movie-detail'} className="header-item" activeClassName="active">Movie Detail</NavLink>
            <NavLink to={'/my-favourite-movies'} className="header-item" activeClassName="active">My Favourite Movies</NavLink>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

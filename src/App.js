import React, { useEffect, useState } from 'react';
import Login from './Login.js';
import './App.css';
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player.js'
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebApi();


function App() {
  
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    
  }, []);

  
  return (
    <div className="app">
      {token ? <Player spotify={spotify}/> : <Login />}


    </div>
  );
}

export default App;

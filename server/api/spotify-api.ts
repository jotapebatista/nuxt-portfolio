// server/api/spotify-api.ts

import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID, // Store your client ID in .env
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET, // Store your client secret in .env
  redirectUri: process.env.SPOTIFY_REDIRECT_URI || 'http://localhost:3000/api/spotify-auth-callback',
});

export { spotifyApi };

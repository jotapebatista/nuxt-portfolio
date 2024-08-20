// server/api/spotify-auth.ts

import { defineEventHandler, sendRedirect } from 'h3';
import { spotifyApi } from './spotify-api';

export default defineEventHandler(async (event) => {
  const authUrl = spotifyApi.createAuthorizeURL(
    ['user-read-playback-state'], // Scopes
    'your-state' // State
  );

  return sendRedirect(event, authUrl);
});

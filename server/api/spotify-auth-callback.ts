// server/api/spotify-auth-callback.ts

import { defineEventHandler, getQuery, setCookie, sendRedirect, createError } from 'h3';
import { spotifyApi } from './spotify-api';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code as string | undefined;

  if (!code) {
    throw createError({ statusCode: 400, message: 'Authorization code not found' });
  }

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token } = data.body;

    // Store tokens in cookies or session
    setCookie(event, 'spotify_access_token', access_token, { httpOnly: true });
    setCookie(event, 'spotify_refresh_token', refresh_token, { httpOnly: true });

    // Redirect to the homepage or another page
    return sendRedirect(event, '/');
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to exchange authorization code for tokens' });
  }
});

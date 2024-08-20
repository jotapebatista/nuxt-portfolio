// server/api/spotify-now-playing.ts
import { defineEventHandler, getCookie } from 'h3';
import { spotifyApi } from './spotify-api';

export default defineEventHandler(async (event) => {
  const accessToken = getCookie(event, 'spotify_access_token');

  if (!accessToken) {
    throw createError({ statusCode: 401, message: 'Unauthorized' });
  }

  spotifyApi.setAccessToken(accessToken);

  try {
    const data = await spotifyApi.getMyCurrentPlaybackState();
    return data.body;
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to fetch Spotify data' });
  }
});

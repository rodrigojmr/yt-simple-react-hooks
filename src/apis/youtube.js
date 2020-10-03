import axios from 'axios';
const KEY = process.env.REACT_APP_YT_KEY;

export const defaultParams = {
  type: 'video',
  part: 'snippet',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

import axios from 'axios';

const KEY = 'AIzaSyDZ7FDHyjYTqZamCZj-JYyHHAAMZN_rE14';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 8,
    key: KEY
  }
});

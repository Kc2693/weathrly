import Key from './Key';

const root = 'http://api.wunderground.com';

function apiGet(url) {
  return fetch(url).then(response => response.json());
}

export default {
  getForecast(c, s) {
    console.log('hello are you getting to here?')
    return apiGet(`${root}/api/${Key.key}/conditions/forecast10day/hourly/q/${s}/${c}.json`);
  }
}

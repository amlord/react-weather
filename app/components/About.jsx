var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="lead">Welcome to this <a href="https://facebook.github.io/react/">React</a> Weather App, using the <a href="https://openweathermap.org">OpenWeatherMap.org</a> <abbr title="Application Programming Interface">API</abbr>.</p>
      <p>You can search for a locations, and this app will return the temperature at that location to you.</p>
    </div>
  )
};

module.exports = About;

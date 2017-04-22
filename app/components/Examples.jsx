var React = require('react'),
    {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to="/?location=london">London, United Kingdom</Link></li>
        <li><Link to="/?location=rio">Rio, Brazil</Link></li>
        <li><Link to="/?location=munich">Munich, Germany</Link></li>
        <li><Link to="/?location=bangkok">Bangkok, Thailand</Link></li>
      </ol>
    </div>
  )
};

module.exports = Examples;

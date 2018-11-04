import React from 'react';

class Footer extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>ArtMapper. </strong> An awesome website by <a href="https://github.com/jamesr101">James </a>,
            <a href="https://github.com/aviv-alon"> Aviv </a> and
            <a href="https://github.com/Theodhor"> Theodhor</a> .
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;

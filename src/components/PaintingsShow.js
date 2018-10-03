import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../lib/Auth';

class PaintingsShow extends React.Component {
  constructor() {
    super();
    this.state = {
      painting: null,
      artist: null,
      limit: 0
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.addMore = this.addMore.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/paintings/${this.props.match.params.id}`)
      .then(res => this.setState({ painting: res.data }));
  }

  handleDelete(e) {
    e.preventDefault();
    const token = Auth.getToken();
    axios
      .delete(`/api/paintings/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => this.props.history.push('/paintings'));
  }

  addMore(e){
    e.preventDefault();
    const c = this.state.limit + 3;
    axios.get(`/api/artists/${this.state.painting.artist._id}`)
      .then(res => this.setState({ artist: res.data, limit: c }));
    console.log(this.state.artist);

  }


  render() {
    if(!this.state.painting) return null;
    return (
      <section className="section">
        <div className="container">
          <div className="level">
            <h1 className="title">{ this.state.painting.title }</h1>
            <div>
              <Link className="button" to={`/paintings/${this.state.painting._id}/edit`}> Edit </Link>
              <button
                className="button is-danger"
                onClick={this.handleDelete}
              >Delete</button>
            </div>

          </div>
          <hr />
          <div className="container">


            <div className="section">
              <img src={ this.state.painting.image } alt={ this.state.painting.title } height="200" />
            </div>
            <div className="section">
              <p>{ this.state.painting.artist.name}</p>
            </div>
            <div className="section">
              <p>{ this.state.painting.title}</p>
            </div>
            <div className="section">
              <p>{ this.state.painting.wikiLink}</p>
            </div>
          </div>
          <div className="columns">
            <button
              className="button is-danger"
              onClick={this.addMore}
            >More</button>
          </div>
          <div className="container">
            {this.state.artist && this.state.artist.paintings.slice(0,this.state.limit).map(painting =>
              <li
                key={painting._id}
              >
                <img src={ painting.image } alt={ painting.title } height="200" />
              </li>
            )}
          </div>
        </div>
      </section>

    );
  }
}

export default PaintingsShow;
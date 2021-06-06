import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: 10,
      loading: false,
      dummyData: {
        name: "Alexa",
        address: "(435) 656-2834 293 Lost Crk Saint George, Utah(UT), 84770",
      }
    };
  }
  componentDidMount() {
    this.refs.myscroll.addEventListener('scroll', () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.loadMore();
      }
    });
  }

  loadMore() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 20, loading: false });
    }, 1000);
  }

  showItems() {
    let items = [];
    let i = 0;
    while (i < this.state.items) {
      items.push(
        <li
          key={i}>
          Name: {this.state.dummyData.name} {i}
          <li>
            <img src="https://source.unsplash.com/random/200x200?sig=2" />
            <div>Address: {this.state.dummyData.address}</div>
          </li>
        </li>);
      i++;
    }
    return items;
  }

  render() {
    return (
      <div
        ref="myscroll"
        style={{ height: '550px', overflow: 'auto' }}
      >
        <h onClick={this.props.onSignOut}>Sign Out</h>
        <h4>
          Infinite Scrolling
        </h4>
        <ul> {this.showItems()} </ul>
        {this.state.loading ?
          <p className="App-intro" >
            Loading ...
            </p> : ''
        }
      </div>
    );
  }
}

export default Home;
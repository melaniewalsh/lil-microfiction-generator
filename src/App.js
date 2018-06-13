import React, { Component } from 'react';
import Button from './components/Button';
import BriefModel from './models/Brief';
import Brief from './components/Brief';
import './App.scss';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brief: new BriefModel()

    }
  }

  newBrief = (ev) => {
    ev.preventDefault();
    this.setState({
      brief: new BriefModel()
    });
  }
  render() {
    return (
      <div className="container">
        <Brief brief={this.state.brief}/>
        <Button onClick={this.newBrief}>tell me another story</Button>
        <Footer/>
      </div>
    );
  }
}

export default App;

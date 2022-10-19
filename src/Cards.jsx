import React, { Component } from 'react';




class Cards extends Component {
  render() {
    return (
        <div className="col">
        <div className="card" style={{width: '18rem'}}>
        <img src={this.state.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text text-muted">{this.state.text}</p>
          <p className="cost">{this.state.cost}</p>
        </div>
      </div>
        </div>
    )
  }
}

export default Cards;
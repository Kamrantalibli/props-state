import React, { Component } from 'react';
import card1 from './img/card1.jpeg';
import card2 from './img/card2.jpeg';
import card3 from './img/card3.jpeg';
import card4 from './img/card4.jpg';

class SecOne extends Component {
    constructor(props){
        super(props);
        this.greece = this.greece.bind(this);
        this.miami = this.miami.bind(this);
        this.all = this.all.bind(this);
        this.bahamas = this.bahamas.bind(this);
        this.state={
            img1: card1,
            img2: card2,
            img3: card3,
            img4: card4,
            title1: "Crimson Palms Hotel",
            title2: "Eastern Brook Resort",
            title3: "Mirror Resort & Spa",
            title4: "Obsidian Time Hotel",
            text: "Travel",
            cost1: "$259.00",
            cost2: "$269.00",
            cost3: "$239.00",
            cost4: "$229.00"
        }
    }
    greece(){
        this.setState ({
            img1: card4,
            img2: card3,
            img3: card1,
            img4: card2,
            title1: "Primal Garden Hotel",
            title2: "Spring Jewel Hotel",
            title3: "Eastern Brook Resort",
            title4: "Mirror Resort & Spa",
            text: "Travel",
            cost1: "$259.00",
            cost2: "$229.00",
            cost3: "$219.00",
            cost4: "$239.00"
        })
    }
    miami(){
        this.setState({
            img1: card3,
            img2: card2,
            img3: card4,
            img4: card1,
            title1: "Spring Jewel Hotel",
            title2: "Primal Garden Hotel",
            title3: "Mirror Resort & Spa",
            title4: "Eastern Brook Resort",
            text: "Travel",
            cost1: "$229.00",
            cost2: "$259.00",
            cost3: "$239.00",
            cost4: "$219.00"
        })
    }
    bahamas(){
        this.setState({
            img1: card4,
            img2: card1,
            img3: card2,
            img4: card3,
            title1: "Eastern Brook Resort",
            title2: "Spring Jewel Hotel",
            title3: "Primal Garden Hotel",
            title4: "Mirror Resort & Spa",
            text: "Travel",
            cost1: "$219.00",
            cost2: "$229.00",
            cost3: "$259.00",
            cost4: "$239.00"
        })
    }
    all(){
       this.setState({
        img1: card1,
            img2: card2,
            img3: card3,
            img4: card4,
            title1: "Crimson Palms Hotel",
            title2: "Eastern Brook Resort",
            title3: "Mirror Resort & Spa",
            title4: "Obsidian Time Hotel",
            text: "Travel",
            cost1: "$259.00",
            cost2: "$269.00",
            cost3: "$239.00",
            cost4: "$229.00"
       }) 
    }
  render() {
    return (
    <div className='container'>
        <h1>Our Best Hotels</h1>
        <h6>There are many variations of passages of lorem.</h6>
        
        <div className="menu">
            <h4 onClick={this.all}>ALL</h4>
            <h4 onClick={this.greece}>GREECE</h4>
            <h4 onClick={this.miami}>MIAMI</h4>
            <h4 onClick={this.bahamas}>BAHAMAS</h4>
        </div>

    <div className="row">
    <div className="col">
        <div className="card" style={{width: '18rem'}}>
        <img src={this.state.img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.title1}</h5>
          <p className="card-text text-muted">{this.state.text}</p>
          <p className="cost">{this.state.cost1}</p>
        </div>
      </div>
    </div>
    <div className="col">
        <div className="card" style={{width: '18rem'}}>
        <img src={this.state.img2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.title2}</h5>
          <p className="card-text text-muted">{this.state.text}</p>
          <p className="cost">{this.state.cost2}</p>
        </div>
      </div>
    </div>
    <div className="col">
        <div className="card" style={{width: '18rem'}}>
        <img src={this.state.img3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.title3}</h5>
          <p className="card-text text-muted">{this.state.text}</p>
          <p className="cost">{this.state.cost3}</p>
        </div>
      </div>
    </div>
    <div className="col">
        <div className="card" style={{width: '18rem'}}>
        <img src={this.state.img4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.title4}</h5>
          <p className="card-text text-muted">{this.state.text}</p>
          <p className="cost">{this.state.cost4}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
  }
}

export default SecOne;
import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      item: [],
    };
  }
  componentDidMount() {
    const itemDetails = async () => {
      const response = await fetch(
        'https://fortnite-api.theapinetwork.com/store/get'
      );
      const data = await response.json();
      var allItems = data.data;
      var x = allItems.filter((item) => {
        return item.itemId === this.state.id;
      });
      this.setState({ item: x });
    };
    itemDetails();
  }

  render() {
    const { item, id } = this.state;
    var x = item;
    try {
      var st = {};
      if (x[0].item.rarity === 'epic') {
        st = {
          color: 'purple',
        };
      } else if (x[0].item.rarity === 'rare') {
        st = {
          color: '#2bb2bb',
        };
      } else if (x[0].item.rarity === 'uncommon') {
        st = {
          color: 'green',
        };
      } else if (x[0].item.rarity === 'legendary') {
        st = {
          color: 'orange',
        };
      }
    } catch (error) {}
    return (
      <>
        {item.map((i) => (
          <div key={id} className="text-center items">
            <h3 className="display-4 mt-3"> {i.item.name}</h3>
            <img className="m-5" src={i.item.images.information} alt="" />
            <p>
              Rarity: <i className="fas fa-dot-circle" style={st}></i>
              <span>{i.item.rarity}</span>
            </p>
            <p>
              Type: <span>{i.item.type}</span>
            </p>
            <p>
              Currency: <span>{i.item.obtained_type}</span>
            </p>
            <div className="rating">
              <p>
                AvgStars: <span>{i.item.ratings.avgStars}</span>
              </p>
              <p>
                Total Points: <span>{i.item.ratings.totalPoints}</span>
              </p>
            </div>
            <p>
              Description:
              {i.item.description === null ? (
                <span>{i.item.name}</span>
              ) : (
                <span>{i.item.description}</span>
              )}
            </p>
          </div>
        ))}
      </>
    );
  }
}

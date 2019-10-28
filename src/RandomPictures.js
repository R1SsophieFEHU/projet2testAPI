import React from 'react';
import axios from 'axios';

class RandomPictures extends React.Component {
  constructor (props){
    super(props);
    this.state = {
        image : "",
    };    
  }

  picturesAPI=() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=aDmDjpr9tOtUXNV9qcaHFd5IgQvaj4RzAczrT2ka')
      .then(response => {
        this.setState({
          image: response.data[0].image,
        });
      });
  };

  render () {
    return (
        <div>
            <figure className="pictures">
                <img
                src={this.state.image}
                alt= {`un astre`}
                />
            </figure>
            <button type="button" onClick={this.picturesAPI}>Get new quote</button>

        </div>    
    );
  }
}


export default RandomPictures;
import React from 'react';
import axios from 'axios';
import './randomPictures.css';

class RandomPictures extends React.Component {
  constructor (props){
    super(props);
    this.state = {
        hdurl : "",
    };    
  }

  picturesAPI=() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=aDmDjpr9tOtUXNV9qcaHFd5IgQvaj4RzAczrT2ka')
      .then(response => {
        this.setState({
          hdurl: response.data.hdurl,
        });
      });
  };

  render () {
    return (
      <div>
      <div className="RandomPictures">
            <figure className="box-random-pictures">
                <img className="img-random-pictures"
                src={this.state.hdurl}
                alt= {`un astre`}
                />
            </figure>
            
        </div>
        <button type="button" onClick={this.picturesAPI}>Get picture day</button>
        </div>    
    );
  }
}


export default RandomPictures;
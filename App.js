import "./app.css";
import React, { Component } from 'react';
import axios from 'axios';
class App extends Component{

      constructor(){
        super()
        this.state= {
          breed: 'husky',
          images: [],
        }
      }


      componentDidMount(){
        this.fetchDogImages()
        
      }


      componentDidUpdate(prevProps, prevState){
        if (prevState.breed !== this.state.breed){
        // this.setState({
        //   images: []
        // })

        this.fetchDogImages()
      }
    }


    // ------ Same idea -----
    //  useEffect{(() =>
    // 
    // ), [breed]}


      fetchDogImages = () =>{
        axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
        .then(result =>{
          this.setState({
            images: result.data.message
        })
      })
      .catch(error =>{
        console.log('error:', error)
      })
      }

      handleChange = (event) =>{
        this.setState({
          breed: event.target.value
        })
      }



  render(){
    return(
      <>
      <h1>The Dog Website</h1>


      <select value={this.state.breed} onChange={this.handleChange}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
        <option value="boxer">Boxer</option>
      </select>


      <div>
        {this.state.images.map((image, index) =>(
          <img key={index} src={image} alt="Dog" />
        ))}
      </div>

      </>
    )
  }
}
export default App;

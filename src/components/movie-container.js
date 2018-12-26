import React, {Component} from 'react'
import Movie from './movies'
import Axios from 'axios';

class MovieContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        const iTunes = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'
        Axios.get(iTunes).then((response)=>{
            this.setState({
                movies: response.data.feed.entry
            })
        })
    }
    render(){
        const movieList = this.state.movies.map((movie, index)=>{
            return <Movie info = {movie} key = {index}/>
        })
        return(
            <div>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;
import React, { Component } from 'react';
import Spinner from "./Spinner"
import axios from 'axios';
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviedetail:[]
         }
    }


    componentDidMount = () => {
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        const movie_id = this.props.location.state.movie;
        const endpoint = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&append_to_response=videos,images,credits`;
        axios.get(endpoint)
            .then(edun => {
                console.log(edun.data)
                this.setState({moviedetail: edun.data})
            })
            .catch(err => {
            console.log(err)
        })
    }

    render() {
        const movie = this.state.moviedetail;
        const basImgeUrl = "https://image.tmdb.org/t/p/original";
    
        if (movie === undefined || movie.length === 0) {
            return (
                <Spinner/>
            )
        } else {
            return (
                <section className="movie_detail">
                    <div className="movie_img"
                        style={{
                            backgroundImage: `url(${basImgeUrl}/${movie.backdrop_path || movie.poster_path})`
                    }}>
                       
                    </div>
                    <div className="movie_text">
                        <h4>{movie.title}</h4>
                        <p>{movie.vote_average * 10}</p>
                        <p>{movie.release_date}</p>
                        <h5>{movie.tagline}</h5>
                        <p>{movie.overview}</p>
                        <a href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}>Watch Trailler</a>
                    </div>
                </section>
            );
        }
        
    }
}
 
export default MovieDetail;
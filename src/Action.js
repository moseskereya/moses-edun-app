import React, { Component } from 'react';
import Spinner from "./component/Spinner"
import {Link} from "react-router-dom"
import axios from "axios"
class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action:[]
         }
    }

    componentDidMount = () => {
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        const base_url = "https://api.themoviedb.org/3";
        const Action = `${base_url}/discover/movie?api_key=${api_key}&with_genres=27`;
        axios.get(Action)
            .then(res => {
                const data = res.data.results;
                this.setState({ action: data });
                console.log(this.state.movies)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const basImgeUrl = "https://image.tmdb.org/t/p/original";
        const movieslist = this.state.action;

        // eslint-disable-next-line array-callback-return
        const data = movieslist.map(movie => {
            return (
                <div key={movie.id} className="movie_container">
                    <Link to={{
                        pathname: `MovieDetail/${movie.id}`,
                        state: { movie: movie.id }
                    }}>
                        <img src={`${basImgeUrl}/${movie.backdrop_path || movie.poster_path}`} alt="movie_img" />
                    </Link>
                    <div className="movie_content">
                        <div>
                            <i className="fas fa-star"></i>
                            <span>
                                <p>{movie.vote_average * 10}</p>
                            </span>
                        </div>
                        <div>
                            <h4>{movie.title || movie.original_name}</h4>
                        </div>
                    </div>
                </div>
            )
        })

        if (this.state.action === undefined || this.state.action.length === 0) {
            return (
                <Spinner/>
            )
        } else {
            return (
                <div className="container">
                    {data}
                </div>
            );
        }
    }
}
 
export default Action;
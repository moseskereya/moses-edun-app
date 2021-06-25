import axios from 'axios';
import React, { Component } from 'react';
import {Link} from"react-router-dom"
import Spinner from "./Spinner"
class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            search: ""
         }
    }

    OnSearch = (e) => {
        this.setState({ search: e.target.value })
    }

    componentDidMount = () => {
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        const base_url = "https://api.themoviedb.org/3";
        const Action = `${base_url}/trending/all/week?api_key=${api_key}&language=en-US`;
        axios.get(Action)
        .then(res => {
             const data = res.data.results;
            this.setState({ movies: data });
            console.log(this.state.movies)
        })
     .catch(error => {
       console.log(error)
     })
}

    render() {
        const basImgeUrl = "https://image.tmdb.org/t/p/original";
        const movieslist = this.state.movies;
        // eslint-disable-next-line array-callback-return
        const data = movieslist.filter((movie) => {
            if (this.state.search === "") {
                return movie;
            } else if (movie.title || movie.original_name.toLowerCase().includes(this.state.search.toLowerCase())) {
                return movie
            }
        })
            .map( movie => {
            return (
                <div key={movie.id} className="movie_container">
                    <Link to={{
                        pathname: `MovieDetail/${movie.id}`,
                        state: {movie:movie.id}
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
        
        if (this.state.movies === undefined || this.state.movies.length === 0) {
            return (
                <Spinner/>
            )
        } else {
            return (
                <>
                    <div className="top_banner">
                        <input type="text" placeholder="Search your movie here"
                            onChange={this.OnSearch} />
                    </div>
                    <div className="container">
                        {data}
                    </div>
                </>
            );
        }

    }
}
 
export default banner;
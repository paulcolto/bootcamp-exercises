import React from 'react';

export default class MovieReview extends React.Component {
    constructor(props) {
        super(props);

        this.movie_id = 32;

        this.state = {
            movie_data: null
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8081/api/movie?id=${this.movie_id}`)
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                    movie_data: json_data
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //send POST data to an endpoint
        fetch('http://www.laravel.test:8081/api/review', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "movie_id": 488,
                    "user_id": 1,
                    "text": "Oh my god! This was so good. I bet in heaven they play it on repeat.",
                    "rating": 6
                }
            )
        })
    }

    render() {
        let movie = 'Loading...';
        if (this.state.movie_data !== null) { // if the data already came from fetch
            movie = (
                <div className="movie">
                    <h2>{this.state.movie_data.name }</h2>
                    <img src={ this.state.movie_data.poster_url} alt=""/>
                </div>
            )
        }

        return (
            <form action="" method="post" onSubmit={ this.handleSubmit }>

                { movie }

                <input type="submit" value="Submit" />

            </form>
        )
    }
}
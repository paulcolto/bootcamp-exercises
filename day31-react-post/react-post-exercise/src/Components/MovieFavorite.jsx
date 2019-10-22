import React from 'react';

export default class MovieFavorite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorite: null
        }

        componentDidMount = () => {
            fetch(`http://www.laravel.test:8081/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
                .then(response => response.json())
                .then(json_data => {
                    this.setState({
                        favorite: json_data.favorite
                    })
                })
        }
    }
    render() {

        let label = 'Favorite this Movie';

        if (this.state.favorite === true) {
            label = 'Unfavorite this movie';
        } else if (this.state.favorite === false) {
            label = 'Favorite this movie';
        }

        return (
            <>
                <h1>This is movie number {this.props.movie_id}</h1>
                <button>{label}</button>
            </>)
    }
}
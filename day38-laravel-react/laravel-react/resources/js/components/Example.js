import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            user: null
        }
    }
    
    componentDidMount(){
        this.setState({
            userId: document.getElementById('user_id').value,
            user: JSON.parse(document.getElementById('user').value)
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hello no { this.state.userId }</div>
                            <p>I know your name is { this.state.user ? this.state.user.name : 'John Doe' }</p>
                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('my-react')) {
    ReactDOM.render(<Example />, document.getElementById('my-react'));
}

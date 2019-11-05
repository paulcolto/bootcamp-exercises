import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           data: null
        };
    }

    componentDidMount = () => {
        fetch('https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                data: data
            })
        })
    }
    render() {
        let content = 'Loading...';
        if (this.state.data !== null) {
            content = (
                <>
                    <h1>Date: { this.state.data.date }</h1>
                    <h2>Attendance: </h2>
                    <table>
                        <tbody>
                        {
                            this.state.data.attendance.map(student => {
                                <tr key = { student.id }>
                                    <th>{ student.name }</th>
                                    <td>{ student.from }</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </>
            )
        }
        return (
            { content }
        )
    }
}
import React from 'react';

export default class MemoryGame extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const grid = [
            [' A ', ' B ', ' C ', ' D ', ' E ', ' F '],
            [' G ', ' H ', ' I ', ' J ', ' K ', ' L '],
            [' A ', ' B ', ' C ', ' D ', ' E ', ' F '],
            [' G ', ' H ', ' I ', ' J ', ' K ', ' L '],
        ]

        return (
            <>
                <h1>Memory Game</h1>
                <div className="grid">
                    {grid[0]}
                    <br />
                    {grid[1]}
                    <br />
                    {grid[2]}
                    <br />
                    {grid[3]}
                   
                </div>
            </>)
    }
}
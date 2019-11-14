import React from 'react';

export default class TicTacToe extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const grid = [
            [' X ', ' 0 ', ' X ', ' 0 '],
            [' 0 ', ' X ', ' 0 ', ' X '],
            [' X ', ' 0 ', ' X ', ' 0 '],
            [' 0 ', ' X ', ' 0 ', ' X ']
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
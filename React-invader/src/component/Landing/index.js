import React from 'react';

import './landing.css'

class Landing extends React.Component {

    render() {
        return (
            <main className="welcomePage">
                <div id="game-over">
                    <h3>Game Over</h3>
                    <button onClick={this.props.onClick}>Réessayez</button>
                </div>
            </main>
        )
    }
}



export default Landing



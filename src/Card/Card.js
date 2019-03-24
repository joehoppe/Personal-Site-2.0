import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ value: 'X' })}>Button1
      </button>
                {this.state.value}
            </div>
        );
    }
}

export default Card
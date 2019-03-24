import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: 0,
        };
    }

    render(i) {
        return (
            <div>
                <button onClick={() => this.handleClick()}>Button1
      </button>
                {this.state.click}
            </div>
        );
    }

    handleClick() {
        this.setState({
            click: this.state.click + 1
        });
    }
}

export default Card
import React, { Component } from 'react';

export default class Book extends Component {
    //binding the event handler
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: 'john'
        };
    }

    //event handler
    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    lowerCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    resetCount = () => {
        this.setState({
            count: 0
        })
    }

    render() {

        const { img, title, author, } = this.props.info;

        return (
            <section className="book">
                <img src={img} width="150" alt="book" />
                <article>
                    <h3>Title : {title}</h3>
                    <h5>Author : {author}</h5>
                    <h5>Count : {this.state.count}</h5>
                    <button type="button" onClick={this.addCount}>
                        add
                    </button>
                    <button type="button" onClick={this.lowerCount}>
                        lower
                    </button>
                    <button type="button" onClick={this.resetCount}>
                        reset
                    </button>
                </article>
            </section>
        );
    }
}
import React, { Component } from 'react';

export default class Book extends Component {
    //binding the event handler
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        this.handleClick = this.handleClick.bind(this)
    }

    //event handler
    handleClick = () => {
        console.log("you clicked my")
        console.log(this.state.count)
    }

    render() {

        const { img, title, author, } = this.props.info;

        return (
            <section className="book">
                <img src={img} width="150" alt="book" />
                <article>
                    <h3>title : {title}</h3>
                    <h5>author : {author}</h5>
                    <button type="button" onClick={this.handleClick}>
                        add count
                    </button>
                </article>
            </section>
        );
    }
}
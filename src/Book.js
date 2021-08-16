import React, { Component } from 'react';

export default class Book extends Component {
    //binding the event handler
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            showInfo: true,
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

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {

        const { id, img, title, author, } = this.props.info;
        const { handleDelete } = this.props;
        const checkInfo = (info) => {
            if (info == true) {
                return <p>lorem ipsum</p>
            }
            else {
                return null
            }
        }

        return (
            <section className="book">
                <div>
                    <img src={img} width="150" alt="book" />
                </div>
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
                    <button type="button" onClick={() => { handleDelete(id) }}>
                        delete
                    </button>
                    <button type="button" onClick={this.handleInfo}>info</button>
                    {checkInfo(this.state.showInfo)}
                </article>
            </section>
        );
    }
}
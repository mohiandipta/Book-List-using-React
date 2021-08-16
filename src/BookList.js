import React, { Component } from 'react';
import Book from './Book';
import booksData from './BookData'

class BookList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: booksData
        }
    }

    //delete item by filter and setState
    handleDelete = id => {
        console.log(this.state.books)
        const sortedBooks = this.state.books.filter(item => item.id !== id)
        this.setState({
            books: sortedBooks
        })
    }

    render() {

        return (
            <section>
                <h3>This is our BookList</h3>
                {this.state.books.map(item => (
                    <Book key={item.id} info={item} handleDelete={this.handleDelete} />
                ))}
            </section>
        );
    }
}

export default BookList;

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

    render() {

        return (
            <section>
                <h3>This is our BookList</h3>
                {this.state.books.map(item => (
                    <Book key={item.id} info={item} />
                ))}
            </section>
        );
    }
}

export default BookList;

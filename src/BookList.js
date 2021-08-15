import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {

    state = {
        books: [
            {
                id: 1,
                book: 'Book number one',
                author: 'john doe',
                image: 'url'
            },
            {
                id: 2,
                book: 'Book number two',
                author: 'bobby doe',
                image: 'url'
            },
            {
                id: 3,
                book: 'Book number three',
                author: 'peter doe',
                image: 'url'
            }
        ]
    };

    //this.setState({})
    render() {
        // const books = this.state.books.map((item) => item.book);
        // console.log(books)
        //filter
        //forEach
        //map
        //reduce

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

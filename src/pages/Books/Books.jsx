// import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, []);

    return (
        <div className='m-24'>
            <h1 className='mb-9 font-bold text-4xl text-center'>Books</h1>

            <div className='grid grid-cols-3 gap-6'>
            {
                data.map(book=><Book key={book.bookId} book={book} ></Book>)
            }
            </div>
        </div>
    );
};

export default Books;
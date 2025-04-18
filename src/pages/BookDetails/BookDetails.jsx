import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, image, review } = singleBook;

    // console.log(singleBook);

    const handleMarkAsRead = (id) => {
        addToStoredDB(id);
    }

    return (
        <div className='flex justify-center gap-12 items-center my-12'>
            <div className='bg-[#F3F3F3] rounded-xl'>
                <img className='w-[425px] h-[564px] p-[73px]' src={image} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-4xl mb-4'>{bookName}</h1>
                <h3 className='font-medium text-xl mb-6'>Book by: {author}</h3>
                <p className='w-[550px] mb-3'><span className='font-bold'>Review:</span> {review}</p>
                <div className='flex gap-6'>
                    <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline">Mark as Read</button>
                    <button className="btn btn-active btn-info text-white">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
import React from 'react';
import bannerImg from '../../assets/book.png'

const Banner = () => {
    return (
        <div className='flex gap-32 justify-center items-center mt-8 bg-[#F3F3F3] rounded-2xl'>
            <div>
                <h1 className='font-bold text-[56px] mb-12'>Books to freshen up <br/> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white font-bold text-xl'>View The List</button>
            </div>
            <div className='py-20'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
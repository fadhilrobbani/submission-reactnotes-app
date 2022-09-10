import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../assets/image/notFound.png';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='w-full flex justify-center'>
      <div className='w-auto max-w-3xl h-screen flex gap-4 justify-center items-center flex-col'>
        <img className='md:h-[450px]' src={notFound} alt='notfound' />
        <h1 className='font-bold text-2xl'>Maaf, halaman tidak tersedia</h1>
        <button
          onClick={() => navigate('/')}
          className='bg-slate-600 cursor-pointer hover:text-slate-900 hover:ring-slate-900 hover:ring-2 hover:bg-transparent text-white px-4 py-2 rounded-lg '
        >
          Kembali ke home
        </button>
      </div>
    </div>
  );
}

export default NotFound;

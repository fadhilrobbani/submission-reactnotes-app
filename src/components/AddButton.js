import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function AddButton() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/notes/new')}
      className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-5 right-8 bg-slate-200'
    >
      <AiOutlinePlus size={50} />
    </div>
  );
}

export default AddButton;

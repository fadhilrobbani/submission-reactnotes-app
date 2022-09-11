import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { useNavigate} from 'react-router-dom';

function ActionButtons({ onClickSubmitHandler }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-10 bg-green-200'
        onClick={onClickSubmitHandler}
      >
        <AiOutlineCheck size={50} />
      </div>
      <div
        onClick={() => navigate('/')}
        className='cursor-pointer z-[100] fixed rounded-full p-2 bottom-8 right-36 bg-pink-200'
      >
        <AiOutlineClose size={50} />
      </div>
    </div>
  );
}

ActionButtons.propTypes = {
  onClickSubmitHandler: PropTypes.func.isRequired,
};

export default ActionButtons;

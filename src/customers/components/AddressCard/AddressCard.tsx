import React from 'react';
type Props = {

};
const AddressCard:React.FC<Props> = () => {
  return (
    <div>
        <div className='text-left space-y-3'>
            <p className='font-semibold'> Jai Shree Raam</p>
            <p> Ayodhya, Sanatani,369</p>
            <div className=''>
                <p className='font-semibold'>Phone Number</p>
                <p>maru heart</p>
            </div>

        </div>
    </div>
  );
};

export default AddressCard;
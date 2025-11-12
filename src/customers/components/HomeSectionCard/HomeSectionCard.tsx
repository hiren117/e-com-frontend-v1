import react from 'react';

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white shadow-lg 
        overflow-hidden w-[15rem] mx-3'>

            <div className='h-[13rem] w-[10rem] '>
                <img className='object-cover object-top w-full h-full' 
                src = "https://placehold.co/600x400?text=Section+Image" alt="Section Image" />

            </div>
            

        </div>
    )
}

export default HomeSectionCard;
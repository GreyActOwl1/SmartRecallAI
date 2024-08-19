import React from 'react';

const FlashCards = ({color,text,title}:{color:string,text:string,title:string}) => {
    return (
        <div>
            <h1 className="text-white font-bold text-center mt-4 mb-2 text-2xl lg:text-3xl tracking-wider">Your Flash Cards</h1>
        <div className="flex justify-center pt-8 cursor-pointer duration-200 transition-all">
            <div className={` ${color} h-80 w-60 rounded-lg shadow-md flex flex-col`}>
          <h3 className="pt-6 text-white p-4 text-center text-xl font-bold">{title}</h3>
          <p className="flex justify-center items-center p-4 mt-16 text-md font-medium text-white">{text}</p>
            </div>
        </div></div>
    );
}

export default FlashCards;

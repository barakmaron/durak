import React from 'react';

const Loader = () => {
  return (<div className='w-[100vw] h-[100vh] flex items-center justify-center gap-2 mx-auto absolute top-0 left-0 bg-sky-300 z-50'>    
    <div className="flex space-x-2">
        <span className='almond_butter_font text-4xl'>Loading</span>        
        <LoaderDot color='bg-green-500' animation='animate-bounce' delay={1}/>
        <LoaderDot animation='animate-bounce' delay={2}/>
        <LoaderDot color='bg-yellow-500' animation='animate-bounce' delay={3}/>
    </div>
  </div>);
};

const LoaderDot = ({ 
  color = 'bg-sky-500', 
  animation = '', 
  delay = 0
} ) => {
    return <div className={`flex items-center justify-center ${animation} animation-delay-${delay * 100}`}>
        <div className={`w-5 h-5 ${color} rounded-full animate-ping absolute inline-flex`}></div>
        <div className={`w-4 h-4 ${color} rounded-full relative`}></div>
    </div>;
};

export default Loader;
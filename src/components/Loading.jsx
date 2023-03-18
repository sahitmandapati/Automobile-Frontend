import React from 'react';
import { ScaleLoader } from 'react-spinners';


const Loading = ({width = 150}) => {

  return (
    <div className="flex items-center justify-center h-96">
      <ScaleLoader color='#161616' size={`${width}`} />
    </div>
  );
};

export default Loading;

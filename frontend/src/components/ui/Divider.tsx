import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider = ({ className = '' }: DividerProps) => {
  return (
    <div className={`my-8 mx-auto w-full max-w-[80%] ${className}`}>
      <hr className="border-t-2 border-black" />
    </div>
  );
};

export default Divider;

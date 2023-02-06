import { Button, TextField } from '@material-ui/core';
import React from 'react';

const Rooms = () => {
  return <div className='w-screen h-screen md:w-[75vw] md:h-[90vh] bg-white self-center justify-self-center shadow-lg rounded-md flex px-5'>
    <div className='py-5 flex gap-2 h-fit'>
        <TextField
        variant='outlined'
        label="Search Room"/>       
        <Button variant='outlined'>Create Room</Button>
        <Button variant='outlined'>Join Room</Button>
    </div>    
  </div>;
};

export default Rooms;
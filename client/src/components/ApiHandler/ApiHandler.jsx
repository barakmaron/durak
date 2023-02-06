import React, { useCallback } from 'react';
import { Alert, Snackbar } from '@mui/material';
import Loader from '../Loader/Loader';

const ApiMessageDisplay = ({
    pending_with_loader,
    successful,
    failed,
    message,
    InitApiHandlerAction
}) => {
  
  const handle_successful = useCallback(() => {
    InitApiHandlerAction();
  }, [InitApiHandlerAction])

  return <>
  <div
  className="fixed top-28 right-[44%] mx-auto w-fit z-50">    
    <Snackbar open={successful} autoHideDuration={3000} onClose={handle_successful}>
      <Alert severity="success">
        {message}    
      </Alert>
    </Snackbar>
    <Snackbar open={failed} autoHideDuration={3000} onClose={handle_successful}>
      <Alert severity="error">
        {message}    
      </Alert>
    </Snackbar>
  </div>
  { pending_with_loader && <Loader /> }
  </>;
};

export default ApiMessageDisplay;
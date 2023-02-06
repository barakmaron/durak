import React from 'react';
import { useCallback } from 'react';
import FormConstructor from '../../components/Form/Form';
import LoginForm from './LoginForm';

const Home = ({
  LoginRegisterAction
}) => {

  const submitAction = useCallback((values) => {
    LoginRegisterAction(values.user_name, values.password);
  }, [LoginRegisterAction]);

  return (<div className='sm:w-[50vw] w-full flex flex-col justify-center items-center mx-auto self-center justify-self-center bg-white rounded-lg shadow-lg'>
    <h1 className='almond_butter_font text-5xl pt-5 w-fit'>Durak Russian Card Game</h1>
      <FormConstructor
      form="LoginForm"
      inputs={LoginForm}
      onSubmit={submitAction}
      submitButtonLabel="login / register"/>
  </div>);
};

export default Home;
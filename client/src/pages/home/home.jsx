import React from 'react';
import FormConstructor from '../../components/Form/Form';
import LoginForm from './LoginForm';

const Home = () => {
  return (<div className='sm:w-[50vw] w-full flex flex-col justify-center items-center mx-auto self-center justify-self-center bg-white rounded-lg shadow-lg'>
    <h1 className='almond_butter_font text-5xl pt-5 w-fit'>Durak Russian Card Game</h1>
      <FormConstructor
      form="LoginForm"
      inputs={LoginForm}
      onSubmit={(values) => console.log(values)}
      submitButtonLabel="login / register"/>
  </div>);
};

export default Home;
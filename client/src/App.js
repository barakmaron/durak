import React, { Suspense } from 'react';
import  { Routes, Route, useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';
import routes from './routes';
import Loader from './components/Loader/Loader';
import ApiHandlerConnector from './components/ApiHandler/ApiHandlerConnector';
import { useEffect } from 'react';
import ProtectedRouteConnector from './components/ProtectedRoute/ProtectedRouteConnector';

function App({
  user_name
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if(user_name) 
      navigate('/rooms');
  }, [user_name, navigate]);

  return (<>
    <Routes>
      {routes.map((route) => {
        return <React.Fragment key={route.location}>
            <Route
            path={route.location}
            element={<>
              { route?.protected && <ProtectedRouteConnector /> }
              <Helmet>
                <title>{route.title}</title>
              </Helmet>
              <Suspense fallback={<Loader/>}>
                <route.element { ...(route.props || [])}></route.element>
              </Suspense>
            </>}/>
        </React.Fragment>;
      })}
    </Routes>
    <ApiHandlerConnector />
  </>);
}

export default App;

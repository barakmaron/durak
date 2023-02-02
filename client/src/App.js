import React, { Suspense } from 'react';
import  { Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import routes from './routes';
import Loader from './components/Loader/Loader';

function App() {
  return (<>
    <Routes>
      {routes.map((route) => {
        return <React.Fragment key={route.location}>
            <Route
            path={route.location}
            element={<>
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
  </>);
}

export default App;

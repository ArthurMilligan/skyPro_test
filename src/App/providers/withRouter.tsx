import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter basename={'/skyPro_test'}>
      <Suspense fallback={<div>Loading...</div>}>{component()} </Suspense>
    </BrowserRouter>
  );

export default withRouter;

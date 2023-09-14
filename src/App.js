import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import GlobalProvider from './providers/GlobalProvider';
import "./styles/style.css";
import "./styles/colours.css";
import "./styles/font.css";
import './styles/space.css';
import routes from './routes';

function App() {
  return (
    <GlobalProvider>
      <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            {routes.map((route, key) => {
              const Element = route.component;
              return <Route path={route.href} key={key} element={<Element route={route} />} />
            })}
          </Route>
      </Routes>
    </GlobalProvider>
  );
}

export default App;

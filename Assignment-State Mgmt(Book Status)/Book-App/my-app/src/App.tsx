import React from 'react';
import logo from './logo.svg';
import './App.css';
import customTheme from './Themes/CustomThemes';
import MyLibrary from './Pages/MyLibrary/MyLibrary';
import { ThemeProvider } from '@mui/material/styles';
import LandingPage from './Pages/LandingPage/LandingPage';
import BookDetailsPage from './Pages/BookDetailsPage/BookDetailsPage';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } =
    useAuth0();
  if (isLoading) {
    return <div> Loading ...</div>;
  }
  if (isAuthenticated) {
    return (
      <div className="App">
        <ThemeProvider theme={customTheme}>
          {/* <Login /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="mylibrary" element={<MyLibrary />} />
            <Route
              path="/bookdetails/:id"
              element={<BookDetailsPage />}
            />
          </Routes>
        </ThemeProvider>
      </div>
    );
  } else {
    return <>{loginWithRedirect()}</>;
  }
}

export default App;

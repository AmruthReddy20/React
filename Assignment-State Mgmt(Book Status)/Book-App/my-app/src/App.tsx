import React from 'react';
import logo from './logo.svg';
import './App.css';
import customTheme from './Themes/CustomThemes';
import MyLibrary from './Pages/MyLibrary/MyLibrary';
import { ThemeProvider } from '@mui/material/styles';
import LandingPage from './Pages/LandingPage/LandingPage';
import BookDetailsPage from './Pages/BookDetailsPage/BookDetailsPage';
// import Footer from './Organisms/Banner/Footer/Footer';
import {
  Route,
  Routes,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
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
}

export default App;



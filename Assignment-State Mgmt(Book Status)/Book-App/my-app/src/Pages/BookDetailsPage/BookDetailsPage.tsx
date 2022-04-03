import React from 'react';
import BookPage from '../../Organisms/Banner/BookPage/BookPage';
import TabsMenu from '../../Molecules/TabsMenu/TabsMenu';
import Template from '../Template';
const BookDetailsPage = () => {
  return (
    <Template>
      <BookPage />
      <TabsMenu />
    </Template>
  );
};

export default BookDetailsPage;

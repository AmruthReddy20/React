import '@testing-library/jest-dom';
import React from 'react';
import { store } from '../../store/store';
import { getBook, getOneBook } from '../BookReducer';

test('testloadingg', async () => {
//   const data = [{ id: '1' }];
  const mockThunk = await (
    await store.dispatch(getBook({ id: '1', status: 'reading' }))
  ).meta.requestStatus;
  expect(mockThunk).toEqual('fulfilled');
});

test('testgetBook rejectedloading', async () => {
//   const data = [{ id: '1' }];
  const mockThunk = await (
    await store.dispatch(getBook({ id: '0', status: 'reading' }))
  ).meta.requestStatus;

  expect(mockThunk).toEqual('rejected');
});

// test('testgetOneBookloading', async () => {
// //   const data = [{ id: '1' }];
//   const mockThunk = await (
//     await store.dispatch(getOneBook('3'))
//   ).meta.requestStatus;

//   expect(mockThunk).toEqual('fulfilled');
// });

test('testgetOneBookrejected loading', async () => {
//   const data = [{ id: '1' }];
  const mockThunk = await (
    await store.dispatch(getOneBook('0'))
  ).meta.requestStatus;

  expect(mockThunk).toEqual('rejected');
});

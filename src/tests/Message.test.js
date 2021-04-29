import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {Message} from '../messages/Message';
import {
  BrowserRouter
} from "react-router-dom"

afterEach(cleanup);

it('Message with empty text can not be sent', () => {
  const userMessages = jest.fn()
  const store  = jest.fn()

  const {queryByText, getByText} = render(
    <BrowserRouter>
      <Message location = {{search:
          {mode:"new"}}} userMessages={userMessages} store={store}/>
    </BrowserRouter>,
  )

  fireEvent.click(getByText("Написать"));

  expect(queryByText("Сообщение пустое")).toBeTruthy();
});
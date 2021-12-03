import React from "react";
// import MutationObserver from 'mutationobserver-shim';
import { render, screen } from '@testing-library/react';
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

   const FirstName = screen.getByLabelText(/First Name:/i)
   userEvent.type(FirstName, "Lorenzo");

   const LastName = screen.getByLabelText(/Last Name:/i)
   userEvent.type(LastName, "Gallo");

   const Address = screen.getByLabelText(/Address:/i)
   userEvent.type(Address, "123 sharps");

   const City = screen.getByLabelText(/City:/i)
   userEvent.type(City, "Concord");

   const State = screen.getByLabelText(/State:/i)
   userEvent.type(State, "CA");

   const Zip = screen.getByLabelText(/Zip:/i)
   userEvent.type(Zip, "94582");

   const button = screen.getByRole("button");;
   userEvent.click(button);

   const output1 = screen.queryByText(/You have ordered/i);
   expect(output1).toBeInTheDocument();

   const output2 = screen.queryByText(/Lorenzo Gallo/i);
   expect(output2).toBeInTheDocument();
   
   const output4 = screen.queryByText(/123 sharps/i);
   expect(output4).toBeInTheDocument();

   const output5 = screen.queryByText(/Concord, CA 94582/i);
   expect(output5).toBeInTheDocument();
});

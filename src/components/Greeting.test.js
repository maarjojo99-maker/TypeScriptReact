
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('greeting component', () => {
    test('render hello world as a text', ()=>{
    // arrange
    render(<Greeting/>);
    // act 
     // nothing
    
     // assert  

     const helloWorldElement = screen.getByText('Hello world !');
     expect(helloWorldElement).toBeInTheDocument();
});

 test('render "good to see you" as a text if button was not clicked', ()=>{
    // arrange
    render(<Greeting/>);
    // act 
     // nothing
    
     // assert 

     const cftext = screen.getByText('good to see you' , {exact: false});
     expect(cftext).toBeInTheDocument();
});

 test('render "changed!" as a text if button was clicked', ()=>{
    // arrange
    render(<Greeting/>);
    // act 

    const buttonElement = screen.getByRole('button')
     userEvent.click(buttonElement);
    
     // assert 

     const cptect = screen.getByText('changed!', {exact: false});
     expect(cptect).toBeInTheDocument();
});

// test('not render "good to see you" as a text if button was clicked', ()=>{
//     // arrange
//     render(<Greeting/>);
//     // act 

//     const buttonElement = screen.getByRole('button')
//      userEvent.click(buttonElement);
    
//      // assert 

//      const cptect = screen.getByText('good to see you', {exact: false});
//      expect(cptect).toBeNull();
// });


});


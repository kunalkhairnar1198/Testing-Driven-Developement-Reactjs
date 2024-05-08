import Greeting from "./Greeting";
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Greeting component',()=>{
    test('render hello world as a text',()=>{
        //arrange
        render(<Greeting/>)
        //Act
        //..nothing
    
        //asserts
        const helloWorldElement = screen.getByText('hello world!',{exact:false})
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('Check multiple test cases like multiple test cases one componenet' ,()=>{
        render(
            <Greeting/>
        )

        const paragraphElement = screen.getByText('good to see you',{exact:false})
        expect(paragraphElement).toBeInTheDocument()
    })

    //when test when button is false that means is clicked then check test and pass test case our code
    test('render changed if the button was clicked',()=>{
       //Arrange
        render(
            <Greeting/>
        )
        //act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument()
    })

    //when test when button is false that means is clicked then check test and pass test case our code
    test('renders when paragraph is not visible check test',()=>{
        render(
            <Greeting/>
        )
        //act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //assert
        const outputElement = screen.queryByText('good to see you',{exact:false})
        expect(outputElement).toBeNull()
    })

   
})



//this test is custom test 
//how to sync component test automaticaly unite test and all about rain in this test cases
//how to test group of tests
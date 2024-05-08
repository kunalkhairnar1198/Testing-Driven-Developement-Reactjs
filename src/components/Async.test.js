import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async Component',()=>{
    
    test('renders posts if request success ', async() => {
      
      //directly fetch globaly in the browser in window.fetch
      window.fetch = jest.fn(); //jest.fn is dummy mock function 
      window.fetch.mockResolvedValueOnce({
        json: async ()=> [{id:'p1', title:'first post'}]
      });

      render(<Async/>)

       const listItemElement =await screen.findAllByRole('listitem')
       expect(listItemElement).not.toHaveLength(0);
    });
    
});

// write Async style testing component how component test and render automatically test Async react component
// how to make mock api and then access api to the test api test cases and test automatically 
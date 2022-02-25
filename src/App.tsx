import { Key } from 'components/Key/Key';
import { Keyboard } from 'components/Keyboard/Keyboard';

const App = () => {
  return (
    <div className='flex items-center justify-center h-full bg-beje'>
      <Keyboard>
        <div className='grid grid-flow-col gap-x-3'>
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '"',
              bLeft: '2',
              bRight: '@',
            }}
            keyToListen='2'
          />
          <Key
            characters={{
              tLeft: '#',
              bLeft: '3',
              bRight: '£',
            }}
            keyToListen='3'
          />
          <Key
            characters={{
              tLeft: '$',
              bLeft: '4',
              bRight: '§',
            }}
            keyToListen='4'
          />
          <Key
            characters={{
              tLeft: '%',
              bLeft: '5',
            }}
            keyToListen='5'
          />
          <Key
            characters={{
              tLeft: '&',
              bLeft: '6',
            }}
            keyToListen='6'
          />
          <Key
            characters={{
              tLeft: '/',
              bLeft: '7',
            }}
            keyToListen='7'
          />
          <Key
            characters={{
              tLeft: '(',
              bLeft: '8',
              bRight: '[',
            }}
            keyToListen='8'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '9',
              bRight: ']',
            }}
            keyToListen='9'
          />
          <Key
            characters={{
              tLeft: '=',
              bLeft: '0',
            }}
            keyToListen='}'
          />
          <Key
            characters={{
              tLeft: '?',
              bLeft: `'`,
            }}
            keyToListen={`'`}
          />
          <Key
            characters={{
              tLeft: '»',
              bLeft: '«',
            }}
            keyToListen='«'
          />
          <Key
            className='w-[120px]'
            characters={{
              tRight: '!',
              tLeft: '',
            }}
            keyToListen='Backspace'
          />
        </div>
        {/* <div className='grid grid-flow-col gap-x-3'>
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
        </div>
        <div className='grid grid-flow-col gap-x-3'>
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
        </div>
        <div className='grid grid-flow-col gap-x-3'>
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
        </div>
        <div className='grid grid-flow-col gap-x-3'>
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
          <Key
            characters={{
              tLeft: '|',
              bLeft: '\\',
            }}
            keyToListen='\'
          />
          <Key
            characters={{
              tLeft: '!',
              bLeft: '1',
            }}
            keyToListen='1'
          />
        </div> */}
      </Keyboard>
    </div>
  );
};

export default App;

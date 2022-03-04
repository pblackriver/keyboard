import { EnterKey } from 'components/EnterKey/EnterKey';
import { Keyboard } from 'components/Keyboard/Keyboard';
import { KeyFactory } from 'containers/KeyFactory/KeyFactory';
import { Row } from './containers/Row/Row';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-beje'>
      <h1 className='text-primary text-7xl mb-11'>Keyboard (duh)</h1>
      <h4 className='mb-16 text-2xl text-light'>press a key on your keyboard to hear and see the magic</h4>
      <Keyboard>
        <Row>
          <KeyFactory type='special' characters={{ tLeft: '|', bLeft: '\\' }} keyToListen='Backquote' />
          <KeyFactory type='number' characters={{ tLeft: '!', bLeft: '1' }} keyToListen='1' />
          <KeyFactory type='number' characters={{ tLeft: `"`, bLeft: '2' }} keyToListen='2' />
          <KeyFactory type='number' characters={{ tLeft: '#', bLeft: '3' }} keyToListen='3' />
          <KeyFactory type='number' characters={{ tLeft: '$', bLeft: '4' }} keyToListen='4' />
          <KeyFactory type='number' characters={{ tLeft: '%', bLeft: '5' }} keyToListen='5' />
          <KeyFactory type='number' characters={{ tLeft: '&', bLeft: '6' }} keyToListen='6' />
          <KeyFactory type='number' characters={{ tLeft: '/', bLeft: '7', bRight: '{' }} keyToListen='7' />
          <KeyFactory type='number' characters={{ tLeft: '(', bLeft: '8', bRight: '[' }} keyToListen='8' />
          <KeyFactory type='number' characters={{ tLeft: ')', bLeft: '9', bRight: ']' }} keyToListen='9' />
          <KeyFactory type='number' characters={{ tLeft: '=', bLeft: '0', bRight: '}' }} keyToListen='0' />
          <KeyFactory type='special' characters={{ tLeft: '?', bLeft: `'` }} keyToListen='Minus' />
          <KeyFactory type='special' characters={{ tLeft: '»', bLeft: '«' }} keyToListen='Equal' />
          <KeyFactory type='backspace' className='last:mr-0' />
        </Row>
        <div className='grid grid-flow-col'>
          <Row className='w-[64.188rem]'>
            <KeyFactory type='tab' />
            <KeyFactory type='letter' characters={{ tLeft: 'Q' }} keyToListen='Q' />
            <KeyFactory type='letter' characters={{ tLeft: 'W' }} keyToListen='W' />
            <KeyFactory type='letter' characters={{ tLeft: 'E' }} keyToListen='E' />
            <KeyFactory type='letter' characters={{ tLeft: 'R' }} keyToListen='R' />
            <KeyFactory type='letter' characters={{ tLeft: 'T' }} keyToListen='T' />
            <KeyFactory type='letter' characters={{ tLeft: 'Y' }} keyToListen='Y' />
            <KeyFactory type='letter' characters={{ tLeft: 'U' }} keyToListen='U' />
            <KeyFactory type='letter' characters={{ tLeft: 'I' }} keyToListen='I' />
            <KeyFactory type='letter' characters={{ tLeft: 'O' }} keyToListen='O' />
            <KeyFactory type='letter' characters={{ tLeft: 'P' }} keyToListen='P' />
            <KeyFactory type='special' characters={{ tLeft: '*', bLeft: '+', bRight: '¨' }} keyToListen='BracketLeft' />
            <KeyFactory type='special' characters={{ tLeft: '`', bLeft: '´' }} keyToListen='BracketRight' />

            <KeyFactory type='capsLock' />
            <KeyFactory type='letter' characters={{ tLeft: 'A' }} keyToListen='A' />
            <KeyFactory type='letter' characters={{ tLeft: 'S' }} keyToListen='S' />
            <KeyFactory type='letter' characters={{ tLeft: 'D' }} keyToListen='D' />
            <KeyFactory type='letter' characters={{ tLeft: 'F' }} keyToListen='F' />
            <KeyFactory type='letter' characters={{ tLeft: 'G' }} keyToListen='G' />
            <KeyFactory type='letter' characters={{ tLeft: 'H' }} keyToListen='H' />
            <KeyFactory type='letter' characters={{ tLeft: 'J' }} keyToListen='J' />
            <KeyFactory type='letter' characters={{ tLeft: 'K' }} keyToListen='K' />
            <KeyFactory type='letter' characters={{ tLeft: 'L' }} keyToListen='L' />
            <KeyFactory type='special' characters={{ tLeft: 'Ç' }} keyToListen='Semicolon' />
            <KeyFactory type='special' characters={{ tLeft: 'ª', bLeft: 'º' }} keyToListen='Quote' />
            <KeyFactory type='special' characters={{ tLeft: '^', bLeft: '~' }} keyToListen='Backslash' className='last:mr-0' />
          </Row>
          <EnterKey />
        </div>
        <Row>
          <KeyFactory type='leftShift' />
          <KeyFactory type='special' characters={{ tLeft: '>', bLeft: '<' }} keyToListen='IntlBackslash' />
          <KeyFactory type='letter' characters={{ tLeft: 'Z' }} keyToListen='Z' />
          <KeyFactory type='letter' characters={{ tLeft: 'X' }} keyToListen='X' />
          <KeyFactory type='letter' characters={{ tLeft: 'C' }} keyToListen='C' />
          <KeyFactory type='letter' characters={{ tLeft: 'V' }} keyToListen='V' />
          <KeyFactory type='letter' characters={{ tLeft: 'B' }} keyToListen='B' />
          <KeyFactory type='letter' characters={{ tLeft: 'N' }} keyToListen='N' />
          <KeyFactory type='letter' characters={{ tLeft: 'M' }} keyToListen='M' />
          <KeyFactory type='special' characters={{ tLeft: ';', bLeft: ',' }} keyToListen='Comma' />
          <KeyFactory type='special' characters={{ tLeft: ':', bLeft: '.' }} keyToListen='Period' />
          <KeyFactory type='special' characters={{ tLeft: '_', bLeft: '-' }} keyToListen='Slash' />
          <KeyFactory type='rightShift' className='last:mr-0' />
        </Row>
        <Row>
          <KeyFactory type='leftCtrl' />
          <KeyFactory type='special' characters={{ tLeft: 'Fn' }} keyToListen='Fn' />
          <KeyFactory type='windows' />
          <KeyFactory type='special' characters={{ tLeft: 'Alt' }} keyToListen='AltLeft' />
          <KeyFactory type='space' />
          <KeyFactory type='special' characters={{ tLeft: 'AltGr' }} keyToListen='AltRight' />
          <KeyFactory type='special' characters={{ tLeft: 'Fn' }} keyToListen='Fn' />
          <KeyFactory type='special' characters={{ tLeft: 'context' }} keyToListen='ContextMenu' />
          <KeyFactory type='rightCtrl' className='last:mr-0' />
        </Row>
      </Keyboard>
    </div>
  );
};

export default App;

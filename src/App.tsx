import ScreenSizeWarning from 'components/ScreenSizeWarning/ScreenSizeWarning';
import useWindowSize from 'hooks/useWindowSize/useWindowSize';
import * as React from 'react';
import { lazy } from 'react';
import { fifthRowKeys, firstRowKeys, fourthRowKeys, secondRowKeys, thirdRowKeys } from 'utils';
const EnterKey = lazy(() => import('components/EnterKey/EnterKey'));
const Keyboard = lazy(() => import('components/Keyboard/Keyboard'));
const KeyFactory = lazy(() => import('containers/KeyFactory/KeyFactory'));
const Row = lazy(() => import('containers/Row/Row'));

const App = () => {
  const { width } = useWindowSize();

  return (
    <React.Suspense fallback={'loading'}>
      <div className='flex flex-col items-center justify-center h-full bg-beje'>
        {/* keyboard width */}
        {width < 1132 ? (
          <ScreenSizeWarning />
        ) : (
          <>
            <h1 className='text-primary text-7xl mb-11'>Keyboard (duh)</h1>
            <h2 className='mb-16 text-2xl text-light'>press a key on your keyboard to hear and see the magic</h2>
            <Keyboard>
              <Row>
                {firstRowKeys.map(({ key, ...elem }) => (
                  <KeyFactory key={key} {...elem} />
                ))}
              </Row>
              <div className='grid grid-flow-col'>
                <Row className='w-[64.188rem]'>
                  {secondRowKeys.map(({ key, ...elem }) => (
                    <KeyFactory key={key} {...elem} />
                  ))}
                  {thirdRowKeys.map(({ key, ...elem }) => (
                    <KeyFactory key={key} {...elem} />
                  ))}
                </Row>
                <EnterKey />
              </div>
              <Row>
                {fourthRowKeys.map(({ key, ...elem }) => (
                  <KeyFactory key={key} {...elem} />
                ))}
              </Row>
              <Row>
                {fifthRowKeys.map(({ key, ...elem }) => (
                  <KeyFactory key={key} {...elem} />
                ))}
              </Row>
            </Keyboard>
          </>
        )}
      </div>
    </React.Suspense>
  );
};

export default App;

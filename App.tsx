import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';
import Main from './src/Main';
import {store, persistor} from './src/state/store';

function App() {
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
    });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Main />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

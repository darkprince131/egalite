// _app.tsx
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // This effect will only run on the client
  }, []);

  return <Component {...pageProps} />;
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';

import App from './App';
import reportWebVitals from './reportWebVitals';

const Global = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;	
	font-family: consolas;
}

::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
  background: #f1f1f12e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ae7a857a;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d367a1;
}
`

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Global />
			<App />
		</QueryClientProvider>
		
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

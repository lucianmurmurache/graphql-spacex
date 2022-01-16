import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { client } from './graphql/client';
import { ApolloProvider } from '@apollo/client';

console.log(
    '%c ',
    'font-size:400px; background:url(https://pics.me.me/codeit-google-until-youfinda-stackoverflow-answerwith-code-to-copy-paste-34126823.png) no-repeat;',
    /*change this ↑ to 920px for meme*/
);

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

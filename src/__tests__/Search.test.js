import { Search } from '../components/index';
import * as data from './mockData.json';
import { render } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/client';
import App from '../App';

describe('Search', () => {
    test('renders Search component', () => {
        render(
            <ApolloProvider client={client}>
                <App>
                    <Search data={data} />
                </App>
            </ApolloProvider>,
        );
    });
});

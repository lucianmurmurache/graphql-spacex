import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/client';
import App from '../App';

describe('App', () => {
    test('renders App component', () => {
        render(
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>,
        );
    });
    test('renders Loading spinner', () => {
        render(
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>,
        );
        expect(
            screen.getByLabelText('Loading spinner animation'),
        ).toBeInTheDocument();
    });
});

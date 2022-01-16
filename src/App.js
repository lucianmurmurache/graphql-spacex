import { GET_LAUNCHES } from './graphql/query';
import { useQuery } from '@apollo/client';
import { ShowError, LoadingSpinner, Search } from './components/index';

function App() {
    const { errors, loading, data } = useQuery(GET_LAUNCHES);

    return errors ? (
        <ShowError />
    ) : loading ? (
        <LoadingSpinner />
    ) : (
        <Search data={data} />
    );
}

export default App;

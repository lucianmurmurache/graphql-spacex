import { GET_LAUNCHES } from './graphql/query';
import { useQuery } from '@apollo/client';
import LoadingSpinner from './components/LoadingSpinner';
import Search from './components/Search';
import ShowError from './components/ShowError';

function App() {
  const { errors, loading, data } = useQuery(GET_LAUNCHES);

  return errors ? (
    <ShowError />
  ) : loading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Search data={data} />
    </div>
  );
}

export default App;

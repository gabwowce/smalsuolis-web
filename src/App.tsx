import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultLayout from './components/layouts/DefaultLayout';
import LoaderComponent from './components/other/LoaderComponent';
import { UserContext, UserContextType } from './components/UserProvider';
import { filterRoutes } from './utils';
import { slugs } from './utils/routes';

function App() {
  const { isLoading, loggedIn, subscriptionsCount } = useContext<UserContextType>(UserContext);

  const filteredRoutes = filterRoutes(loggedIn);

  if (isLoading) return <LoaderComponent />;

  const mainPage = loggedIn
    ? subscriptionsCount > 0
      ? slugs.myEvents
      : slugs.newSubscription
    : slugs.events;

  return (
    <DefaultLayout>
      <Routes>
        <Route>
          {filteredRoutes.map((route, index) => (
            <Route key={`route-${index}`} path={route.slug} element={route.component} />
          ))}
        </Route>
        <Route path="*" element={<Navigate to={mainPage} />} />
      </Routes>
      <ToastContainer />
    </DefaultLayout>
  );
}

export default App;

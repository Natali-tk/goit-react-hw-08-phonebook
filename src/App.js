import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense,lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
// import RegisterView from 'views/RegisterView';
// import LoginView from 'views/LoginView';
// import ContactsView from 'views/ContactsView';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

const RegisterView=lazy(()=>import('views/RegisterView'));
const LoginView= lazy(()=>import('views/LoginView'));
const ContactsView=lazy(()=>import('views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);
  return (
    <Container>
      <AppBar />

      <Switch>
      <Suspense fallback={<p>Загружаем...</p>}>
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Suspense>
      </Switch>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </Container>
  );
}

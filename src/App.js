
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from "components/Container/Container";
import AppBar from "components/AppBar/AppBar";
import RegisterView from "views/RegisterView";
import LoginView from "views/LoginView";
import ContactsView from "views/ContactsView";
  export default function App() {
  
  return (
    <Container>
      <AppBar/>

      <Switch>
        <Route path="/register" component={RegisterView}/>
        <Route path="/login" component={LoginView}/>
        <Route path="/contacts" component={ContactsView}/>
      </Switch>
      <ToastContainer position="bottom-left" autoClose={3000} />
      </Container>
      
    
  );
};




import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import AllActors from './Pages/AllActors';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndividualActor from './Pages/IndividualActor';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import Aboutus from './Pages/Aboutus';

function App() {
  let client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });


  return (
    <>

      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <AllActors />
            </Route>

            <Route exact path='/services'>
              <Services />
            </Route>

            <Route exact path='/actor/:actorId'>
              <IndividualActor />
            </Route>

            <Route exact path='/aboutus'>
              <Aboutus />
            </Route>
          </Switch>

          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;

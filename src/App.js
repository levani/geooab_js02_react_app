import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        
        <Header />

        <Switch>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;

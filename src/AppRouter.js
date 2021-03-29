import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import HomePage from './components/pages/HomePage';

const AppRouter = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;
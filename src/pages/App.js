
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Logo } from '../assets'
import { Header, Footer, Modal } from '../components'
import { Home, DetailTrip, Payment, Profile, ListTransaction, Trip, AddTrip, NotFound, Search } from './'
import { API, PrivateRoute, setAuthToken } from '../config'
import store from '../store'
import { useEffect } from 'react'

const App = () => {
    useEffect(()=> {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
    }, [store])

    const checkUser = async () => {
        try {
            const response = await API.get('/user')

            let payload = response.data.data.user

            payload.token = localStorage.token;

            store.dispatch({
                type: "USER_SUCCESS",
                payload,
              });

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        checkUser()
    }, [store])
    
    
    return (
        <>
        <Router>
            <Header logo={Logo} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <Modal variant="modal-login" />
                        <Modal variant="modal-register" />
                    </Route>
                    <Redirect path="/detail-trip/" to="/not-found" exact />
                    <Route path="/detail-trip/:id">
                        <DetailTrip />
                        <Modal variant="modal-login" />
                        <Modal variant="modal-register" />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                        <Modal variant="modal-login" />
                        <Modal variant="modal-register" />
                    </Route>
                    <Route path="/payment">
                        <Payment />
                        <Modal variant="modal-login" />
                        <Modal variant="modal-register" />
                    </Route>
                    <Route path="/search">
                        <Search />
                        <Modal variant="modal-login" />
                        <Modal variant="modal-register" />
                    </Route>


                    <PrivateRoute path="/list-transaction" component={ListTransaction} />
                    <PrivateRoute path="/trip" component={Trip} />
                    <PrivateRoute path="/add-trip" component={AddTrip} />
                    
                    {/* if route is not exist, send default route */}
                    <Route>
                        <Redirect to="/not-found" />
                        <NotFound />
                    </Route>
                </Switch>
            <Footer />
        </Router>
        </>
    )
}

export default App
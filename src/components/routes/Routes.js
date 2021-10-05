import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Cookies from 'js-cookie';
import { Layout } from 'antd';
import Login from "../../auth/Login";
import Register from "../../auth/Register";
import {UserProvider} from "../context/UserContext";
import {IncomingOrderProvider} from "../context/IncomingOrderContext"
import LayoutComponent from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import History from "../pages/history/History";
import Profile from "../pages/Profile";
import Message from "../pages/Message";
import IncomingOrder from "../pages/Dashboard/pages/IncomingOrder";
import Order from "../pages/Dashboard/pages/Order";
import WaitingPayment from "../pages/Dashboard/pages/WaitingPayment";
import ConsultationRequest from "../pages/Dashboard/pages/ConsultationRequest";
import IncomingConsultationDetail from "../pages/Dashboard/pages/IncomingConsultationDetail";
import Biodata from "../pages/Profile/Biodata";
import EditProfile from "../pages/Profile/EditProfile";
import ProfileAndBiodata from "../pages/Profile/ProfileAndBiodata";
import {ConsultationDetailProvider} from "../context/ConsultationDetailContext";
import ActiveConsultationDetail from "../pages/Dashboard/pages/ActiveConsultationDetail";

const Routes = () => {
    const LoginRoute = ({ ...props }) => {
        if (Cookies.get('token') !== undefined) {
            return <LayoutComponent content={<Login />} />
        } else {
            return <Route {...props} />
        }
    }

    return (
        <>
            <Router>
                <Layout className="layout">
                    <UserProvider>
                        <IncomingOrderProvider>
                            <ConsultationDetailProvider>

                                <Switch>
                                    <LoginRoute path="/" exact >
                                        <LayoutComponent content={<Dashboard />} />
                                    </LoginRoute>

                                    <LoginRoute path="/login" exact >
                                        <LayoutComponent content={<Login />} />
                                    </LoginRoute>
                                    <Route path="/register" exact >
                                        <LayoutComponent content={<Register />} />
                                    </Route>

                                    {/*Dashboard Table*/}
                                    <LoginRoute path="/incoming-order" exact >
                                        <LayoutComponent content={<IncomingOrder />} />
                                    </LoginRoute>
                                    <LoginRoute path="/order" exact >
                                        <LayoutComponent content={<Order />} />
                                    </LoginRoute>
                                    <LoginRoute path="/waiting-payment" exact >
                                        <LayoutComponent content={<WaitingPayment />} />
                                    </LoginRoute>

                                    <LoginRoute path="/request" exact >
                                        <LayoutComponent content={<ConsultationRequest />} />
                                    </LoginRoute>
                                    <LoginRoute path="/incoming-order/detail/:Id" exact >
                                        <LayoutComponent content={<ConsultationRequest />} />
                                    </LoginRoute>
                                    <LoginRoute path="/incoming-order/detail/accept/:Id" exact >
                                        <LayoutComponent content={<ActiveConsultationDetail />} />
                                        {/*<LayoutComponent content={<IncomingConsultationDetail />} />*/}
                                    </LoginRoute>

                                    {/*Menu*/}
                                    <LoginRoute path="/message" exact >
                                        <LayoutComponent content={<Message />} />
                                    </LoginRoute>
                                    <LoginRoute path="/history" exact >
                                        <LayoutComponent content={<History />} />
                                    </LoginRoute>
                                    <LoginRoute path="/profile" exact >
                                        <LayoutComponent content={<Profile />} />
                                    </LoginRoute>

                                    {/*Profile*/}
                                    <LoginRoute path="/profil-empty" exact>
                                        <LayoutComponent content ={<ProfileAndBiodata/>}/>
                                    </LoginRoute>
                                    <LoginRoute path="/edit-biodata" exact>
                                        <LayoutComponent content ={<Biodata/>}/>
                                    </LoginRoute>
                                    <LoginRoute path="/edit-profil" exact>
                                        <LayoutComponent content ={<EditProfile/>}/>
                                    </LoginRoute>
                                </Switch>

                            </ConsultationDetailProvider>
                        </IncomingOrderProvider>
                    </UserProvider>
                </Layout>
            </Router>
        </>
    )
}

export default Routes
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom"
import Cookies from 'js-cookie';
import {Layout} from 'antd';
import Login from "../../auth/Login";
import Register from "../../auth/Register";
import {UserProvider} from "../context/UserContext";
import {IncomingOrderProvider} from "../context/IncomingOrderContext"
import {ConsultationDetailProvider} from "../context/ConsultationDetailContext";
import {OrderProvider} from "../context/ActiveOrderContext";
import {HistoryProvider} from "../context/HistoryContext";
import {WaitingPaymentProvider} from "../context/WaitingPaymentContext";
import {TodayOrderProvider} from "../context/TodayOrderContext";
import {ProfileProvider} from "../context/ProfileContext";
import {AfterBookingProvider} from "../context/AfterBookingContext";
import LayoutComponent from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Message from "../pages/Message";
import IncomingOrder from "../pages/Dashboard/pages/IncomingOrder";
import ActiveOrder from "../pages/Dashboard/pages/ActiveOrder";
import WaitingPayment from "../pages/Dashboard/pages/WaitingPayment";
import ConsultationRequest from "../pages/Dashboard/pages/ConsultationRequest";
import IncomingConsultationDetail from "../pages/Dashboard/pages/IncomingConsultationDetail";
import EditProfile from "../pages/Profile/EditProfile";
import EditBiodata from "../pages/Profile/EditBiodata";
import Profile from "../pages/Profile/Profile";
import ActiveConsultationDetail from "../pages/Dashboard/pages/ActiveConsultationDetail";
import ConsultationHistoryDetail from "../pages/history/pages/ConsultationHistoryDetail";
import History from "../pages/history/History";

import CompleteSuccess from "../pages/Dashboard/CompleteSuccess";

const Routes = () => {
    const LoginRoute = ({...props}) => {
        if (Cookies.get('token') === undefined) {
            return <LayoutComponent content={<Login/>}/>
        } else {
            return <Route {...props} />
        }
    }

    return (
        <>
            <Router rowKey={"id"}>
                <Layout className="layout">
                    <UserProvider>
                    <IncomingOrderProvider>
                    <ConsultationDetailProvider>
                    <OrderProvider>
                    <HistoryProvider>
                    <WaitingPaymentProvider>
                    <TodayOrderProvider>
                    <ProfileProvider>
                    <AfterBookingProvider>
                        <Switch>
                            <LoginRoute path="/" search="Dashboard" exact>
                                <LayoutComponent content={<Dashboard/>}/>
                            </LoginRoute>

                            <LoginRoute path="/login" exact>
                                <LayoutComponent content={<Login/>}/>
                            </LoginRoute>
                            <Route path="/register" exact>
                                <LayoutComponent content={<Register/>}/>
                            </Route>

                            {/*Dashboard Table*/}
                            <LoginRoute path="/incoming-order" exact>
                                <LayoutComponent content={<IncomingOrder/>}/>
                            </LoginRoute>
                            <LoginRoute path="/order" exact>
                                <LayoutComponent content={<ActiveOrder/>}/>
                            </LoginRoute>
                            <LoginRoute path="/waiting-payment" exact>
                                <LayoutComponent content={<WaitingPayment/>}/>
                            </LoginRoute>

                            <LoginRoute path="/request" exact>
                                <LayoutComponent content={<ConsultationRequest/>}/>
                            </LoginRoute>
                            <LoginRoute path="/incoming-order/detail/:Id" exact>
                                <LayoutComponent content={<ConsultationRequest/>}/>
                            </LoginRoute>
                            <LoginRoute path="/incoming-order/detail/accept/:Id" exact>
                                <LayoutComponent content={<IncomingConsultationDetail/>}/>
                            </LoginRoute>
                            <LoginRoute path="/order/detail/:Id" exact>
                                <LayoutComponent content={<ActiveConsultationDetail/>}/>
                            </LoginRoute>
                            <LoginRoute path="/success" exact>
                                <LayoutComponent content={<CompleteSuccess/>}/>
                            </LoginRoute>

                            {/*Message*/}
                            <LoginRoute path="/message" search="Pesan" exact>
                                <LayoutComponent content={<Message/>}/>
                            </LoginRoute>

                            {/*History*/}
                            <LoginRoute path="/history" exact>
                                <LayoutComponent content={<History/>}/>
                            </LoginRoute>
                            <LoginRoute path="/history/detail/:Id" exact>
                                <LayoutComponent content={<ConsultationHistoryDetail/>}/>
                            </LoginRoute>

                            {/*Profile*/}
                            <LoginRoute path="/profile" exact>
                                <LayoutComponent content={<Profile/>}/>
                            </LoginRoute>
                            <LoginRoute path="/edit-biodata" exact>
                                <LayoutComponent content={<EditBiodata/>}/>
                            </LoginRoute>
                            <LoginRoute path="/edit-profile" exact>
                                <LayoutComponent content={<EditProfile/>}/>
                            </LoginRoute>
                        </Switch>
                    </AfterBookingProvider>
                    </ProfileProvider>
                    </TodayOrderProvider>
                    </WaitingPaymentProvider>
                    </HistoryProvider>
                    </OrderProvider>
                    </ConsultationDetailProvider>
                    </IncomingOrderProvider>
                    </UserProvider>
                </Layout>
            </Router>
        </>
    )
}

export default Routes
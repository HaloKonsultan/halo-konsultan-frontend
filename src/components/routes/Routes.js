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
import {UserProvider} from "../context/ContextUser";
import {IncomingOrderProvider} from "../context/ContextOrderIncoming"
import {ConsultationDetailProvider} from "../context/ContextConsultationDetail";
import {OrderProvider} from "../context/ContextOrderActive";
import {HistoryProvider} from "../context/ContextHistory";
import {WaitingPaymentProvider} from "../context/ContextOrderWaiting";
import {TodayOrderProvider} from "../context/ContextOrderToday";
import {ProfileProvider} from "../context/ContextProfile";
import {AfterBookingProvider} from "../context/ContextAfterBooking";
import LayoutComponent from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Message from "../pages/Message/Message";
import OrderIncoming from "../pages/Dashboard/pages/table/OrderIncoming";
import OrderActive from "../pages/Dashboard/pages/table/OrderActive";
import WaitingPayment from "../pages/Dashboard/pages/table/OrderWaiting";
import ConsultationRequest from "../pages/Dashboard/pages/ConsultationIncoming";
import ConsultationAfterBooking from "../pages/Dashboard/pages/ConsultationAfterBooking";
import EditProfile from "../pages/Profile/EditProfile";
import EditBiodata from "../pages/Profile/EditBiodata";
import Profile from "../pages/Profile/Profile";
import ConsultationActiveDetail from "../pages/Dashboard/pages/ConsultationActiveDetail";
import ConsultationHistoryDetail from "../pages/history/pages/ConsultationHistoryDetail";
import History from "../pages/history/History";

import CompleteSuccess from "../pages/Dashboard/CompleteSuccess";
import {MessageProvider} from "../context/ContextMessage";

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
                    <MessageProvider>
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

                            {/*Dashboard OrderTable*/}
                            <LoginRoute path="/incoming-order" exact>
                                <LayoutComponent content={<OrderIncoming/>}/>
                            </LoginRoute>
                            <LoginRoute path="/order" exact>
                                <LayoutComponent content={<OrderActive/>}/>
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
                                <LayoutComponent content={<ConsultationAfterBooking/>}/>
                            </LoginRoute>
                            <LoginRoute path="/order/detail/:Id" exact>
                                <LayoutComponent content={<ConsultationActiveDetail/>}/>
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
                    </MessageProvider>
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
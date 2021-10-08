import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Cookies from 'js-cookie';
import {Layout} from 'antd';
import Login from "../../auth/Login";
import Register from "../../auth/Register";
import {UserProvider} from "../context/UserContext";
import {IncomingOrderProvider} from "../context/IncomingOrderContext"
import LayoutComponent from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import History from "../pages/history/pages/History";
import Profile from "../pages/Profile";
import Message from "../pages/Message";
import IncomingOrder from "../pages/Dashboard/pages/IncomingOrder";
import ActiveOrder from "../pages/Dashboard/pages/ActiveOrder";
import WaitingPayment from "../pages/Dashboard/pages/WaitingPayment";
import ConsultationRequest from "../pages/Dashboard/pages/ConsultationRequest";
import IncomingConsultationDetail from "../pages/Dashboard/pages/IncomingConsultationDetail";
import EditProfile from "../pages/Profile/EditProfile";
import ProfileAndBiodata from "../pages/Profile/ProfileAndBiodata";
import {ConsultationDetailProvider} from "../context/ConsultationDetailContext";
import ActiveConsultationDetail from "../pages/Dashboard/pages/ActiveConsultationDetail";
<<<<<<< HEAD
import EditBiodata from "../pages/Profile/EditBiodata";
=======
import {OrderProvider} from "../context/OrderContext";
import {HistoryProvider} from "../context/HistoryContext";
import ConsultationHistoryDetail from "../pages/history/pages/ConsultationHistoryDetail";
>>>>>>> daa92456e9002f506db5b7ff6f72b3162287cbb2

const Routes = () => {
    const LoginRoute = ({...props}) => {
        if (Cookies.get('token') !== undefined) {
            return <LayoutComponent content={<Login/>}/>
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
                                <OrderProvider>
                                    <HistoryProvider>
                                        <Switch>
                                            <LoginRoute path="/" exact>
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

                                            {/*Menu*/}
                                            <LoginRoute path="/message" exact>
                                                <LayoutComponent content={<Message/>}/>
                                            </LoginRoute>

                                            {/*History*/}
                                            <LoginRoute path="/history" exact>
                                                <LayoutComponent content={<History/>}/>
                                            </LoginRoute>
                                            <LoginRoute path="/history/detail/:Id" exact>
                                                <LayoutComponent content={<ConsultationHistoryDetail/>}/>
                                            </LoginRoute>

<<<<<<< HEAD
                                    {/*Profile*/}
                                    <LoginRoute path="/profil-empty" exact>
                                        <LayoutComponent content ={<ProfileAndBiodata/>}/>
                                    </LoginRoute>
                                    <LoginRoute path="/edit-biodata" exact>
                                        <LayoutComponent content ={<EditBiodata/>}/>
                                    </LoginRoute>
                                    <LoginRoute path="/edit-profil" exact>
                                        <LayoutComponent content ={<EditProfile/>}/>
                                    </LoginRoute>
                                </Switch>
=======
                                            <LoginRoute path="/profile" exact>
                                                <LayoutComponent content={<Profile/>}/>
                                            </LoginRoute>
>>>>>>> daa92456e9002f506db5b7ff6f72b3162287cbb2

                                            {/*Profile*/}
                                            <LoginRoute path="/profil-empty" exact>
                                                <LayoutComponent content={<ProfileAndBiodata/>}/>
                                            </LoginRoute>
                                            <LoginRoute path="/edit-biodata" exact>
                                                <LayoutComponent content={<Biodata/>}/>
                                            </LoginRoute>
                                            <LoginRoute path="/edit-profil" exact>
                                                <LayoutComponent content={<EditProfile/>}/>
                                            </LoginRoute>
                                        </Switch>
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
import App from '../components/App';
import React from 'react';
import {Route, IndexRoute, Link } from 'react-router';
import Register from '../pages/Register.js';
import ForgetPwd from '../pages/ForgetPwd.js';
import SignIn from '../pages/SignIn.js';
import ChangePassword from '../pages/ChangePassword.js';
import MenuTab from '../components/MenuTabComponent.js';
import OTPLogin from '../pages/OTPLogin.js';
import Home from '../pages/Home.js';
import Dashboard from '../pages/Dashboard.js';
import Profile from '../pages/Profile.js';
import VerifyOTP from '../pages/VerifyOTP.js';
import Categories from '../pages/Categories.js';
import Orders from '../pages/Orders.js';
import Users from '../pages/Users.js';
import Services from '../pages/Services.js';
import Requests from '../pages/Requests.js';
import DataInsertTypeTable from '../components/DataInsertTypeTable.js';
  

export default (
	<Route path="/" component={App}>
	   <IndexRoute component={ SignIn } />
		<Route path="register" component={ Register }/>
		<Route path="home" component={ Home }>
			<IndexRoute component={ Dashboard } />
			<Route path="changepasswd" component={ ChangePassword } />
			<Route path="profile" component={ Profile} />
			<Route path="orders" component={ Orders } />
			<Route path="requests" component={ Requests} />
			<Route path="categories" component={ Categories } />
			<Route path="users" component={ Users } />
			<Route path="services" component={ Services } />
		</Route>		 
		<Route path="forgetpwd" component={ ForgetPwd }/>
		<Route path="verifyotp" component={ VerifyOTP  }/>
		<Route path="otppwdset" component={ OTPLogin } />
		<Route path="table" component={ DataInsertTypeTable } />
	</Route>
);

/**
 * ruta para manejar solamente si un usuario esta logueado o no.
 * 
 * en caso de ya estar logueado no hace falta la comprobación del token
 */
// import React, {useState, useEffect, useCallback} from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { Route, Redirect } from "react-router-dom";
// import { existToken, isValidToken, getToken } from "../Helpers/tokenFunctions";
// import { alertWarn } from "../Helpers/notifications";
// import { SetCurrentUserInfo } from '../Redux/Actions/UserActions';
// import Resquests from "../Helpers/Resquests";

// let count = 0;

// export default function SessionPrivateRoute(props) {
// 	const [isLoading, setLoading] = useState(true);
//   const [validToken, setValidToken] = useState(false);
//   // redux
//   const { isLoggedUser } = useSelector( state => state.UserInformation );
//   const dispatch = useDispatch();
  
//   // check valid token
// 	const checkToken =  async () => {
// 		const isValid = await isValidToken(getToken());

//     console.log("Is a valid token?: ", isValid);
//     setValidToken(existToken() && isValid);
//     return;
//   };

//   // save info in redux again if store is void, for example user reload the page
//   const saveUserInfo = useCallback(async () => {
//     if(validToken){
//       const userData = await Resquests.getInfoUserLogged(getToken());
//       if(userData){
//         dispatch(SetCurrentUserInfo(userData));
//       }
//     }
//   }, [dispatch, validToken]); 

//   // check token and then save userdata if is neccessary
//   const checkAndSave = useCallback(async () => {
//     await checkToken();
//     await saveUserInfo();
//     setLoading(false);
//   }, [saveUserInfo]);
  
  
//   useEffect(() => {
//     if(!isLoggedUser) {
//       checkAndSave();
//     }
//   }, [isLoggedUser, checkAndSave])

//   // ===== render =====
//   count++;
//   if(isLoggedUser || validToken){
//     return <Route {...props} />;
//   }
// 	if (isLoading) {
// 		return <h2>Checking token...</h2>
// 	}
  
//   console.log("fucking count ", count);
//   if(count === 4) alertWarn("To enter here you must have an account.");
//   return <Redirect to="/login" />;
  
// }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import { existToken, isValidToken, getToken } from "../Helpers/tokenFunctions";
import { alertWarn } from "../Helpers/notifications";
import { SetCurrentUserInfo } from '../Redux/Actions/UserActions';
import Resquests from "../Helpers/Resquests";

class SessionPrivateRoute extends Component{
	state = {
		isLoading: true,
		validToken: false,
		isLoggedUser: this.props.isLoggedUser,
		allChecked: false
	}


	checkToken =  async () => {
		const isValid = await isValidToken(getToken());
		console.log("Is a valid token?: ", isValid);
		this.setState({ validToken: existToken() && isValid });
	};

	// save info in redux again if store is void, for example user reload the page
	saveUserInfo = async () => {
		if(this.state.validToken){
			const userData = await Resquests.getInfoUserLogged(getToken());
			if(userData){
			this.props.SetCurrentUserInfo(userData);
			}
		}
	} 

	// check token and then save userdata if is neccessary
	checkAndSave = async () => {
		await this.checkToken();
		await this.saveUserInfo();
		this.setState({ isLoading: false, allChecked: true });
	}

	componentDidMount(){
		if(!this.state.isLoggedUser) this.checkAndSave();
	}

	render(){
		const { isLoggedUser, isLoading, validToken, allChecked } = this.state;
		if(isLoggedUser || validToken){
    		return <Route {...this.props} />;
		  }
		  
		if (isLoading) {
			return <h2>Checking token...</h2>
		}
  
		if(allChecked) alertWarn("To enter here you must have an account.");
		return <Redirect to="/login" />;
	}

}

const mapStateToProps = state => state.UserInformation;
const mapDispatchToProps = {
  SetCurrentUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionPrivateRoute);


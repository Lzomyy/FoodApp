/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom"

export default function ProtectedRoute( { children, loginData, saveLoginData } ) {


    if (loginData || localStorage.getItem('tkn')) {
        return <>
            {children}
        </>
    } else {
        return <>
            <Navigate to="/login"/>
        </>
    }



}

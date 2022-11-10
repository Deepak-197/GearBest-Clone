import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Components/NotFound";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";




export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            
        </Routes>
    )
}
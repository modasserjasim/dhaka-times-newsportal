import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/Others/TermsAndConditions";
import EditProfile from "../Pages/Others/EditProfile/EditProfile";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dhaka-times-server.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dhaka-times-server.vercel.app/category/${params.id}`)

            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dhaka-times-server.vercel.app/news/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'edit-profile',
                element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
            },
            {
                path: 'terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])
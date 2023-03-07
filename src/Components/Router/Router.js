import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllCountries from "../AllCountries/AllCountries";
import CountryDetails from "../CountryDetails/CountryDetails";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home> </Home>
      },
      {
        path: '/home',
        element: <Home> </Home>
      },
      {
        path:'/all-countries',
        loader: async()=>{
          return fetch('https://restcountries.com/v3.1/all')
        },
        element:<AllCountries></AllCountries>
      },
      {
        path:'/all-country/:name',
        loader: async({params})=>{
          return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
        },
        element:<CountryDetails></CountryDetails>
      }
    ],
  },
  {
    path:'*',
    element:<div className="text-center m-36 text-6xl" >Sorry this page is not available!!!</div>
  }
]);
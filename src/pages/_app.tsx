import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useReducer, useState } from "react";
import Search from "./MainPage/Search/search";

type QueryParams = {
  queryFrom: string;
  setQueryFrom: React.Dispatch<React.SetStateAction<string>>;
  queryTo: string;
  setQueryTo: React.Dispatch<React.SetStateAction<string>>;
  date: any;
  setDate: React.Dispatch<React.SetStateAction<any>>;
  time: any;
  setTime: React.Dispatch<React.SetStateAction<any>>;
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
  latLangFrom: any;
  setlatLangFrom: React.Dispatch<React.SetStateAction<any>>;
  latLangTo: any;
  setlatLangTo: React.Dispatch<React.SetStateAction<any>>;
  calculateDistance: any;
  setCalculateDistance: React.Dispatch<React.SetStateAction<any>>;
  isFormCompleted: any;
  setIsFromCompleted: React.Dispatch<React.SetStateAction<any>>;
  SearchButtonWasClicked: any;
  setSearchButtonWasClicked: React.Dispatch<React.SetStateAction<any>>;
  mapLongitude: any;
  setMapLongitude: React.Dispatch<React.SetStateAction<any>>;
  mapLatitude: any;
  setMapLatitude: React.Dispatch<React.SetStateAction<any>>;
  mapUpdated: any;
  setMapUpdated: React.Dispatch<React.SetStateAction<any>>;

  // Person details
  firstName: any;
  setFirstName: React.Dispatch<React.SetStateAction<any>>;
  lastName: any;
  setLastName: React.Dispatch<React.SetStateAction<any>>;
  email: any;
  setEmail: React.Dispatch<React.SetStateAction<any>>;
  phone: any;
  setPhone: React.Dispatch<React.SetStateAction<any>>;

  //final price
  price: any;
  setPrice: React.Dispatch<React.SetStateAction<any>>;
};

export const AppContext = createContext({} as QueryParams);

export default function App({ Component, pageProps }: AppProps) {
  const [queryFrom, setQueryFrom] = useState("");
  const [queryTo, setQueryTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(2);
  const [latLangFrom, setlatLangFrom] = useState(null);
  const [latLangTo, setlatLangTo] = useState(null);
  const [calculateDistance, setCalculateDistance] = useState(null);
  const [isFormCompleted, setIsFromCompleted] = useState(false);
  const [SearchButtonWasClicked, setSearchButtonWasClicked] = useState(false);
  const [mapLongitude, setMapLongitude]: any = useState(19.945);
  const [mapLatitude, setMapLatitude]: any = useState(40.064);
  const [mapUpdated, setMapUpdated] = useState(false);

  //data from clients
  const [personTitle, setPersonTitle] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  //price
  const [price, setPrice] = useState();

  return (
    <AppContext.Provider
      value={{
        queryFrom,
        setQueryFrom,
        queryTo,
        setQueryTo,
        date,
        setDate,
        time,
        setTime,
        people,
        setPeople,
        latLangFrom,
        setlatLangFrom,
        latLangTo,
        setlatLangTo,
        calculateDistance,
        setCalculateDistance,
        isFormCompleted,
        setIsFromCompleted,
        SearchButtonWasClicked,
        setSearchButtonWasClicked,
        mapLongitude,
        setMapLongitude,
        mapLatitude,
        setMapLatitude,
        mapUpdated,
        setMapUpdated,
        //client's data
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phone,
        setPhone,
        email,
        setEmail,
        //price
        price,
        setPrice,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

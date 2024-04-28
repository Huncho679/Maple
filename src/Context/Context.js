import { createContext, useContext, useState } from "react";



const appContext = createContext();

function Context({ children }) {
     
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emergencyOne, setEmergencyOne] = useState("")
    const [emergencyTwo, setEmergencyTwo] = useState("")
    const [onAbout, setOnAbout] = useState(false);
    const [auth, setAuth] = useState(false);
    const [loggedInEmail, setLoggedInEmail] = useState("")
    const [color, setColor] = useState(null);
    const [displayDanger, setDisplayDanger] = useState(false);
    const [formData, setFormData] = useState({});

    const phoneNumberFormatter = (text) => {
        const regex = /(\d{0,3})(\d{0,3})(\d{0,4})/;
        const maskPhone = text.replace(/\D/g, "").match(regex);
    
        return !maskPhone[2]
          ? maskPhone[1]
          : "(" +
              maskPhone[1] +
              ") " +
              maskPhone[2] +
              (maskPhone[3] ? " " + maskPhone[3] : "");
    };

    function handleDisplayDanger(bool) {
        setDisplayDanger(bool)
    }

    function handleColor(input) {
        setColor(input)
    }

    function handleLoggedInEmail(input) {
        setLoggedInEmail(input);
    }

    function handleAuth(bool) {
        setAuth(bool);
    }

    function handleEmail(input) {
        console.log(input);
        setEmail(input);
    }

    function handlePassword(input) {
        setPassword(input);
    }

    function handleName(input) {
        setName(input);
    }

    function handlePhoneNumber(input) {
        const formatted = phoneNumberFormatter(input)
        console.log(formatted);
        setPhoneNumber(input);
    }

    function handleEmergencyOne(input) {
        setEmergencyOne(input);
    }

    function handleEmergencyTwo(input) {
        setEmergencyTwo(input);
    }

    function handleSetOnAbout() {
        setOnAbout(!onAbout);
    }


    return <appContext.Provider value={{
        email,
        handleEmail,
        password,
        handlePassword,
        name,
        handleName,
        phoneNumber,
        handlePhoneNumber,
        emergencyOne,
        handleEmergencyOne,
        emergencyTwo,
        handleEmergencyTwo,
        onAbout,
        handleSetOnAbout,
        auth,
        handleAuth,
        loggedInEmail,
        handleLoggedInEmail,
        color, 
        handleColor,
        displayDanger,
        handleDisplayDanger,
        formData,
        setFormData,
    }}>
        {children}
    </appContext.Provider>
}

function useApp() {
    const context = useContext(appContext);
    if (context !== undefined) return context;
}

export { Context, useApp }

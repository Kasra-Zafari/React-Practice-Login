import { useRef } from "react";
import classes from "./index.module.css"


const PhoneNumber = () => {
    const inputRef = useRef(null);

    const handlePhoneNumberSubmit = (event)=>{
        event.preventDefault()
        console.log(inputRef.current.value);
    }

    return (
        <>
            <div className={classes.phoneNumber}>
                <h1>LOGIN</h1>
                <p>Click on the LOGO to return to the home page</p>
                <form className={classes.form}>
                    <h3>Please Enter Phone Number</h3>
                    <input type="text" placeholder="phone number" ref={inputRef}/>
                    <button type="submit" onClick={handlePhoneNumberSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}


export default PhoneNumber;
import { useRef } from "react";
import classes from "./index.module.css"
import { useState } from "react";


const PhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [hasError, setHasError] = useState(false);

    const inputPattern = /^09[0-9]{9}$/;

    const handlePhoneNumberSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
    };


    const handlePhoneNumberChange = (event) => {
        const inputValue = event.target.value;
        setPhoneNumber(inputValue);

        if (inputPattern.test(inputValue)) {
            setHasError(false);
        }

        else {
            setHasError(true);

        }

    };

    return (
        <>
            <div className={classes.phoneNumber}>
                <h1>LOGIN</h1>
                <p>Click on the LOGO to return to the home page</p>
                <form className={classes.form}>
                    <h3>Please Enter Phone Number</h3>

                    <input
                        type="text"
                        placeholder="phone number"
                        onChange={handlePhoneNumberChange}
                        value={phoneNumber}
                        className={hasError ? classes.error : ""}
                    />

                    {hasError && <p>Please enter the correct mobile number</p>}

                    <button
                        type="submit"
                        onClick={handlePhoneNumberSubmit}
                        disabled={hasError}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};


export default PhoneNumber;
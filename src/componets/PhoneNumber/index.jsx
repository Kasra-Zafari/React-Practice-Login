import { useRef } from "react";
import classes from "./index.module.css"
import { useState } from "react";


const PhoneNumber = (props) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [hasError, setHasError] = useState(false);

    const inputPattern = /^09[0-9]{9}$/;

    const handlePhoneNumberSubmit = (event) => {
        event.preventDefault();
        console.log("ok");
        props.setOtp(true);
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

                    {/* {hasError && <p>Please enter the correct phone number</p>} */}
                    {/* {phoneNumber==="" ? <p>The phone number cannot be empty</p>:""} */}

                    {phoneNumber === "" ? (
                        <p style={{ textAlign: "center" }}>
                            The phone number cannot be empty
                            <br />
                            please enter the phone number to activate the submit button
                        </p>
                    ) : (
                        hasError && <p>Please enter the correct phone number</p>
                    )}

                    <button
                        type="submit"
                        onClick={handlePhoneNumberSubmit}
                        disabled={hasError || phoneNumber === ""}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};


export default PhoneNumber;
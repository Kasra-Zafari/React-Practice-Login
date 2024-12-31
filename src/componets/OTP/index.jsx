import classes from "./index.module.css"
import { useRef, useState } from "react";

const Otp = (props) => {

    const inputRef = useRef(null);
    const [otpInput, setOtpInput] = useState("")
    const [notValid, setNotValid] = useState(false);
    const [time, setTime] = useState(15)

    const handleInputChange = (event) => {
        setOtpInput(event.target.value);
    }

    const handleEdit = (event) => {
        event.preventDefault()
        props.setLogin(true);
    }

    const handleOtpSubmit = (event) => {
        event.preventDefault();
        const check = Number(inputRef.current.value) === props.otpCode;
        if (check) {
            // console.log("ok");
            props.setHome(false);
            props.setUserName(props.phoneNumber)

        }
        else {
            // console.log("not ok");
            setNotValid(true);

        }

    }


    return (
        <>
            <div className={classes.otp}>
                <h1>OTP</h1>
                <p>Click on the LOGO to return to the home page</p>
                <p>Click on the LOGIN to return to the login page</p>

                <form className={classes.form}>
                    <h3>Please Enter OTP</h3>
                    <p>Enter the OTP code sent to the phone number {props.phoneNumber} </p>
                    <button onClick={handleEdit}>EDIT PHONE NUMBER</button>
                    <input
                        type="text"
                        className={classes.input}
                        ref={inputRef}
                        onChange={handleInputChange}
                        value={otpInput} />

                    {notValid ? <p className={classes.error}>The code sent is not valid</p>: ""}

                    <p>Code validity period: {time} seconds</p>

                    <button
                        type="submit"
                        className={classes.button}
                        onClick={handleOtpSubmit}
                        disabled={otpInput === ""}>
                        CONFIRM</button>
                </form>
            </div>
        </>
    )
}

export default Otp;
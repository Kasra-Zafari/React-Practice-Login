import classes from "./index.module.css"
import { useRef, useState } from "react";

const Otp = (props) => {

    const inputRef = useRef(null);
    const [otpInput, setOtpInput] = useState("")
    const [notValid, setNotValid] = useState(false);
    const [timer, setTimer] = useState(10);
    const timerRef = useRef(null);
    const [showResend, setShowResend] = useState(false)

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


    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                    setShowResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    if (timer === 10) {
        startTimer()
    }

    // if(timer===1){
    //     clearInterval(timerRef)
    // }



    const handleResend = (event) => {
        event.preventDefault()
        startTimer()
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

                    {notValid ? <p className={classes.error}>The code sent is not valid</p> : ""}

                    <p>Code validity period: {timer} seconds</p>

                    <button
                        type="submit"
                        className={classes.button}
                        onClick={handleOtpSubmit}
                        disabled={otpInput === "" || timer === 0}>
                        CONFIRM</button>

                    {showResend && <button onClick={handleResend}>Resend OTP</button>}
                </form>
            </div>
        </>
    )
}

export default Otp;
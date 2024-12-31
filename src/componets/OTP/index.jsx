import classes from "./index.module.css"
import { useRef } from "react";

const Otp = (props)=>{

    const inputRef = useRef(null);

    const handleOtpSubmit = (event)=>{
        event.preventDefault();
        const check = Number(inputRef.current.value)===props.otpCode;
        if(check){
            console.log("ok");
            
        }
        else{
            console.log("not ok");
            
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
        <input type="text" className={classes.input} ref={inputRef}/>
        <button type="submit" className={classes.button} onClick={handleOtpSubmit}>SUBMIT</button>
        </form>
        </div>
        </>
    )
}

export default Otp;
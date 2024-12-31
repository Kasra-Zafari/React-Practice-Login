import classes from "./index.module.css"

const OTP = ()=>{
    return (
        <>
        <div className={classes.otp}>
        <h1>OTP</h1>
        <p>Click on the LOGO to return to the home page</p>
        <p>Click on the LOGIN to return to the login page</p>

        <form className={classes.form}>
        <h3>Please Enter OTP</h3>
        <input type="text" className={classes.input}/>
        <button type="submit" className={classes.button}>SUBMIT</button>
        </form>
        </div>
        </>
    )
}

export default OTP;
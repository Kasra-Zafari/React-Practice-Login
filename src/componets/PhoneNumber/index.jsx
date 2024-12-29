import classes from "./index.module.css"


const PhoneNumber = () => {
    return (
        <>
            <div className={classes.phoneNumber}>
                <h1>LOGIN</h1>
                <form className={classes.form}>
                    <h3>Please Enter Phone Number</h3>
                    <input type="text" placeholder="phone number" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}


export default PhoneNumber;
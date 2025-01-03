import classes from "./index.module.css";

const MENU_ITEM = [
    { id: 1, title: "Product" },
    { id: 2, title: "Men" },
    { id: 3, title: "Women" },
    { id: 4, title: "About Us" }
];

const Header = (props) => {
    
    const handleLogin = () => {
        props.setLogin(true);
    };

    const handleLogo = () => {
        props.setHome(false);
    };

    return (
        <>
            <header className={classes.header}>
                <div>
                    <h1
                        className={classes.logo}
                        onClick={handleLogo}>
                        LOGO
                    </h1>
                </div>
                <nav>
                    <ul className={classes.nav}>
                        {MENU_ITEM.map((item) => {
                            return <li key={item.id}>{item.title}</li>;
                        })}
                    </ul>
                </nav>
                <div>
                    <button
                        className={classes.loginButton}
                        onClick={handleLogin}>
                        {props.userName || "Login"}
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;

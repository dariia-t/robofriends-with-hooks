import Header from "./Header"
import Login from "./Login"
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    },
  });

export default function LoginPage(){
    const classes = useStyles();
    return(
        <div className={classes.container}>
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
            <Login/>
        </div>
    )
}
import Header from "./Header"
import Signup from "./Signup"
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

export default function SignupPage(){
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </div>
    )
}
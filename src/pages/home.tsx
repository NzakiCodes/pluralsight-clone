import Header from "../components/header";
import Navbar from "../components/navbar";
import { AppWrapper } from "../components/wrappers";

const HomePage = ()=>{
    return(
        <AppWrapper>
            <Navbar/>
            <Header/>
        </AppWrapper>
    )
};

export default HomePage;
import Header from "../components/header";
import Navbar from "../components/navbar";
import { AppWrapper, ContainerWrapper, Spacer } from "../components/wrappers";

const HomePage = () => {
    return (
        <AppWrapper>
            <Navbar />
            <Spacer height="90px"/>
            <Header />
            <ContainerWrapper>
                Hello
            </ContainerWrapper>
        </AppWrapper>
    )
};

export default HomePage;
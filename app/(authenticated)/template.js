import Header from "../components/header";
import Footer from "../components/footer";

const Template = ({children}) => {
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Template;
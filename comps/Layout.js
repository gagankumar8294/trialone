import Footer from "./Footer"
// import Navbar from "./navbar/Navbar"
import Navbar from "./nav/Navbar"

const Layout = ({ children }) => {
    return (
        <div className="content">
            {/* <Navbar /> */}
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;
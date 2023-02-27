import Footer from "@/components/Footer";
import Header from "@/components/Header";

const UserLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default UserLayout;
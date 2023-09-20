import Navbar from "../navbar/navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />

            <section className="w-[80%] mx-auto">
                {children}
            </section>
        </>
    )
}

export default Layout
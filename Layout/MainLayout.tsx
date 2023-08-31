import Footer from "@/components/MainLayout/Footer";
import Header from "@/components/MainLayout/Header";
import { Fragment } from "react"


interface IProps {
    children: JSX.Element
}


const MainLayout = ({ children }: IProps) => {
    return (
        <Fragment>
            <Header />
            <main className="pb-4">
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default MainLayout;

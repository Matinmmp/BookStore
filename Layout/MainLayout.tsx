import Footer from "@/components/MainLayout/Footer";
import Header from "@/components/MainLayout/Header";
import MobileSidbar from "@/components/MainLayout/MobileSidbar";
import { Fragment } from "react"


interface IProps {
    children: JSX.Element
}


const MainLayout = ({ children }: IProps) => {
    return (
        <div className="relative " >
            <Header />
            <main style={{paddingBlock:'0 5rem'}}>
                {children}
            </main>
            <Footer  />
            <MobileSidbar/>
        </div>
    )
}

export default MainLayout;

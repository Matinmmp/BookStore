import Header from "@/components/MainLayout/Header";
import { Fragment } from "react"


interface IProps {
    children: JSX.Element
}


const MainLayout = ({ children }: IProps) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default MainLayout;

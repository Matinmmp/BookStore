import React, { useEffect, useRef, useState ,RefObject} from 'react'

interface IProps {
    nextPage:()=>void,
    prevPage:()=> void
    z_index?: number,
    pushToPaperList: (paper: RefObject<HTMLDivElement>) => void
}


const FlipBookPage = ({ pushToPaperList ,z_index,nextPage,prevPage}: IProps) => {
    const paper = useRef<HTMLDivElement>(null); 
    useEffect(() => {
        if (paper.current){
            pushToPaperList(paper);
            paper.current.style.zIndex = `${z_index}`
        }
    }, []);
    const handle=()=>{
        console.log("next");
        nextPage();
    }

    return (
        <div className="paper" ref={paper} >
            <div className="front rounded-l-3xl" onClick={handle}>
                <div id="f1" className="front-content">
                    <h1>Front  {z_index}</h1>
                </div>
            </div>
            <div className="back rounded-l-3xl" onClick={prevPage}>
                <div id="b1" className="back-content">
                    <h1>Back {z_index}</h1>
                </div>
            </div>
        </div>
    )
}

export default FlipBookPage

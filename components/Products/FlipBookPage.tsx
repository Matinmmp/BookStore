import React, { useEffect, useRef, useState ,RefObject} from 'react'

interface IProps {
    currentLocation?: number,
    paperPage?: number,
    currentAction?: string,
    index?: number,
    z_index?: number,
    pushToPaperList: (paper: RefObject<HTMLDivElement>) => void
}


const FlipBookPage = ({ pushToPaperList ,z_index}: IProps) => {
    const paper = useRef<HTMLDivElement>(null); 
    useEffect(() => {
        if (paper.current){
            pushToPaperList(paper);
            paper.current.style.zIndex = `${z_index}`
        }
            
    }, []);

    return (
        <div className="paper" ref={paper} >
            <div className="front rounded-l-3xl">
                <div id="f1" className="front-content">
                    <h1>Front  {z_index}</h1>
                </div>
            </div>
            <div className="back rounded-l-3xl">
                <div id="b1" className="back-content">
                    <h1>Back {z_index}</h1>
                </div>
            </div>
        </div>
    )
}

export default FlipBookPage

import Image from 'next/image';
import React, { useEffect, useRef, useState, RefObject } from 'react'

interface IProps {
    nextPage: () => void,
    prevPage: () => void
    pushToPaperList: (paper: RefObject<HTMLDivElement>) => void,
    z_index?: number,
    data: String[] | String
}


const FlipBookPage = ({ pushToPaperList, z_index, data, nextPage, prevPage }: IProps) => {
    const paper = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (paper.current) {
            pushToPaperList(paper);
            paper.current.style.zIndex = `${z_index}`
        }
    }, []);

    return (
        <div className="paper" ref={paper} >
            <div className="front rounded-l-3xl overflow-hidden  shadow-sm shadow-black" >
                <div id="f1" className="front-content" >
                    <Image alt={'image'} width={500} height={800} onClick={nextPage}
                        className='w-[25rem] h-full '
                        src={`http://localhost:8000/images/products/images/${data[0]}`} />
                </div>
            </div>
            <div className="back rounded-l-3xl overflow-hidden  shadow-md shadow-black">
                <div id="b1" className="back-content"  >
                <Image alt={'image'} width={500} height={800} onClick={prevPage}
                        className='w-[25rem] h-full '
                        src={`http://localhost:8000/images/products/images/${data[1]}`} />
                </div>
            </div>
        </div>
    )
}

export default FlipBookPage


import { RefObject, useEffect, useRef, useState } from 'react'
import FlipBookPage from './FlipBookPage';


interface IProps {
    images: String[]
}

const FlipBook = ({ images }: IProps) => {

    const book = useRef<HTMLDivElement>(null);
    const [paperList, setPaperList] = useState<RefObject<HTMLDivElement>[]>([]);
    const [currentLocation, setCurrentLocation] = useState(0);
    let numOfPapers = images.length;
    let maxLocation = numOfPapers + 1;

    const pushToPaperList = (paper: RefObject<HTMLDivElement>) => {
        setPaperList((paperList) => [...paperList, paper]);
    }

    function openBook() {
        if (book.current)
            book.current.style.transform = "translateX(-100%)";
    }

    function closeBook(isAtBeginning: boolean) {
        if (book.current)
            if (isAtBeginning) {
                book.current.style.transform = "translateX(0%)";

            } else {
                book.current.style.transform = "translateX(-100%)";
            }
    }
    const a = Array.from({ length: numOfPapers }, (v, k) => k + 1).reverse()

    const handleNextPage = () => {
        if (currentLocation < numOfPapers) {
            for (let i = 0; i < numOfPapers; i++) {
                if (currentLocation === 0 ) {
                    paperList[0].current?.classList.add('flipped')
                    paperList[0].current.style.zIndex = `${1}`;
                    openBook();
                    break;
                }
                if (currentLocation === i) {
                    paperList[i].current?.classList.add('flipped')
                    paperList[i].current.style.zIndex = `${i + 1}`;
                    break;
                }
                if (currentLocation === numOfPapers) {
                    closeBook(false);
                }
            }       
            setCurrentLocation((currentLocation) => currentLocation + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentLocation > 0) {
            for (let i = 1; i < numOfPapers; i++) {
                if (currentLocation === 1) {            
                    closeBook(true);
                    paperList[0].current?.classList.remove('flipped')
                    paperList[0].current.style.zIndex = `${maxLocation-1}`;
                    break;
                }
                if (currentLocation === numOfPapers) {           
                    openBook();
                    paperList[paperList.length - 1].current?.classList.remove('flipped')
                    paperList[paperList.length - 1].current.style.zIndex = `${1}`;
                    break;
                }
                if (currentLocation === i) {
                    console.log(i);               
                    paperList[i-1].current?.classList.remove('flipped')
                    paperList[i-1].current.style.zIndex = `${maxLocation-i}`;
                    break;
                }
            }
            setCurrentLocation((currentLocation) => currentLocation - 1);
        }
    }

    return (
        <div className="bg-red-400 w-auto z-50">
            <button onClick={handlePrevPage} >
                prev
            </button>

            <div className="book" ref={book}>
                {/* 
                <div id='p1' className="paper" ref={paper1}>
                    <div className="front rounded-l-3xl">
                        <div id="f1" className="front-content">
                            <h1>Front 1</h1>
                        </div>
                    </div>
                    <div className="back rounded-l-3xl">
                        <div id="b1" className="back-content">
                            <h1>Back 1</h1>
                        </div>
                    </div>
                </div>

                <div id='p2' className="paper" ref={paper2}>
                    <div className="front rounded-l-3xl">
                        <div id="f2" className="front-content">
                            <h1>Front 2</h1>
                        </div>
                    </div>
                    <div className="back rounded-l-3xl">
                        <div id="b2" className="back-content">
                            <h1>Back 2</h1>
                        </div>
                    </div>
                </div>

                <div id='p3' className="paper" ref={paper3}>
                    <div className="front rounded-l-3xl">
                        <div id="f3" className="front-content">
                            <h1>Front 3</h1>
                        </div>
                    </div>
                    <div className="back rounded-l-3xl">
                        <div id="b3" className="back-content">
                            <h1>Back 3</h1>
                        </div>
                    </div>
                </div> */}

                {/* { [1,2,3,4].map((index2,index)=>
                <FlipBookPage key={index} currentLocation={currentLocation}
                paperPage={index+1} z_index={numOfPapers-index} currentAction={currentAction} /> )} */}

                {images.map((image, index) => <FlipBookPage key={index}
                    pushToPaperList={pushToPaperList} z_index={numOfPapers - index} />)}

            </div>

            <button onClick={handleNextPage}>
                next
            </button>
        </div>
    )
}

export default FlipBook
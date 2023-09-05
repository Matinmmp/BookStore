import { RefObject, useEffect, useRef, useState } from 'react'


const FlipBook = () => {
    const paper1 = useRef<HTMLDivElement>(null);
    const paper2 = useRef<HTMLDivElement>(null);
    const paper3 = useRef<HTMLDivElement>(null);
    const book = useRef<HTMLDivElement>(null);
    const [currentLocation,setCurrentLocation] = useState(1);
    let numOfPapers = 3;
    let maxLocation = numOfPapers + 1;


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

    const handleNextPage = () => {
        if (currentLocation < maxLocation) {
            switch (currentLocation) {
                case 1:
                    openBook();
                    if (paper1.current) {
                        paper1.current.classList.add('flipped')
                        paper1.current.style.zIndex = "1";
                    }
                    break;
                case 2:
                    if (paper2.current) {
                        paper2.current.classList.add('flipped')
                        paper2.current.style.zIndex = "2";
                    }
                    break;
                case 3:
                    if (paper3.current) {
                        paper3.current.classList.add('flipped')
                        paper3.current.style.zIndex = "3";
                    }
                    closeBook(false);
                    break;
                default:
                    throw new Error("unkown state");
            }
            
            setCurrentLocation((currentLocation)=> currentLocation+1);
        }
    }

    const handlePrevPage = () => {
        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true);
                    if (paper1.current) {
                        paper1.current.classList.remove('flipped')
                        paper1.current.style.zIndex = "3";
                    }
                    break;
                case 3:
                    if (paper2.current) {
                        paper2.current.classList.remove('flipped')
                        paper2.current.style.zIndex = "2";
                    }
                    break;
                case 4:
                    openBook();
                    if (paper3.current) {
                        paper3.current.classList.remove('flipped')
                        paper3.current.style.zIndex = "1";
                    }
                    break;
                default:
                    throw new Error("unkown state");
            }
            setCurrentLocation((currentLocation)=> currentLocation-1);
        }
    }


    

    return (
        <div className="bg-red-400 w-auto">
            <button id="prev-btn" onClick={handlePrevPage}>
                prev
            </button>

            <div id="book" className="book" ref={book}>

                <div id="p1" className="paper" ref={paper1}>
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

                <div id="p2" className="paper" ref={paper2}>
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

                <div id="p3" className="paper" ref={paper3}>
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
                </div>
            </div>

            <button id="next-btn" onClick={handleNextPage}>
                next
            </button>
        </div>
    )
}

export default FlipBook
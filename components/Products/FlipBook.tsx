
import { RefObject, useEffect, useRef, useState } from 'react'
import FlipBookPage from './FlipBookPage';


interface IProps {
    images: String[]
}

const FlipBook = ({ images }: IProps) => {

    const book = useRef<HTMLDivElement>(null);
    const [paperList, setPaperList] = useState<RefObject<HTMLDivElement>[]>([]);
    const [currentLocation, setCurrentLocation] = useState(0);
    const numOfPapers = Math.ceil(images.length / 2);
    const max = numOfPapers + 1;
    const array = Array.from({ length: numOfPapers }, (v, k) => k);


    const pushToPaperList = (paper: RefObject<HTMLDivElement>) => {
        setPaperList((paperList) => [...paperList, paper]);
    }

    const openBook = () => {
        if (book.current)
            book.current.style.transform = "translateX(-100%)";
    }

    const closeBook = (isAtBeginning: boolean) => {
        if (book.current)
            if (isAtBeginning) book.current.style.transform = "translateX(0%)";
            else book.current.style.transform = "translateX(-100%)";
    }

    const handleNextPage = () => {
        if (currentLocation < numOfPapers) {

            for (let i = 0; i < numOfPapers; i++) {
                if (currentLocation === 0) {
                    paperList[0].current?.classList.add('flipped');
                    setTimeout(() => {
                        if (paperList[0].current)
                            paperList[0].current.style.zIndex = `${1}`;
                    }, 500)
                    openBook();
                    break;
                }

                if (currentLocation === numOfPapers - 1) {
                    if (paperList.length) {
                        const currentPaper = paperList[currentLocation].current;
                        if (currentPaper) {
                            currentPaper.style.zIndex = `${currentLocation + 1}`;
                        }
                    }
                    paperList[currentLocation].current?.classList.add('flipped')
                    closeBook(false);
                    break;
                }

                if (currentLocation === i) {
                    paperList[i].current?.classList.add('flipped')
                    setTimeout(() => {
                        if (paperList.length) {
                            const currentPaper = paperList[i].current;
                            if (currentPaper) {
                                currentPaper.style.zIndex = `${i + 1}`;
                            }
                        }
                    }, 500);
                    break;
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
                    setTimeout(() => {
                        if (paperList[0].current)
                            paperList[0].current.style.zIndex = `${numOfPapers}`;
                    }, 100)
                    break;
                }

                if (currentLocation === numOfPapers) {
                    openBook();
                    paperList[paperList.length - 1].current?.classList.remove('flipped');
                    setTimeout(() => {
                        if (paperList.length) {
                            const currentPaper = paperList[paperList.length - 1].current;
                            if (currentPaper) {
                                currentPaper.style.zIndex = `${1}`;
                            }
                        }
                    }, 100);
                    break;
                }

                if (currentLocation === i) {
                    console.log(i);
                    setTimeout(() => {
                        paperList[i - 1].current?.classList.remove('flipped')
                        if (paperList.length) {
                            const currentPaper = paperList[i - 1].current;
                            if (currentPaper) {
                                currentPaper.style.zIndex = `${max - i}`;
                            }
                        }
                    }, 100)
                    break;
                }
            }
            setCurrentLocation((currentLocation) => currentLocation - 1);
        }
    }

    return (
        <div className=" w-auto">
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


                {array.map((i, index) => <FlipBookPage key={index} data={[images[i], images[(i * 2) + 1]]}
                    pushToPaperList={pushToPaperList} z_index={numOfPapers - index} nextPage={handleNextPage} prevPage={handlePrevPage} />)}

            </div>

            <button onClick={handleNextPage}>
                next
            </button>
        </div>
    )
}

export default FlipBook
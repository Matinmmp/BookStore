
import { RefObject, useEffect, useRef, useState } from 'react'
import FlipBookPage from './FlipBookPage';


interface IProps {
    images: String[]
}

const FlipBook = ({ images }: IProps) => {

    const book = useRef<HTMLDivElement>(null);
    const [paperList, setPaperList] = useState<RefObject<HTMLDivElement>[]>([]);
    const [currentLocation, setCurrentLocation] = useState(0);
    const numOfPapers = images.length;
    const max = numOfPapers +1;
    
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
    // const a = Array.from({ length: numOfPapers }, (v, k) => k + 1).reverse()

    const handleNextPage = () => {
        
        if (currentLocation < numOfPapers) {

            for (let i = 0; i < numOfPapers; i++) {
                if (currentLocation === 0) {
                    paperList[0].current?.classList.add('flipped');
                    if (paperList[0].current)
                        paperList[0].current.style.zIndex = `${1}`;
                    openBook();
                    break;
                }
                if (currentLocation === i) {
                    paperList[i].current?.classList.add('flipped')
                    if (paperList.length) {
                        const currentPaper = paperList[i].current;
                        if (currentPaper) {
                            currentPaper.style.zIndex = `${i + 1}`;
                        }
                    }
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
                    if (paperList[0].current)
                        paperList[0].current.style.zIndex = `${numOfPapers}`;
                    break;
                }
                if (currentLocation === numOfPapers) {
                    openBook();
                    paperList[paperList.length - 1].current?.classList.remove('flipped');
                    if (paperList.length) {
                        const currentPaper = paperList[paperList.length - 1].current;
                        if (currentPaper) {
                            currentPaper.style.zIndex = `${1}`;
                        }
                    }
                    break;
                }
                if (currentLocation === i) {
                    console.log(i);
                    paperList[i - 1].current?.classList.remove('flipped')
                    if (paperList.length) {
                        const currentPaper = paperList[i - 1].current;
                        if (currentPaper) {
                            currentPaper.style.zIndex = `${max-i}`;
                        }
                    }
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


                {images.map((image, index) => <FlipBookPage key={index}
                    pushToPaperList={pushToPaperList} z_index={ numOfPapers-index} nextPage={handleNextPage} prevPage={handlePrevPage} />)}

            </div>

            <button onClick={handleNextPage}>
                next
            </button>
        </div>
    )
}

export default FlipBook
import React from 'react';
import './ChapterSelection.css';
import Button from "@mui/material/Button";

const mangalist2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

const ChapterSelection = ({mBook, setMBook}) => {

    return (
            <div className="PageFlex">
             {
                    mangalist2.map(item => (
                        <div className="demoPage">
                            <Button className="PageButton" onClick={() => setMBook('booking')} style={{background: '#2196F3', color: '#fff'}}>
                                Глава {item}
                            </Button>
                        </div>
                    ))
                }
            </div>

    );
};

export default ChapterSelection;
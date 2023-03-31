import React, {useState} from "react";
import Container from "../Components/healpers/Container";
import './css/Book.scss';
import Description from "../Components/booking/description/Description";

const Book = () => {

    return (
        <Container>
            <div className="main-row-manga">
                <Description/>
            </div>
        </Container>
    );
};

export default Book;
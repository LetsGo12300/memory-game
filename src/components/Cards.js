import Afghanistan from '../cards/Afghanistan_New_Flag.jpg';
import Armenia from '../cards/Armenia_lgflag.jpg';
import Azerbaijan from '../cards/Azerbaijan_lgflag.jpg';
import Bahrain from '../cards/Bahrain_lgflag.jpg';
import Bangladesh from '../cards/Bangladesh_lgflag.jpg';
import Bhutan from '../cards/Bhutan_lgflag.jpg';
import React, { useState } from "react";

const Cards = (props) => {
    const [sequence, setSequence] = useState([0,1,2,3,4,5]);
    const [cardNames, setCardNames] = useState([
        "Afghanistan",
        "Armenia",
        "Azerbaijan",
        "Bahrain",
        "Bangladesh",
        "Bhutan"
    ]);
    const [cards, setCards] = useState([
        Afghanistan,
        Armenia,
        Azerbaijan,
        Bahrain,
        Bangladesh,
        Bhutan
    ]);
    
    const [clicked, setClicked] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ]);

    const onClickCard = (e) => {
        const cardIndex = e.target.getAttribute('data-index');

        if (!clicked[cardIndex]){
            handleScore();
            handleClicked(cardIndex);
        }
    }; 

    const handleScore = () => {
        if (props.score < props.bestScore){
            props.setScore(props.score+1);
        } else {
            props.setScore(props.score+1);
            props.setBestScore(props.score+1);
        }
    };

    const handleClicked = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = true;
        setClicked(newClicked);
    };

    return(
        <div className="flag-container">
            {sequence.map(index => {
                return(
                <div key={index}>
                    <img onClick={onClickCard} data-index={index} className="flag" src={cards[index]} alt={cardNames[index]}/>
                    <div className="flag-title">{cardNames[index]} {index}</div>
                </div>
                )
            })}
        </div>
    );
};

export default Cards;
import Afghanistan from '../cards/Afghanistan_New_Flag.jpg';
import Armenia from '../cards/Armenia_lgflag.jpg';
import Azerbaijan from '../cards/Azerbaijan_lgflag.jpg';
import Bahrain from '../cards/Bahrain_lgflag.jpg';
import Bangladesh from '../cards/Bangladesh_lgflag.jpg';
import Bhutan from '../cards/Bhutan_lgflag.jpg';
import Brunei from '../cards/Brunei_lgflag.jpg';
import Cambodia from '../cards/Cambodia_lgflag.jpg';
import China from '../cards/China_lgflag.jpg';

import React, { useEffect, useState } from "react";

const Cards = (props) => {
    const { score, setScore, bestScore, setBestScore } = props;
    const [sequence, setSequence] = useState([0,1,2,3,4,5,6,7,8]);
    const [cardNames] = useState([
        "Afghanistan",
        "Armenia",
        "Azerbaijan",
        "Bahrain",
        "Bangladesh",
        "Bhutan",
        "Brunei",
        "Cambodia",
        "China"
    ]);
    const [cards] = useState([
        Afghanistan,
        Armenia,
        Azerbaijan,
        Bahrain,
        Bangladesh,
        Bhutan,
        Brunei,
        Cambodia,
        China
    ]);
    
    const [clicked, setClicked] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);

    const onClickCard = (e) => {
        const cardIndex = e.target.getAttribute('data-index');

        if (!clicked[cardIndex]){ // if card is not yet clicked
            handleScore();
            handleClicked(cardIndex);
        } else { // if card is already clicked -> Game Over, Reset states
            setScore(0);
            alert('game over');
            handleResetState();
            window.localStorage.setItem('bestScore', bestScore);
        }
    };

    const handleScore = () => {
        if (score < bestScore){
            setScore(score+1);
        } else {
            setScore(score+1);
            setBestScore(score+1);
        }
    };

    const handleClicked = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = true;
        setClicked(newClicked);
    };

    const handleResetState = () => {
        setClicked([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ]);
    };

    useEffect(() => {
        const handleShuffle = () => {
            const newSequence = [...sequence];
            setSequence(shuffleArray(newSequence));
        };
    
        const shuffleArray = (array) => {
            for (let i = array.length-1; i > 0; i--){
                const j = Math.floor(Math.random() * (i+1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        handleShuffle();
        // eslint-disable-next-line
    }, [clicked]);

    return(
        <div className="flag-container">
            {sequence.map(index => {
                return(
                <div key={index}>
                    <img onClick={onClickCard} data-index={index} className="flag" src={cards[index]} alt={cardNames[index]}/>
                    <div className="flag-title">{cardNames[index]}</div>
                </div>
                )
            })}
        </div>
    );
};

export default Cards;
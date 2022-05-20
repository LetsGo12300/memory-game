import Afghanistan from '../cards/Afghanistan_New_Flag.jpg';
import Armenia from '../cards/Armenia_lgflag.jpg';
import Azerbaijan from '../cards/Azerbaijan_lgflag.jpg';
import Bahrain from '../cards/Bahrain_lgflag.jpg';
import Bangladesh from '../cards/Bangladesh_lgflag.jpg';
import Bhutan from '../cards/Bhutan_lgflag.jpg';
import Brunei from '../cards/Brunei_lgflag.jpg';
import Cambodia from '../cards/Cambodia_lgflag.jpg';
import China from '../cards/China_lgflag.jpg';
import Cyprus from '../cards/Cyprus_lgflag.jpg';
import Georgia from '../cards/Georgia_lgflag.jpg';
import Japan from '../cards/Japan_lgflag.jpg';
import Jordan from '../cards/Jordan_lgflag.jpg';
import Kazakhstan from '../cards/Kazakhstan_lgflag.jpg';
import KoreaNorth from '../cards/Korea-North_lgflag.jpg';
import KoreaSouth from '../cards/Korea-South_lgflag.jpg';
import Kuwait from '../cards/Kuwait_lgflag.jpg';
import Kyrgyzstan from '../cards/Kyrgyzstan_lgflag.jpg';
import Laos from '../cards/Laos_lgflag.jpg';
import Lebanon from '../cards/Lebanon_lgflag.jpg';
import Macau from '../cards/Macau_lgflag.jpg';
import Malaysia from '../cards/Malaysia_lgflag.jpg';
import Maldives from '../cards/Maldives_lgflag.jpg';
import Mongolia from '../cards/Mongolia_lgflag.jpg';
import Myanmar from '../cards/Myanmar_lgflag.jpg';
import Nepal from '../cards/Nepal_lgflag.jpg';
import Oman from '../cards/Oman_lgflag.jpg';
import Pakistan from '../cards/Pakistan_lgflag.jpg';
import Philippines from '../cards/Philippines_lgflag.jpg';
import Qatar from '../cards/Qatar_lgflag.jpg';
import Russia from '../cards/Russia_lgflag.jpg';
import SaudiArabia from '../cards/Saudi_Arabia_lgflag.jpg';
import Singapore from '../cards/Singapore_lgflag.jpg';
import SriLanka from '../cards/Sri_Lanka_lgflag.jpg';
import Syria from '../cards/Syria_lgflag.jpg';
import Taiwan from '../cards/Taiwan_lgflag.jpg';
import Tajikistan from '../cards/Tajikistan_lgflag.jpg';
import Thailand from '../cards/Thailand_lgflag.jpg';
import Tibet from '../cards/Tibet_lgflag.jpg';
import TimorLeste from '../cards/Timor-Leste_lgflag.jpg';
import Turkey from '../cards/Turkey_lgflag.jpg';
import Turkmenistan from '../cards/Turkmenistan_lgflag.jpg';
import UnitedArabEmirates from '../cards/United_Arab_Emirates_lgflag.jpg';
import Vietnam from '../cards/Vietnam_lgflag.jpg';
import Yemen from '../cards/Yemen_lgflag.jpg';

import React, { useEffect, useState } from "react";

const Cards = (props) => {
    const { score, setScore, bestScore, setBestScore } = props;
    const [sequence, setSequence] = useState([...Array(45).keys()]);
    const [cardNames] = useState([
        'Afghanistan',
        'Armenia',
        'Azerbaijan',
        'Bahrain',
        'Bangladesh',
        'Bhutan',
        'Brunei',
        'Cambodia',
        'China',
        'Cyprus',
        'Georgia',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'North Korea',
        'South Korea',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Lebanon',
        'Macau',
        'Malaysia',
        'Maldives',
        'Mongolia',
        'Myanmar',
        'Nepal',
        'Oman',
        'Pakistan',
        'Philippines',
        'Qatar',
        'Russia',
        'Saudi Arabia',
        'Singapore',
        'Sri Lanka',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Thailand',
        'Tibet',
        'Timor Leste',
        'Turkey',
        'Turkmenistan',
        'United Arab Emirates',
        'Vietnam',
        'Yemen'        
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
        China,
        Cyprus,
        Georgia,
        Japan,
        Jordan,
        Kazakhstan,
        KoreaNorth,
        KoreaSouth,
        Kuwait,
        Kyrgyzstan,
        Laos,
        Lebanon,
        Macau,
        Malaysia,
        Maldives,
        Mongolia,
        Myanmar,
        Nepal,
        Oman,
        Pakistan,
        Philippines,
        Qatar,
        Russia,
        SaudiArabia,
        Singapore,
        SriLanka,
        Syria,
        Taiwan,
        Tajikistan,
        Thailand,
        Tibet,
        TimorLeste,
        Turkey,
        Turkmenistan,
        UnitedArabEmirates,
        Vietnam,
        Yemen
    ]);
    
    const [clicked, setClicked] = useState([new Array(45).fill(false)]);

    const onClickCard = (e) => {
        const cardIndex = e.target.getAttribute('data-index');

        if (!clicked[cardIndex]){ // if card is not yet clicked
            handleScore();
            handleClicked(cardIndex);
        } else { // if card is already clicked -> Game Over, Reset states
            setScore(0);
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
        setClicked([new Array(45).fill(false)]);
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
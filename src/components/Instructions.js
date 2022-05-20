import Icon from '@mdi/react'
import { mdiInformationOutline  } from '@mdi/js'

const Instructions = () => {
    return (
        <div className="instructions">
            <Icon path={ mdiInformationOutline }></Icon>
            <div className="instructions-text">
                <b>How to Play:</b>
                <p>
                    The objective of the game is to click as many flags as you can, but remember not to click the same flag more than once. All flags are shuffled every time a flag is clicked. Max possible score is 45. 
                </p>
                <p>
                    Good luck!
                </p>
            </div>
        </div>
    );
};

export default Instructions;
const Scores = (props) => {
    return(
        <div className="score-board">
            <div>Score: {props.score}</div>
            <div>Best Score: {props.bestScore}</div>
        </div>
    );
};

export default Scores;
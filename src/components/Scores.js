const Scores = (props) => {
    return(
        <div className="score-board">
            <div>Score: <b>{props.score}</b></div>
            <div>Best Score: <b>{props.bestScore}</b></div>
        </div>
    );
};

export default Scores;
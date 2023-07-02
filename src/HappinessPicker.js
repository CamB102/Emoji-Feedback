function HappinessPicker({ setParentState, score }) {
    const emojiScores = ['😦', '😞', '😐', '🙂', '😁'];
    
    const addScoreHandler = (index) => {
    setParentState(index);
    ;
    };
    
    const buttons = emojiScores.map((emoji, index) => (
    <button
        key={index}
        style={{
        backgroundColor: score === index ? "blue" : "white"
        }}
        onClick={() => {addScoreHandler(index)}}
    >
        {emoji}
    </button>
    ));

    return <div>{buttons}</div>;
}
export default HappinessPicker

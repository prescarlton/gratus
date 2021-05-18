
import { useState } from "react";
const NewGratCard = () => {

    const [gratMessage, setGratMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    const onUpdateGratInput = (e) => {
        setGratMessage(e.target.value);
        setCharCount(e.target.value.length);
    }
    return (
        <div className="gratCard--newCard">
            <h2 className="gratCard__message">What are you grateful for today?</h2>
            <div className="gratInput--wrapper">
                <textarea
                    name="gratInput"
                    id="gratInupt"
                    cols="30" rows="10"
                    maxLength='140'
                    value={gratMessage}
                    onChange={onUpdateGratInput}
                />
                <div className={`charCount ${charCount >= 130 && 'error'}`}>{charCount} / 140</div>
            </div>
        </div>
    )
};

export default NewGratCard;
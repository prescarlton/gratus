import { useState } from "react";
import ReactModal from "react-modal";

const NewGratModal = (props) => {

    const [gratMessage, setGratMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    const onUpdateGratInput = (e) => {
        setGratMessage(e.target.value);
        setCharCount(e.target.value.length);
    }
    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            className='modal'
        >
            <h2 className="modal--header">What are you <span className='highlight'>grateful</span> for today?</h2>
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
            <div className="modal--footer">
                <button className="button--primary">OK</button>
                <button className="button--secondary">Cancel</button>
            </div>
        </ReactModal>
    )
};

export default NewGratModal;
import './JModal.css'

function JModal({title, text, btn_text,  closingModale}) {
    if (title === undefined) {title = 'Lorem Ipsum'}
    if (text === undefined) {text = 'Lorem Ipsum'}
    if (btn_text === undefined) {btn_text = 'OK'}
    return (
        <div id="confirmation" className='JModal'>
            <div className='JModal_window JModal_blur'>
                <h3 className='JModal_h3'>{title}</h3>
                <p className='JModal_p'>{text}</p>
                <p className='JModal_close-button' onClick={closingModale}>&#10006;</p>
                <p><button className="JModal_button" onClick={closingModale}>{btn_text}</button></p>
            </div>
        </div>
    )
}

export default JModal
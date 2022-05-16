# JModal

JModal is a simple React componant that displays a simple but configurable modal window, mainly to send back notifications to the user. It comes with a built-in CSS file, but you can tailor its look as you please.

![ScreenShot](https://github.com/jujunantes/JModal/raw/master/src/medias/capture.png)

## Installation

```bash
npm install jmodal2
```

## How to use

```jsx
import React, { useState } from "react"
import { render } from "react-dom"
import JModal from './jmodal2'

const App = () => {

    const [modalState, setModal] = useState(false)
    const modalOpen = () => setModal(true)
    const modalClose = () => setModal(false)

    return (
        <div style={{ marginLeft: "50%", marginTop: "40%" }}>
    
            <button onClick={modalOpen}>
                Open Modal
            </button>
            
            {modalState && (<JModal
                title='Success!'
                text={'Hello Modal!'}
                closingModale={modalClose} />)}
        
      </div>
    )
}

render(<App />, document.getElementById("root"))
```

## Styling

JModal'css exposes the following rules :

- JModal: styles the overlay's background;
- JModal_window: styles the Modal's window;
- JModal_h3: styles the modal's title section;
- JModal_p: styles the modal's text section;
- JModal_close-button: styles the top-left close button;
- JModal_button: styles the bottom button.

You can easily superseed each of these rules with your own additions. For instance :

```css
.JModal_p {
	margin-top: 1rem;
	color: red;
}
```

## License

MIT
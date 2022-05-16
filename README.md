# JModal

JModal is a simple React componant that displays a simple but configurable modal window, mainly to send back notifications to the user. It comes with a built-in CSS file, but you can tailor its look as you please.

## Installation

```bash
npm install jmodal
```

## How to use

```jsx
import React, { useState } from "react"
import { render } from "react-dom"
import JModal from './JModal'

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

## License

MIT
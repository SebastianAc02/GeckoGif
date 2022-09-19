import "./modal.css"
import  ReactDOM  from "react-dom"
function Modal({children, onClose }) {



    return <div className="Modal">
        <div className="modal-contenido">
            <button className="btn i" onClick={onClose}>🅧</button>
            {children}
        </div>
    </div>
}

export default function ModalPortal ({children, onClose}){
return ReactDOM.createPortal(<Modal onClose={onClose}>
    {children}
</Modal>, 
        document.getElementById('modal-root'))
}
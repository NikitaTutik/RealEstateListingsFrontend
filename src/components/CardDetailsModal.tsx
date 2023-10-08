import {ReactElement } from "react";
import styles from "./CardDetailsModal.module.css";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children?: ReactElement|ReactElement[];
}

const CardDetailsModal = ({ open, onClose, children}: ModalProps) => {
    return (
        <div className={open ? styles.modal : styles['modal-display-none']}>
            <div className={styles['modal-main']}>
                <div className={styles['modal-head']}>
                    <h1>Property title</h1>
                </div>
                <div className={styles['modal-body']}>
                    {children}
                </div>
                <div className="btn-container">
                    <button type="button" className="btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default CardDetailsModal
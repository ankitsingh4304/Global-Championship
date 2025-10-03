//import './popUp.scss';

interface PopupProps {
    open: boolean;
    className?: string;
    onClose: () => void;
    children?: React.ReactNode;
}

export default function PopUp({ open, className, onClose, children }: PopupProps) {
    if (!open) return null;

    return (
        <section
            id="custom-popup-backdrop"
            className={`adjust-top fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-6 rounded-2xl shadow-2xl w-full max-w-lg mx-1 transform scale-95 animate-popOpen hover:scale-100 transition-transform duration-300 ease-out ${className}`}
            onClick={onClose} // Close on backdrop click
        >
            {children}
        </section>
    );
}
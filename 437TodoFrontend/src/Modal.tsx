import './App.css'

interface IModalProps {
    isOpen: boolean;
    onCloseRequested: () => void;
    headerLabel: string;
    children: React.ReactNode;
}

function Modal(props: IModalProps) {

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const inner = document.querySelector(".inner");
        if (inner !== null && !inner.contains(e.target as Node)) {
            props.onCloseRequested();
        }
    }
    return (
        props.isOpen ?
            (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center"
             onClick={handleClick}>
            <div className="inner bg-white p-5 rounded">
                <div className="flex justify-between">
                    <h2 className="pb-2 text-lg font-medium">
                        {props.headerLabel}
                    </h2>
                    <button
                            className="text-gray-500 hover:text-red-700 active:text-red-900
                                       text-lg"
                            onClick={props.onCloseRequested}
                            aria-label="Close">
                        X
                    </button>
                </div>
                {props.children}
            </div>
        </div>)
: null)
}

export default Modal;

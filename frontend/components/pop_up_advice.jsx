const PopUp = ({onClose, msg}) => {
    return (
        <div className="x-center">
            <div className="bg-fake" style={{position: 'absolute', zIndex: '4'}}></div>
            <div className="x-center w-100 h-100 py-4" style={{position: 'absolute', zIndex: '5'}}>
                <div className="mi-popup">
                    <div className="modal-header">
                        <button type='button' className="btn-close" aria-label="Close" onClick={() => onClose()} />
                    </div>
                    <div className="d-flex px-3">
                        <div className="w-25">
                            <img src={`/check.svg`} alt={`/check.svg`} />
                        </div>
                        <div className="w-75 px-3 text-center">
                            {msg}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bg-fake {
                    background: white;
                    opacity: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

export default PopUp
const Modal = ({children}) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="bg-fake" style={{height: '100%', width: '100%', position: 'absolute', zIndex: '4'}}>
            </div>
            <div className="d-flex justify-content-center py-4" style={{height: '100%', width: '100%', position: 'absolute', zIndex: '5'}}>
                {children}
            </div>
            <style jsx>{`
                .bg-fake {
                    background: white;
                    opacity: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}

export default Modal
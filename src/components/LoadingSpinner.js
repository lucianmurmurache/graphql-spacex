function LoadingSpinner() {
    return (
        <div
            className='fixed flex w-full h-full items-center justify-center'
            aria-label='Loading spinner animation'>
            <div className='loading-spinner'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingSpinner;

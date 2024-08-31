import './logo.css';

const Logo = () => {
    return (
        <div className="container">
            <div className="logo-container">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
                <div className="text-cont">
                    <p className="text-1">HTML <span className="highlight-text">&</span> CSS</p>
                    <p className="text-2">Design and Build Websites</p>
                </div>
            </div>
        </div>
    );
};

export default Logo;


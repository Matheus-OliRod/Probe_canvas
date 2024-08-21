import './main_page.css';

// js file specific to build the main page and its architeture

function LoadMainPage() {
    return (
    <div id='container'>
        <nav>
            <button title="Export file">
                <img className="icon" src="./export.png" alt="Export project"></img>
            </button>
            <button title="Import file">
                <img className="icon" src="./import.png" alt="Import project"></img>
            </button>
        </nav>
        
        <div id="section-manager">
        <header>
            <button id='section-creator'>
                + Create Section
            </button>
            <button id='switch-to-uml'> {'>'} </button>
        </header>
        </div>

    </div>
    );
}

export default LoadMainPage;
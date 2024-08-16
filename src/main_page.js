import './main_page.css';

// js file specific to build the main page and its architeture

function LoadMainPage() {
    return (
    <div id='container'>
        <nav></nav>
        <header>
            <button id='section-creator'>
                + Create Section
            </button>
            <button id='switch-to-uml'></button>
        </header>

    </div>
    );
}

export default LoadMainPage;
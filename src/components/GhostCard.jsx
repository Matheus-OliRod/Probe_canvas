import '../components_styles/GhostCard.css';

function GhostCard({ onClick }) {

    return (
        <div className='ghost-card' onClick={onClick}>
            +
        </div>
    );

}

export default GhostCard;
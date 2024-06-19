const PersonCard = (props) => {
    const {firstName} = props;
    const {lastName} = props;
    const {age} = props;
    const {hairColor} = props;
    return(
        <div>
            <h2>Name: {firstName} {lastName}</h2>
            <h4>Age: {age}</h4>
            <h4>Hair Color: {hairColor}</h4>
        </div>
    )
}

export default PersonCard;
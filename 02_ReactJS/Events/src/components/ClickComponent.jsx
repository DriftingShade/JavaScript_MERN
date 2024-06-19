const ClickComponent = (props) => {

    const { clickProp } = props;

    return (
        <>
            <h1>Click Component</h1>
            <p onClick={(e)=>console.log(clickProp)}>Click Me</p>
        </>
    )
}

export default ClickComponent
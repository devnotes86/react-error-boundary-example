export default function FaultyButton() {
    function handleClick() {
        throw Error("error on buttonClick event!");
    }

    return (
        <button onClick={handleClick}>This button will generate an error</button>
    );
}


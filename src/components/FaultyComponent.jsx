export default function FaultyComponent() {
    throw Error("Error from FaultyComponent!");
    return (
        <p>This is faulty component</p>
    );
}
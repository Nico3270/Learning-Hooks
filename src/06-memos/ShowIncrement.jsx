export const ShowIncrement = ({ increment }) => {
    return (
        <>
            <button className="btn btn-outline-info" onClick={() => { increment() }}>Incrementar</button>
        </>
    )
}
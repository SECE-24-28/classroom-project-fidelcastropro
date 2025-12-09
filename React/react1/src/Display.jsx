function Display(props){
    const {name,arr,person} = props
    return (
        <>
            <h1>From Display Component {name}</h1>
            <h1>Array from Display : </h1>
            <ul>
                {
                    arr.map((d,ind) => {
                        return <li key={ind}>{d}</li>
                    })
                }
            </ul>
            <h1>Display : {person.name}</h1>
        </> 
    )
}

export default Display
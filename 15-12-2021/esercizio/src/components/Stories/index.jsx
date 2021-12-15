const Stories =  (props) => {
    const data = props.data || {
        name: "friend",
        photo: "https://randomuser.me/api/portraits/women/59.jpg"
    };
    return (
        <div>
            <img src={data.photo} alt={data.name}/>
            <h5>{data.name}</h5>
        </div>
    )
}

export {Stories}
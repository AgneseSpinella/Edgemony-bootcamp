import { useState } from "react"
import { Stories } from "../../components/Stories"

const stories = [
    {name:"Roberta", photo:"https://randomuser.me/api/portraits/women/15.jpg"},
    {name:"Alessandro", photo:"https://randomuser.me/api/portraits/men/17.jpg"},
    {name:"Roberto", photo:"https://randomuser.me/api/portraits/men/18.jpg"}
]

const Home = () => {
    const [storiesPreview] = useState(stories);

    return (
    <div>
        <h1>Storie</h1>
        <main>
            {storiesPreview.map((stories,index) => (
             <Stories key={index} data={stories}/>   ))}
        </main>
    </div>
    )

}

export default Home;


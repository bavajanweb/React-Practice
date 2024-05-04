import './index.css'
import Card from './card'
import data from './data'

export default function Cards(){

    const content = data.map(Data =>{
        return <Card 
        title = {Data.title}
        location = {Data.location}
        date = {Data.Date}
        description = {Data.description}
        imageUrl = {Data.imageUrl}

        />
    })

    return(
        <div>
            {content}
        </div>
        
    )
}


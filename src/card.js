import './index.css'
import img from './images/card1.png'



export default function Card(Data){
    return(
        <div>
            

            <div className='card'>
                <img src={img}/>
                <div className='cardContent'>
                <h5><span>{Data.location}</span> GoogleMap</h5>    
                <h1>{Data.title}</h1>
                <h6>{Data.date}</h6>
                <p>{Data.description}</p>
                </div>
            </div>
        </div>
    )
}
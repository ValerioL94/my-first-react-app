import pizzaPhoto from './assets/pizza.jpg'
import './Pizza.css'

function Hungry() {
    return (
        <div>
            <h1>&quot;And now I&apos;m hungry...&quot;</h1>
            <img src={pizzaPhoto} className='pizza' alt="pizza" />
        </div>
    )
}

export default Hungry;
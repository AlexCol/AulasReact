import styles from './Challenge.module.css'
import ChallengeCar from './ChallengeCar'

interface Car {
    brand: string, 
    km: number, 
    color: string
}

const Challenge = () => {
    const carros: Car[] = [
        {brand: "VW", km: 0, color: "Blue"},
        {brand: "Fiat", km: 1000, color: "Red"},
        {brand: "Ford", km: 20000, color: "Violet"}
    ]

    return (
        <div className={styles.chal}>
            <h1>ShowRoom de Carros</h1>
            <div className={styles.car_container}>
                {carros.map((car, index) => (
                    <ChallengeCar key={index} car={car}/>
                ))}
            </div>
        </div>
    )
}

export default Challenge
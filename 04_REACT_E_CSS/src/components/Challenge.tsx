import styles from './Challenge.module.css'

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
            {
                carros.map((car, index) => (
                    <div key={index}>
                        <h1>Brand: {car.brand}</h1>
                        <h2 style={{color: car.color}}>Color: {car.color}</h2>
                        <h3>KM: {car.km}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Challenge
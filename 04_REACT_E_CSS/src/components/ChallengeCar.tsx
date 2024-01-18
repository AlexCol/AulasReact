import styles from './ChallengeCarCard.module.css'

interface Car {
    brand: string, 
    km: number, 
    color: string
}


const ChallengeCar: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className={styles.card}>
        <h1>Brand: {car.brand}</h1>
        <h2 style={{color: car.color}}>Color: {car.color}</h2>
        <h3>KM: {car.km}</h3>
    </div>
  )
}

export default ChallengeCar
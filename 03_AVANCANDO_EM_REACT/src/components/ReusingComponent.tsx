import CarDetails from "./CarDetails";

const ReusingComponent = () => {
    const myCars = [
        {id: 1, brand:"Ferrari", color: "Amarela", km:0, isNew: true},
        {id: 2, brand:"KIA", color: "Branco", km:10000, isNew: false},
        {id: 3, brand:"Renault", color: "Azul", km:5000, isNew: false}
      ]
    return (
        <>
            {
                myCars.map(car =>
                <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} isNew={car.isNew}/>
                )
            }
        </>
    )
}

export default ReusingComponent


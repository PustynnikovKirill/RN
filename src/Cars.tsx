type Cars = {
    topCars: Car[]
}
type Car = {
    manufacturer: string,
    model: string,
}

export const Cars = ({topCars}: Cars) => {

    return (
        <ul>
            {topCars.map((car, index) => {
                return (
                    <div key={index}>
                        <li>{car.manufacturer} {car.model}</li>
                    </div>
            )
            })}

        </ul>
    )
}
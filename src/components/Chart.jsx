import Day from "./Day"
import data from '../data.json'
import { useEffect, useState } from "react"

const Chart = () => {
    // console.log(data)
    // console.log(typeof data)

    const [maxAmount, SetMaxAmount] = useState(false)

    useEffect(() => {
        const amounts = []
        data.forEach(day => {
            amounts.push(day.amount)
        })
        // console.log(amounts)
    
        const maxAmount = Math.max(...amounts)
    
        data.forEach(day => day.amount === maxAmount ? SetMaxAmount(day.amount) : null)

    },[maxAmount])

    // console.log(maxAmount)

    return(
        <section className="chart_container">
            {
                data.map((item, index) => (
                    <Day key={index} day={item.day} amount={item.amount} maxAmount={maxAmount}  />
                ))
            }

        </section>
    )
}

export default Chart
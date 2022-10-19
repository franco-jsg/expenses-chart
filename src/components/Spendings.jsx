import Chart from "./Chart"
import Total from "./Total"

const Spendings = () => {
    return(
        <>
        <section className="spendings_container">
            <h1>Spendings - Last 7 days</h1>
            <Chart />
            <Total />
        </section>
        </>
    )
}

export default Spendings
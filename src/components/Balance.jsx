import Logo from "../img/logo.svg"

const Balance = () => {
    return(
        <>
            <section className="balance_container">
                <div className="balance_info">
                    <span>My balance</span>
                    <p>$921.48</p>
                </div>
                <img className="balance_logo" src={Logo} alt="Logo" />
            </section>
        </>
    )
}

export default Balance
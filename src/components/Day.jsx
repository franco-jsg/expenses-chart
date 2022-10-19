import { StyledDay, StyledAmount, StyledInfo, StyledAmountPop } from "./styles/Day.styled"

const Day = ({day, amount, maxAmount}) => {
    return(
        <>
            <StyledDay>
                <StyledAmountPop>
                    ${amount}
                </StyledAmountPop>
                <StyledAmount amount={amount} maxAmount={maxAmount}/>
                <StyledInfo>
                    {day}
                </StyledInfo>
            </StyledDay>

        </>
    )
}

export default Day
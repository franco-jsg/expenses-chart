import styled from "styled-components";

export const StyledDay = styled.div`

    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 0.6rem;
    width: 15%;
    margin-bottom: 2rem;
    
`
export const StyledAmount = styled.div`

    height: ${(props) => (((props.amount)*20)/60 + "rem")};
    /* background-color: hsl(10, 79%, 65%); */
    border-radius: 0.6rem;

    background-color: ${(props) => (props.amount === props.maxAmount) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)' };

    ${StyledDay}:hover & {
        opacity: 0.5;
        cursor: pointer;
    }
`
export const StyledAmountPop = styled.div`

    width: 100%;
    visibility: hidden;
    background-color: hsl(25, 47%, 15%);
    font-size: 1rem;
    color: hsl(0,0%,100%);
    border-radius: 0.3rem;
    padding: 0.5rem 0.2rem;
    text-align: center;

    ${StyledDay}:hover & {
        visibility: visible;
    }

    @media(max-width: 37.5rem) {
        font-size: 0.8rem;
    };
`


export const StyledInfo = styled.p`

    font-size: 1.5rem;
    color: hsl(28, 10%, 53%);
    text-align: center;

    @media(max-width: 37.5rem) {
        font-size: 1rem;
    };

`
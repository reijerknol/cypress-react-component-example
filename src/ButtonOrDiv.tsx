export const ButtonOrDiv = ({button} : {button: boolean}) => {
    if (button){
        return <button data-testid={"button"}>Click me</button>
    } else {
        return <div data-testid={"divider"}>Er is hier niks</div>
    }
}
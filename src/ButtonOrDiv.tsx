export const ButtonOrDiv = ({button} : {button: boolean}) => {
    if (button){
        return <button>Click me</button>
    } else {
        return <div>Er is hier niks</div>
    }
}
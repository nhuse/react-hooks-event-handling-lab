// Code Keypad Component Here

export default function Keypad() {
    function change() {
        console.log("Entering password...");
    }
    return <input type="password" onChange={change} placeholder="Enter Password"/>
}
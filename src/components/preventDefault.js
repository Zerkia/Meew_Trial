export default function preventdefault() {
    const handleClick = (e) => {
        e.preventdefault();
        console.log("Default prevented");
    };
}
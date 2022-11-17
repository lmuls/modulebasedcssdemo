import {useState} from "react";

export function Deer() {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={`card${active ? " active" : ""}`}>
            <img src="669639.png" alt=""/>
            <div className="content">
                <h2>Hjort er digg</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nam qui quisquam repellat! Ad consectetur eveniet, id nisi quas ut.</p>
                <button onClick={() => setActive(prevVal => !prevVal)}>Ikke trykk her</button>
            </div>
        </div>
    )
}
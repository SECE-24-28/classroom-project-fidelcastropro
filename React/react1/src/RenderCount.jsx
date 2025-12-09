import { useState } from "react";

function RenderCount() {
    const [count, setCount] = useState(0);

    // Runs on every render
    setCount(count + 1);

    return <h1>Rendered {count} times</h1>;
}

export default RenderCount;

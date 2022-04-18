import { useEffect, useState } from "react";

const useQNAs = () => {
    const [qnas, setqnas] = useState([]);
    useEffect(() => {
        fetch('qnas.json')
        .then(request => request.json())
        .then(response => setqnas(response))
    }, []);

    return [qnas, setqnas];
};

export default useQNAs;
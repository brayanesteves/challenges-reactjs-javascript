import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL   = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

export const CatsHome = () => { 
    const [fact, setFact] = useState('lorem ipsum cat fact whatever');   
    const [asynchronous, setAsynchronous] = useState(false);

    useEffect(() => {
        if(asynchronous) {
            async function getRandomFact() {
                const res  = await fetch(CAT_ENDPOINT_RANDOM_FACT);
                const json = await res.json();
                setFact(json.fact);
            }
            getRandomFact();
        } else {
            fetch(CAT_ENDPOINT_RANDOM_FACT).then(res => res.json()).then(data => setFact(data.fact));
        }
    }, []);
    
    return (
        <main>
            <h2>Cats Home Page</h2>
            <p>{fact && <p>{fact}</p>}</p>
        </main>
    );
};
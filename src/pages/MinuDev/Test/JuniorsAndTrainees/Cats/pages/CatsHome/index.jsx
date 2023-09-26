import { useEffect, useState } from "react";
import                              './assets/cats-styles.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL     = 'https://cataas.com/';

export const CatsHome = () => { 
    const [fact, setFact]                 = useState('lorem ipsum cat fact whatever');   
    const [imageUrl, setImageUrl]         = useState();
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
            fetch(CAT_ENDPOINT_RANDOM_FACT).then(res => res.json()).then(data => {
                const { fact } = data;
                setFact(fact);

                const threeFirstWord = fact.split(' ').slice(0, 3).join(' ');
                // console.log(firstWord);
                fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`).then(res => res.json()).then(response => {
                    // console.log(response);
                    const { url } = response;
                    setImageUrl(url);
                });
            });
        }
    }, []);
    
    return (
        <main>
            <h2>Cats Home Page</h2>
            <section>                
                <p>{fact && <p>{fact}</p>}</p>
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first trgee words for ${fact}`} />}
            </section>
        </main>
    );
};
import { useEffect, useState } from "react";
import                              './assets/cats-styles.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL     = 'https://cataas.com/';

export const CatsHome = () => { 
    const [fact, setFact]                 = useState('lorem ipsum cat fact whatever');   
    const [factError, setFactError]       = useState();
    const [imageUrl, setImageUrl]         = useState();
    const [asynchronous, setAsynchronous] = useState(false);

    // To retrieve the quote on page load.
    useEffect(() => {
        if(asynchronous) {
            async function getRandomFact() {
                const res  = await fetch(CAT_ENDPOINT_RANDOM_FACT);
                const json = await res.json();
                setFact(json.fact);
            }
            getRandomFact();
        } else {
            fetch(CAT_ENDPOINT_RANDOM_FACT).then(res => {
                // TODO: Handle eror if '!res.ok'.
                if(!res.ok) {
                    // setFactError("The appointment could not be recovered.");
                    throw new Error('Error fetching "fact".');
                }
                return res.json();
            }).then(data => {
                const { fact } = data;
                setFact(fact);                
            }).catch((error) => {
                // Whether there is an error with the answer.
                // How if there is an error with the request.
            });
        }
    }, []);

    // To recover the image every time we have a new appointment.
    useEffect(() => {        
        if(!fact) return;
        const threeFirstWord = fact.split(' ').slice(0, 3).join(' ');
        // console.log(firstWord);
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`).then(res => res.json()).then(response => {
            // console.log(response);
            const { url } = response;
            setImageUrl(url);
        });
    }, [fact]);
    
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
import { useMemo }    from "react";
import { useParams }  from "react-router-dom";
import { getContact } from "../../data/contacts";

export const DetailContact = () => {
    const params  = useParams();
    const contact = useMemo(() => getContact(params.contact.id), [params.contactId]);
    if(!contact) {
        throw new Error('Contact does not exist.');
    }
    return (
    <>
        <div>
            <h1>{contact.name}</h1>
            <h1>{contact.telephone}</h1>
            <h1>{contact.favorite ? "Favorite." : "Regular contact."}</h1>
        </div>
    </>);
};
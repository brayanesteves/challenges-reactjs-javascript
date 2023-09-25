export const contacts = [
    { id:"0", name:"Brayan", telephone:"+0 010 000 00 00", age: 30, favorite: false },
    { id:"1", name:"Esteves", telephone:"+0 010 001 01 01", age: 30, favorite: true },
];

export function getContact(id) {
    return contacts.find((item) => item.id === id);
}
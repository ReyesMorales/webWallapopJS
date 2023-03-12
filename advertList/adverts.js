export async function getAdverts() {
    
    const advertsUrl = 'https://127.0.0.1:8000/api/adverts';
    
    const response = await fetch(advertsUrl);
    const adverts = await response.json();
    
    return adverts;
}

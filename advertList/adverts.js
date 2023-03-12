export async function getAdverts() {
    
    const advertsUrl = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json'
    
    const response = await fetch(advertsUrl);
    const adverts = await response.json();
    
    return adverts;
}

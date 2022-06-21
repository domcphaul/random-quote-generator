//console.log('Papa Need Some Prada Bag & Heel Money');

const quotes = ['“You’re a virgin who can’t drive.” — Tai Frasier','“Do you prefer fashion victim or ensembly challenged?” — Cher','“You see how picky I am about my shoes and they only go on my feet.” — Cher','“Cher, I don’t want to do this anymore. And my buns, they don’t feel nothin’ like steel.” — Tai','“Oh, that’s good. You don’t want to be the last one at the coffeehouse without chin pubes.” — Cher','"Daddy is so good, he gets $500 an hour to fight with people, but he fights with me for free because I’m his daughter." - Cher','"Shouldn’t you go to school on the East Coast? I hear the girls at NYU aren’t at all particular." - Cher','"Hey you! Anything happens to my daughter, I got a .45 and a shovel. I doubt anybody would miss you." - Mr.Horrowitz','" Dionne and I were both named after great singers of the past who now do infomercials." - Cher','"And in conclusion, may I please remind you that it does not say R.S.V.P. on the Statue of Liberty." - Cher', '" As if!" - Cher']; 

function pickedQuotes(){
    let randomQuote = Math.floor(Math.random() * 10);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote];
}

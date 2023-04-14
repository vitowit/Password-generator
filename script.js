//arrays
//array default
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

f1()
function f1()
{
    for(i=0; i<=10; i++)
    {
        let result = (alphabet[Math.floor(Math.random()*alphabet.length)]);
        document.querySelector('#text').innerHTML = result;
    }
}
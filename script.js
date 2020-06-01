var names = ["Yaakov","John", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(let i=0; i< names.length; i++)
{
    var letter = names[i];
    if(letter[0] === "j" || letter[0] === "J")
    {
        console.log("Goodbye " + names[i]);
    }else
    {
        console.log("Hello " + names[i]);
    }
}
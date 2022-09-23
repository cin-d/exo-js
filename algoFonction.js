jeMp(5, "Cindy");
jeMp(10, "Robert");


function jeMp(interation, nom)
{
    for(i = 0; i <= interation; i++)
     {
        message = "Je m'appelle " + nom + testMultriple(5);
        console.log(message) ;
     }
}

function testMultiple(i)
{
    newMessage = "" ;
    if(i % 3 == 0)
        newMessage += "Fizz"; 
    if(i % 5 == 0)
        newMessage += "Buzz";

    if(newMessage == " ")
    {
        newMessage += i ;

        return newMessage ;
    }
}
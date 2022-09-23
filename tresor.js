pointDeDepartX = 10
pointDeDepartY = 10
grandeurX = 2
grandeurY = 2

tresorsPosX = 10 ;
tresorsPosY = 11 ;

asFoundTresure = false ;

for(x = 0; x <= grandeurX; x++)
{
    for(y = 0; y <= grandeurY; y++)
    {
        currentPointX = x + pointDeDepartX ;
        currentPointY = y + pointDeDepartY ;
        console.log("Je visite : " + currentPointX + " / " + currentPointY)

        if(currentPointX == tresorsPosX && currentPointY == tresorsPosY)

    { 
        console.log("J'ai trouvé le trésor !") ; 
        asFoundTresure = true ;
        break ;
        }       
    }

    if(asFoundTresure)
    {
        break ; 
    }
}
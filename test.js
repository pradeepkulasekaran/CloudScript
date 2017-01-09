 

function GrantItemsToUser()
{
    var GrantInventoryToUserResponse = server.GrantItemsToUser
    ({
   
    "PlayFabId" : currentPlayerId,
    "ItemIds": [
    "Beach_1"]
   
    });
}



 
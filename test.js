 
handlers.GrantItemsToUser = function(args)
{
    var GrantInventoryToUserResponse = server.GrantItemsToUser
    ({
   
    "PlayFabId" : currentPlayerId,
    "ItemIds": [
    "Beach_1"]
   
    });

    return "Executed";
}





 
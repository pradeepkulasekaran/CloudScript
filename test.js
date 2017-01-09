 
handlers.GrantItemsToUser = function(args)
{
    var GrantInventoryToUserResponse = server.GrantItemsToUser
    ({
   
    "PlayFabId" : currentPlayerId,
    "ItemIds": args
   
    });

    return "Executed" + args;
}





 





// handlers.GrantItemsToUser = function(args)
// {
//     var GrantInventoryToUserResponse = server.GrantItemsToUser
//     ({
   
//     "PlayFabId" : currentPlayerId,
//     "ItemIds": args
   
//     });

//     return "Executed" + args;
// }

var grantedItems =[];

function GetItemsFromPlayer()
{
    var GetUserDataRequest = {
        "PlayFabId" : currentPlayerId,
        "Keys" :[
            "PlayerData"
        ]
    };

    var UserDataResult = server.GetUserDataResult(GetUserDataRequest);
    return JSON.stringify(UserDataResult.)
}

function GrantItemsToPlayer(args)
{

}
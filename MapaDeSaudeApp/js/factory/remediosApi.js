var remediosApi = function($http){

    var _getListarRemedios = function(){
        return $http.get(baseUrl + "/rest/remedios");
    }
    
    return{
        getListarRemedios: _getListarRemedios
    }
}
mapaDeSaudeApp.factory("remediosApi", remediosApi);
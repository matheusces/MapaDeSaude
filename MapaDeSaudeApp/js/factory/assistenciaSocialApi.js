var assistenciaSocialApi = function($http){
   
    var _getListarAssistenciasSociaisCras = function(){
        return $http.get(baseUrl + "/rest/assistenciasocial/cras");
    }
    
    var _getPesquisarAssistenciaSocialCrasPorId = function(idCras){
        return $http.get(baseUrl + "/rest/assistenciasocial/cras/id/" + idCras);
    }
    
    var _getPesquisarAssistenciaSocialCrasPorCoordenadas = function(latitude, Longitude, raio){
        return $http.get(baseUrl + "/rest/assistenciasocial/cras/latitude/" + latitude + "/longitude/" + longitude +"/raio/" + raio);
    }
    
    var _getListarAssistenciaSocialCreas = function(){
        return $http.get(baseUrl + "/rest/assistenciasocial/cras");
    }
    
    var _getPesquisarAssistenciaSocialCreasPorId = function(idCreas){
        return $http.get(baseUrl + "/rest/assistenciasocial/creas/id/" + idCreas);
    }
    
    var _getPesquisarAssistenciaSocialCreasPorCoordenadas = function(latitude, Longitude, raio){
        return $http.get(baseUrl + "/rest/assistenciasocial/creas/latitude/" + latitude + "/longitude/" + longitude +"/raio/" + raio);
    }
    
    return{
        getListarAssistenciasSociaisCras: _getListarAssistenciasSociaisCras,
        getPesquisarAssistenciaSocialCrasPorId: _getPesquisarAssistenciaSocialCrasPorId,
        getPesquisarAssistenciaSocialCrasPorCoordenadas: _getPesquisarAssistenciaSocialCrasPorCoordenadas,
        getListarAssistenciaSocialCreas: _getListarAssistenciaSocialCreas,
        getPesquisarAssistenciaSocialCreasPorId: _getPesquisarAssistenciaSocialCreasPorId,
        getPesquisarAssistenciaSocialCreasPorCoordenadas: _getPesquisarAssistenciaSocialCreasPorCoordenadas
    };
    
}

mapaDeSaudeApp.factory("assistenciaSocialApi", assistenciaSocialApi);
var estabelecimentoDeSaudeApi = function($http){

    var _getListarEstabelecimentos = function(){
        return $http.get(baseUrl + "/rest/estabelecimentos");
    }
    
    var _getPesquisarEstabelecimentosPorCoordenadas = function(latitude, longitude, raio){
        return $http.get(baseUrl + "/rest/estabelecimentos /latitude/" + latitude + "/longitude/" + longitude + "/raio/" + raio);
    }
    
    var _getPesquisarEstabelecimentosPorCodigoDaUnidade = function(codUnidade){
        return $http.get(baseUrl + "/rest/estabelecimentos/unidade/" 
+ codUnidade);
    }
    
    return{
        getListarEstabelecimentos: _getPesquisarEstabelecimentosPorCoordenadas,
        getPesquisarEstabelecimentosPorCoordenadas: _getPesquisarEstabelecimentosPorCoordenadas,
        getPesquisarEstabelecimentosPorCodigoDaUnidade: _getPesquisarEstabelecimentosPorCodigoDaUnidade
    }
}
mapaDeSaudeApp.factory("estabelecimentoDeSaudeApi", estabelecimentoDeSaudeApi);
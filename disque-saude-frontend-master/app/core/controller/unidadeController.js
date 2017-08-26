app.controller("unidadeController", function ($scope, $http, unidadeApi, $location) {

    $scope.media = null;
    $scope.boolean = false;


    $scope.pesquisaMediaPorPaciente = function (id) {
        unidadeApi.pesquisaMediaPaciente(id).then(function successCallback(response) {
            $scope.media = response.data.obj;
        }, function errorCallback(error) {
            console.log("Unidade Não Encontrada");
        });
    }

    $scope.unidades = [];

    $scope.procuraUS = function (bairro) {
        unidadeApi.pesquisaUnidSaude(bairro).then(function success(response) {
            $scope.unidades = [];
            $scope.unidades.push(response.data);
            console.log("Foram encontradas Unidades de saúde");
            console.log(response.data);
        }, function failed(error) {
            console.log("Erro na busca de unidades");
            console.log(error.data.errorMessage);
        });
    }

    $scope.voltar = function () {
        $location.path("/");

    }

     $scope.adicionaUnidadeDeSaude = function(unidade){
        unidadeApi.adicionaUnidadeDeSaude(unidade).then(function success(response){
            console.log(response.data)
        },function error(error){

        })
    }

    $scope.voltarAdm = function () {
        $location.path("/admin_menu")
    }

    $scope.taxa

    $scope.mediaMedicoPacienteEmUmaUnidade = function(unidadeBairro){
        unidadeApi.getMediaMedicoPaciente(unidadeBairro).then(function success(response){
            $scope.taxa = response.data;
        })
    }

});
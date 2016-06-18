function selecionaAba1() {
    $("#aba1-conteudo").show();
    $("#aba2-conteudo").hide();
    $("#aba2").removeClass("aba-selecionada");
    $("#aba1").addClass("aba-selecionada");

}

function selecionaAba2() {
    $("#aba1-conteudo").hide();
    $("#aba2-conteudo").show();
    $("#aba1").removeClass("aba-selecionada");
    $("#aba2").addClass("aba-selecionada");
}

function menuativo() {
    var $_GET = {};
    if (document.location.toString().indexOf('?') !== -1) {
        var query = document.location
                .toString()
                // get the query string
                .replace(/^.*?\?/, '')
                // and remove any existing hash string (thanks, @vrijdenker)
                .replace(/#.*$/, '')
                .split('&');

        for (var i = 0, l = query.length; i < l; i++) {
            var aux = decodeURIComponent(query[i]).split('=');
            $_GET[aux[0]] = aux[1];
        }
    }

    $(".menuItem").each(function (elemento) {
        if ($_GET['pagina'] == $(this).attr("name")) {
            $(this).addClass("menuativo");

        }
    });
    if (!$_GET['pagina']) {
        $("#home").addClass("menuativo");
    }
}
function MenuMobile() {
    if (!$(".trigger").hasClass("TriggerAtivo")) {
        $("#corpo").addClass("bodyMove");
        $(".trigger").addClass("TriggerAtivo");
    } else {
        $("#corpo").removeClass("bodyMove");
        $(".trigger").removeClass("TriggerAtivo");
    }


}

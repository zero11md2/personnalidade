$(function() {
    Fancybox.bind("[data-fancybox]", {});
    
    $("button.menu-suspenso-button").click(function() {
        $(this).toggleClass("ativo");
        $("#menu-suspenso").slideToggle();
    });

    $("div.accordion div.accordion-item button").click(function() {
        $(this).find("i").toggleClass("fa-rotate-90");
    });
});

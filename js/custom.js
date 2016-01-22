/**
 * Created by xi on 2015/11/10.
 */

$(document).ready(function(){

    var offsetDe = $("#designExploration").offset();
    var offsetMp = $("#mainProject").offset();
    //var offsetPa = 2835;
    var offsetPa = $("#partA").offset();
    //var offsetPb = 6085;
    var offsetPb = $("#partB").offset();
    var offsetPc = $("#partC2").offset();
    var offsetPort = $("#portfolio2").offset();
    var offsetCr = $("#courseReflection2").offset();

    //var offsetPc = 12955;
    //var offsetPort = 15306;
    //var offsetCr = 16462;
    $(window).resize(function() {
        offsetDe = $("#designExploration").offset();
        offsetMp = $("#mainProject").offset();
        offsetPa = $("#partA").offset();
        offsetPb = $("#partB").offset();
        offsetPc = $("#partC2").offset();
        offsetPort = $("#portfolio2").offset();
        offsetCr = $("#courseReflection2").offset();
    });


    $(window).scroll(function() {

        var scrollingDown = $(window).scrollTop()
        var scrolling = scrollingDown * .1;
        $("header").css({backgroundPosition:"0px -" + scrolling + "px"});

        if(scrollingDown > offsetDe.top && scrollingDown < offsetMp.top) {
            $("#display > li.de").css({opacity: "1"}, 100);
            $("#display > li.mp").css({opacity: "0"}, 100);
            $("#display > li#pa").css({opacity: "0"}, 100);
            $("#display > li#pb").css({opacity: "0"}, 100);
            $("#display > li#pc").css({opacity: "0"}, 100);
            $("#display > li.port").css({opacity: "0"}, 100);
            $("#display > li.cr").css({opacity: "0"}, 100);
        }
        if(scrollingDown > offsetMp.top && scrollingDown < offsetPort.top) {
            $("#display > li.de").css({opacity: "0"}, 100);
            $("#display > li.mp").css({opacity: "1"}, 100);
            $("#display > li.port").css({opacity: "0"}, 100);
            $("#display > li.cr").css({opacity: "0"}, 100);
        }
        if(scrollingDown > offsetPa.top && scrollingDown < offsetPb.top) {
            $("#display > li.de").css({opacity: "0"}, 100);
            $("#display > li.mp").css({opacity: "1"}, 100);
            $("#display > li#pa").css({opacity: "1"}, 100);
            $("#display > li#pb").css({opacity: "0"}, 100);
            $("#display > li#pc").css({opacity: "0"}, 100);
            $("#display > li.port").css({opacity: "0"}, 100);
            $("#display > li.cr").css({opacity: "0"}, 100);
        }
        if(scrollingDown > offsetPb.top && scrollingDown < offsetPc.top) {
            $("#display > li.de").css({opacity: "0"}, 100);
            $("#display > li.mp").css({opacity: "1"}, 100);
            $("#display > li#pa").css({opacity: "0"}, 100);
            $("#display > li#pb").css({opacity: "1"}, 100);
            $("#display > li#pc").css({opacity: "0"}, 100);
            $("#display > li.port").css({opacity: "0"}, 100);
            $("#display > li.cr").css({opacity: "0"}, 100);
        }
        if(scrollingDown > offsetPc.top && scrollingDown < offsetPort.top) {
            $("#display > li.de").css({opacity: "0"}, 100);
            $("#display > li.mp").css({opacity: "1"}, 100);
            $("#display > li#pa").css({opacity: "0"}, 100);
            $("#display > li#pb").css({opacity: "0"}, 100);
            $("#display > li#pc").css({opacity: "1"}, 100);
            $("#display > li.port").css({opacity: "0"}, 100);
            $("#display > li.cr").css({opacity: "0"}, 100);
        }
        if(scrollingDown > offsetPort.top && scrollingDown < offsetCr.top) {
            $("#display > li.de").css({opacity: "0"}, 100);
            $("#display > li.mp").css({opacity: "0"}, 100);
            $("#display > li#pa").css({opacity: "0"}, 100);
            $("#display > li#pb").css({opacity: "0"}, 100);
            $("#display > li#pc").css({opacity: "0"}, 100);
            $("#display > li.port").css({opacity: "1"}, 100);
            $("#display > li.cr").css({opacity: "0"}, 100);
        }
        if(scrollingDown > offsetCr.top) {
            $("#display > li.de").css({opacity: "0"}, 100);
            $("#display > li.mp").css({opacity: "0"}, 100);
            $("#display > li#pa").css({opacity: "0"}, 100);
            $("#display > li#pb").css({opacity: "0"}, 100);
            $("#display > li#pc").css({opacity: "0"}, 100);
            $("#display > li.port").css({opacity: "0"}, 100);
            $("#display > li.cr").css({opacity: "1"}, 100);
        }


    });

    $("#extend").click(function() {
        //$("#header").css({width: "80%"});
        $(".header").addClass("headerExtend");
        $("#extend_li").css({display: "none"});
        $("#collapse_li").css({display: "inline-block"});
        $("#replace").replaceWith("<h1 id='replace'><strong>I am Xi Chen</strong>, a international student <br/>undertaking a Masters of Interaction Design at UQ.<br/>I am very good at <strong>UI&UX</strong> design<br />and has more than <strong>7 years painting experience</strong>.<br/> <strong>This portfolio</strong> documents my process and progress for a Design Computing Studio 1.<br/>If you get interested in my work,<br/>please <strong>feel free to contact me with following links</strong> </h1>");
    });

    $("#collapse").click(function() {
        $(".header").removeClass("headerExtend");
        $("#extend_li").css({display: "inline-block"});
        $("#collapse_li").css({display: "none"});
        $("#replace").replaceWith("<h1 id='replace'><strong>I am Xi Chen</strong>, a student <br/>undertaking a Masters Degree at UQ.<br/>I'm a Interaction Designer.</h1>")
    });


    $("#interaction > li.de").click(function() {

        offsetDe = $("#designExploration").offset();
        $('body,html').animate({
            scrollTop: offsetDe.top
        }, 800);
    });

    $("#interaction > li.mp").click(function() {

        offsetMp = $("#mainProject").offset();
        $('body,html').animate({
            scrollTop: offsetMp.top
        }, 1600);
    });

    $("#interaction > li#pa").click(function() {

        offsetPa = $("#partA").offset();
        $('body,html').animate({
            scrollTop: offsetPa.top
        }, 800);
    });

    $("#interaction > li#pb").click(function() {
        offsetPb = $("#partB").offset();
        $('body,html').animate({
            scrollTop: offsetPb.top
        }, 1600);
    });

    $("#interaction > li#pc").click(function() {
        offsetPc = $("#partC2").offset();
        $('body,html').animate({
            scrollTop: offsetPc.top
        }, 1600);
    });

    $("#interaction > li.port").click(function() {
        offsetPort = $("#portfolio2").offset();
        $('body,html').animate({
            scrollTop: offsetPort.top
        }, 1000);
    });

    $("#interaction > li.cr").click(function() {
        offsetCr = $("#courseReflection2").offset();
        $('body,html').animate({
            scrollTop: offsetCr.top
        }, 800);
    });


    $("#interaction > li.de").hover(function() {
        $("#display > li.de").animate({opacity: 1}, 200);
    }, function(){
        $("#display > li.de").animate({opacity: 0}, 200);
    });

    $("#interaction > li.mp").hover(function() {
        $("#display > li.mp").animate({opacity: 1}, 200);
    }, function(){
        $("#display > li.mp").animate({opacity: 0}, 200);
    });

    $("#interaction > li#pa").hover(function() {
        $("#display > li#pa").animate({opacity: 1}, 200);
    }, function(){
        $("#display > li#pa").animate({opacity: 0}, 200);
    });

    $("#interaction > li#pb").hover(function() {
        $("#display > li#pb").animate({opacity: 1}, 200);
    }, function(){
        $("#display > li#pb").animate({opacity: 0}, 200);
    });

    $("#interaction > li#pc").hover(function() {
        $("#display > li#pc").animate({opacity: 1}, 200);
    }, function(){
        $("#display > li#pc").animate({opacity: 0}, 200);
    });

    $("#interaction > li.port").hover(function() {
        $("#display > li.port").animate({opacity: 1}, 200);
    }, function(){
        $("#display > li.port").animate({opacity: 0}, 200);
    });

    $("#interaction > li.cr").hover(function() {
        $("#display > li.cr").animate({opacity: 1}, 200);
    }, function(){
        $("#display > li.cr").animate({opacity: 0}, 200);
    });

    //$($("#interaction > li.de").mouseout(function() {
    //    $("#display > li.de").css({visibility: "hidden"});
    //});



});
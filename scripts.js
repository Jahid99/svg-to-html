//それぞれのPathのためにCheckboxを作ります。
var panel = $("svg");
console.log(panel);
var length = panel.find("path").length;
var data = '<br>';
for (var i = 0; i < length; i++) {
    if (i % 6 == 0 && i != 0) {
        data += '<hr>';
    }
    data += '<input type="checkbox" id="' + panel.find("path")[i].attributes[2].nodeValue + '">&nbsp;<label for="' + panel.find("path")[i].attributes[2].nodeValue + '">' + panel.find("path")[i].attributes[2].nodeValue + '</label>&nbsp;&nbsp;&nbsp;&nbsp;';
}
$("#checkbox").html(data);

//Click EventがあればPathの色がかわります。
$('input').click(function() {
    if ($('#' + this.id).is(":checked")) {
        $('[name="' + this.id + '"]').css("fill", "#f56d64");
    } else {
        $('[name="' + this.id + '"]').css("fill", "#7c7c7c");
    }
});

// 直接地図にCLICK　Eventがある場合はPathの色が変わります。
$('path').click(function() {
    if (this.style.fill == '') {
        $('#' + this.id).css("fill", "#f56d64");
    } else {
        $('#' + this.id).css("fill", "");
    }

});
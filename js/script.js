$(document).ready(function () {
    //создаем поле
    createArea();
    var colorBoxThis;
    var colorBoxVarArr = new Array();

    $('.box').mouseup(function () {
        $(this).css('background-color', colorBoxThis);
        var a = varRate(parseInt($(this).parent().attr("id")), parseInt($(this).attr('id')));
        a.forEach(function (item, arr) {
            if (colorBoxThis === 'rgb(0, 0, 0)') {
                $(item).css('background-color', 'rgb(255, 250, 250)');
            }
            if (colorBoxThis === 'rgb(255, 250, 250)') {
                $(item).css('background-color', 'rgb(0, 0, 0)');
            }
        });

    });
    $('.box').mousedown(function () {
        colorBoxThis = $(this).css('background-color');
        $(this).css('background-color', 'blue');
        varRate(parseInt($(this).parent().attr("id")), parseInt($(this).attr('id')));
        //colorBoxVarArr.splice(0, colorBoxVarArr.length - 1);
    });
});

//функция рисования поля
function createArea() {
    for (let i = 0; i < 8; i++) {
        $('#chessArea').append('<div class="rowbox" id="' + i + '"></div>');
        //$('#chessArea').append('<div class="rowbox" id="rowbox' + i + '"></div>');
        for (let j = 0; j < 8; j++) {
            let el = 'div#' + i + '.rowbox';
            $(el).append('<div class="box" id="' + j + '"></div>');
        }
    }
}
//функция проверки направлений

function varRate(rowid, boxid) {
    var colorBoxVarArr = [];
    if (rowid + 2 <= 7) {
        if (boxid + 1 <= 7) {
            $('div#' + (rowid + 2) + '.rowbox div#' + (boxid + 1) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid + 2) + '.rowbox div#' + (boxid + 1) + '.box');
        }
        if (boxid - 1 >= 0) {
            $('div#' + (rowid + 2) + '.rowbox div#' + (boxid - 1) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid + 2) + '.rowbox div#' + (boxid - 1) + '.box');
        }
    }
    if (rowid + 1 <= 7) {
        if (boxid + 2 <= 7) {
            $('div#' + (rowid + 1) + '.rowbox div#' + (boxid + 2) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid + 1) + '.rowbox div#' + (boxid + 2) + '.box');
        }
        if (boxid - 2 >= 0) {
            $('div#' + (rowid + 1) + '.rowbox div#' + (boxid - 2) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid + 1) + '.rowbox div#' + (boxid - 2) + '.box');
        }
    }
    //пароверяем направление низ
    if ((rowid - 2) >= 0) {
        if (boxid + 1 <= 7) {
            $('div#' + (rowid - 2) + '.rowbox div#' + (boxid + 1) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid - 2) + '.rowbox div#' + (boxid + 1) + '.box');
        }
        if (boxid - 1 >= 0) {
            $('div#' + (rowid - 2) + '.rowbox div#' + (boxid - 1) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid - 2) + '.rowbox div#' + (boxid - 1) + '.box');
        }
    }
    if ((rowid - 1) >= 0) {
        if (boxid + 2 <= 7) {
            $('div#' + (rowid - 1) + '.rowbox div#' + (boxid + 2) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid - 1) + '.rowbox div#' + (boxid + 2) + '.box');
        }
        if (boxid - 2 >= 0) {
            $('div#' + (rowid - 1) + '.rowbox div#' + (boxid - 2) + '.box').css('background-color', 'green');
            colorBoxVarArr.push('div#' + (rowid - 1) + '.rowbox div#' + (boxid - 2) + '.box');
        }
    }
    return colorBoxVarArr;
}
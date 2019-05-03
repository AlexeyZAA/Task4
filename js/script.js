$(document).ready(function () {
    //создаем поле
    createArea();
    //храним значение цвета/индекса нажатой кнопки для проверки при отжима кнопки мыши
    var colorBoxThis;
    var boxIndex;
    //обработчик нажатия кнопки мыши на квадрате
    $('.box').mousedown(function () {
    //запоминаем в переменную цвет нажатого квадрата, подсвечиваем другим цветом, вызываем функцию раскраски возможных ходов
        colorBoxThis = $(this).css('background-color');
        $(this).css('background-color', 'blue');
        varRate(parseInt($(this).parent().attr("id")), parseInt($(this).attr('id')));
    });
    //обработчик отжатия кнопки мыши на квадрате
    $('.box').mouseup(function () {
        //возвращаем прежний цвет нажатого квадрата из переменной
        $(this).css('background-color', colorBoxThis);
        //получаем квадраты которые были подсвечены, если нажата черная то квадраты будут белые, и наоборот
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
});
//функция рисования поля
function createArea() {
    //рисуем доску 8на8 блоками
    for (let i = 0; i < 8; i++) {
        $('#chessArea').append('<div class="rowbox" id="' + i + '"></div>');
        for (let j = 0; j < 8; j++) {
            let el = 'div#' + i + '.rowbox';
            $(el).append('<div class="box" id="' + j + '"></div>');
        }
    }
}
//функция проверки направлений

function varRate(rowid, boxid) {
    //получаем ид строки и колонки, проверяем какие ходы конем попадают в поле, красим их подсветкой, возвращаем ид
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
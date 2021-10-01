var chance = 0;

$('.square').click(function() {
    var legal_moves_array = legal_moves();
    var clicked_el = $(this)[0].id[6].toString();
    if ($.inArray(clicked_el, legal_moves_array) >= 0) {
        if (chance%2 == 0) {
            $(this).children("div")[0].classList.add("o");
        }
        else {
            $(this).children("div")[0].classList.add('x');
        }
        chance = chance + 1;
    }
    winner();
});

function reset_board() {
    $('.square div').removeClass();
    $('.game-status')[0].innerHTML = '';
}

$('.reset').click(function() {
    chance = 0;
    reset_board();
})

function winner() {
    var ways_to_win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    var current_board = board_position();

    for (var i = 0; i < ways_to_win.length; i++) {
        row = ways_to_win[i];
        if (current_board[row[0]] == current_board[row[1]] && current_board[row[1]] == current_board[row[2]] && current_board[row[2]] != '') {
            var winner = current_board[row[0]];
            $('.game-status')[0].innerHTML = 'Player ' + winner.toUpperCase() + ' won';
            // alert('winner: ' + winner);
        }
    }
    if ($.inArray('', current_board) == -1) {
        $('.game-status')[0].innerHTML = 'Game Tie';
    }
}

function board_position() {
    var pieces = [];
    for(i=0; i<9; i++) {
        var el = '#place-' + i;
        pieces.push($(el)[0].children[0].classList.value);
    }
    return pieces;
}

function legal_moves() {
    var moves = [];
    $('.square').each(function(i, obj) {
        var classes = obj.children[0].classList.value;
        if (classes == '') {
            moves.push(obj.id[6]);
        }
    })
    return moves;
}


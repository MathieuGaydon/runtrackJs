$('#shuffleButton').click(function() {
    var container = $('#container');
    var images = container.children();
    while (images.length) {
        container.append(images.splice(Math.floor(Math.random() * images.length), 1));
    }
});

$('#container').sortable({
    update: function(event, ui) {
        checkOrder();
    }
});

function checkOrder() {
    var correctOrder = ['arc1', 'arc2', 'arc3', 'arc4', 'arc5', 'arc6'];
    var currentOrder = $('#container').children().map(function() {
        return $(this).attr('id');
    }).get();

    if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) {
        $('#message').text('Vous avez gagné').css('color', 'green');
    } else {
        $('#message').text('Vous avez perdu').css('color', 'red');
    }
}

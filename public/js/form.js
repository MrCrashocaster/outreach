
$(function () {

    // Submit Button NOT WORKING ******

    $('#reused_form').submit(function (e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function () {
            $btn = $(this);
            $btn.text('Sending ...');
        });

        $.ajax({
            type: "FORM",
            url: 'handler.php',
        });

    });
});

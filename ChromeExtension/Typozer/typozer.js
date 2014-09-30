(function($) {
    $(function() {
        $(document).keypress(function (e) {
            if (Math.random() < 0.05 && $(e.target).val()) {
                e.preventDefault();
                var rndCode = Math.round(Math.random() * 57 + 65);
                var c = String.fromCharCode(rndCode);
                var txt = $(e.target).val() + c;
                $(e.target).val(txt);
            }
        });
    });
})(jQuery);
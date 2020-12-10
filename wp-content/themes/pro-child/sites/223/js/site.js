(function($) {
    $(document).ready( function() {
        $('form.form-search').each( function() {
            var form_action = $(this).attr('action');

            if( form_action && sen_data.home_url ) {
                var form_action_check = form_action.replace( sen_data.home_url, '' );
                var search_url = sen_data.home_url + 'search';

                if( form_action_check === '' || form_action_check === '/' ) {
                    $(this).attr( 'action', search_url );
                }
            }
        });
    });
})(jQuery);

(function ($) { 
  // Code that uses jQuery's $ can follow here..
  
  Drupal.behaviors.BlockVisibility = {
    attach: function (context, settings) {
        $.ajax({
        url: Drupal.settings.basePath + 'blockgenerator/get/country',
        method: 'POST',
        dataType: 'json',
        success: function (data) {
            if (data.country_code) {
                $('.allow_all:not(.hide_' + data.country_code + ')').show();
                $('.hide_all.allow_' + data.country_code).show();
            } else {
                $('.allow_all').show();
            }
        }
    });
    }
  }
})(jQuery);
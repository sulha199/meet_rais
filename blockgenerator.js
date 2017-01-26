
(function ($) { 
  // Code that uses jQuery's $ can follow here..
  $.ajax({
        url: Drupal.settings.basePath + 'blockgenerator/get/country',
        method: 'POST',
        dataType: 'json',
        success: function (data) {
            if (data.country_code) {
                $('.allow_all:not(.hide_' + data.country_code + ')').removeClass('element-invisible');
                $('.hide_all.allow_' + data.country_code).removeClass('element-invisible');
            } else {
                $('.allow_all').removeClass('element-invisible');
            }
        }
    });
})(jQuery);
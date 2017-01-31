
(function ($) { 
  // Code that uses jQuery's $ can follow here..
    $.ajax({
        url: Drupal.settings.basePath + 'blockgenerator/get/country',
        method: 'POST',
        dataType: 'json',
        success: function (data) {
            if (data.country_code) {
                $('.allow_all:not(.hide_' + data.country_code + ')').removeClass('element-hidden');
                $('.hide_all.allow_' + data.country_code).removeClass('element-hidden');
            } else {
                $('.allow_all').removeClass('element-hidden');
            }

            //fix owlcarousel after re-showing element
            $('.owl-carousel').each(function() {
                if($(this).closest('.element-hidden').length == 0) {
                    $(this).trigger('destroy.owl.carousel');
                    $(this).html($(this).find('.owl-stage-outer').html()).removeClass('owl-loaded');
                    $(this).owlCarousel(Drupal.settings.owlcarousel[this.id].settings);
                }
            })
            
        }
    });
})(jQuery);
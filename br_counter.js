jQuery.fn.br_counter = function(options) {
	function guid() {
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}

	function s4() {
	  return Math.floor((1 + Math.random()) * 0x10000)
	    .toString(16)
	    .substring(1);
	}

	var settings = jQuery.extend({
        // These are the defaults.
        textNext: 	'+',
        textPrev: 	'-',
        colorNext: 	'#49D260',
        colorPrev: 	'#FF9C85',
        fontColor: 	'white',
        minVal: 	0,
        maxVal: 	100,
        value: 		0,
        step: 		1,
        disableCss: false
    }, options);

	if (settings.minVal > settings.maxVal) {
		console.log('Min val is greater then max val. ERRROR');
		return false;
	}
	if (settings.value < settings.minVal) {
		settings.value = settings.minVal;
	}
	if (settings.value > settings.maxVal) {
		settings.value = settings.maxVal;
	}

	var id =  guid();

	this.val(settings.value);
    this.attr('readonly', true);
    this.attr('data-id', id);
    this.addClass('hasBrCounter');
    this.before('<div class="brCounterPrev counterControl" data-id="'+id+'">'+settings.textPrev+'</div>');
    this.after('<div class="brCounterNext counterControl" data-id="'+id+'">'+settings.textNext+'</div>');

    if (!settings.disableCss) {
        jQuery('.brCounterPrev').css({
            color: settings.fontColor,
            backgroundColor: settings.colorPrev
        });

        jQuery('.brCounterNext').css({
            color: settings.fontColor,
            backgroundColor: settings.colorNext
        });
    }

    jQuery(document).on('click', '.brCounterPrev[data-id="'+id+'"]', function(){
    	var a = parseInt(jQuery('input[data-id="'+id+'"]').val());
    	if (a - settings.step <= settings.minVal) {
    		a = settings.minVal;
    	} else {
    		a = a - settings.step;
    	}
    	jQuery('input[data-id="'+id+'"]').val(a);
    }); 

    jQuery(document).on('click', '.brCounterNext[data-id="'+id+'"]', function(){
    	var a = parseInt(jQuery('input[data-id="'+id+'"]').val());
    	if (a + settings.step >= settings.maxVal) {
    		a = settings.maxVal;
    	} else {
    		a = a + settings.step;
    	}
    	jQuery('input[data-id="'+id+'"]').val(a);
    }); 

	return this;
}
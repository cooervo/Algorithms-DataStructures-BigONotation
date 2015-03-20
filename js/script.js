//=======Drop down menu ================
$("#menu-button").on("click", function(e){
	
	e.stopImmediatePropagation();
	var $aside = $("aside");
	$aside.css("height", "25em");
	$aside.css("top", "-9em");
	$aside.css("z-index", "10em");
	$aside.css("margin-bottom", "-8em");
	 
	var $logo = $("#logo");
	$logo.css("margin-bottom","1em");
	
	var $nav = $("#responsive-nav");
	$nav.css("display", "block");
	$nav.css("margin-top", "8em");;
	
});

//========Table sorter==================
$(function() {
	$("#DS-table").tablesorter();
});

$(function() {
	$("#sorting-table").tablesorter();
});

$(".sort-table").tablesorter({
	textExtraction : function(node) {
		var attr = $(node).attr('data-sort-value');
		if (typeof attr !== 'undefined' && attr !== false) {
			return attr;
		}
		return $(node).text();
	}
});
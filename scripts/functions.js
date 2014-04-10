$(document) .ready (function()
	{	

	// this hides items for show/hide actions so that if js is off, they can still be used.

		 hide_show_too('#inside_page_search');
		 hide_show_too('.window_shade');
		 hide_show_too('.window_shade_too');	
		 hide_show_too('#toolbox_login_mode');		
		 hide_show_too('#toolbox_login_reveal_container');
		 

		
	// function that hides or shows 
	// passses name of item clicked on it. looks for name, which is the id of the item to be shown, hidden
	// initial visibility doesn't matter. It does the opposite of whatever its state is.
	
	function hide_show (clicked)
		{	
		
		var target = '#' + $(clicked) .attr ('name');
		var visible = $(target) .is(":visible");

			if (visible == true)
			{
			$(target) .fadeOut (100);	
			}
		
			if (visible == false)
			{
			$(target) .fadeIn (100);		
			}

		}
		
	// second version of a function that hides or shows 
	// passes an argument that includes the name of the item that you want to show or hide.
	// initial visibility doesn't matter. It does the opposite of whatever its state is.		
		
	
		function hide_show_too (target, time, repeat)
		{	
	
			if(typeof time === 'undefined'){
				time = 0
			 }
		
			else
				{
				time=time
				}
			
		var visible = $(target) .is(":visible");

				console.log ('v' + visible);
				
			if (visible == true)
			{
			$(target) .fadeOut (time);	
			}
		
			if (visible == false)
			{
			$(target) .fadeIn (100);		
			}

		}	
		
		
		function toggle_header_height (div)
			{
			var width = $(div) .width ();
			console.log(width);	

				$(div).animate({
					height: "toggle"
				  }, 150, function() {
					// Animation complete.
				  });					
			}

	// OPEN AND CLOSE TOOLBOX

			
		$('#toolbox_tab, #toolbox_reveal') .click (function()
			{
			hide_show_too ('#toolbox', 75);
			hide_show_too ('#toolbox_reveal_container', 25);
			
			var toolbox_menu_vis =  $('#toolbox_menu_hidden_reveal_shade').is(':visible');	
			
			if ( toolbox_menu_vis == true)
			{
			 $('#toolbox_menu_hidden_reveal_shade').hide();
			}	
			
			});
			
			
		//OPEN AND CLOSE LOG IN BAR 
		$('#toolbox_login_tab, #login_cancel') .click (function()
			{
			console.log('click');
			hide_show_too ('#toolbox_login_mode', 75);
			hide_show_too ('#toolbox_login_reveal_container', 25);
			clearforms()
			
			});	
		
		
	// SWITCHES BETWEEN VIEWS IN THE DOCUMENT TABLE	
		
		$('.switcher') .click (function()
		{	
		var myClass = $('#document_list').attr("class");
		var button = $(this).attr("title");

		$('.switcher') .removeClass ('clicked');		
		$(this) .addClass ('clicked');
	
		console.log(button);
	
		myClass = myClass.replace(/dataTable/ , '');
		myClass = myClass.replace(/\s/ , '');
		
		
		
		if (myClass != 'list_view' & button != 'grid')
			{
			$('#document_list') .fadeOut (0);
			$('#document_list') .removeClass ('grid_view') .addClass ('list_view');	
			$('#document_list') .fadeIn (100);	
			
			console.log(myClass);
			}
			
			if (myClass != 'grid_view'  & button != 'list')
			{
			$('#document_list') .fadeOut (0);
		$('#document_list') .removeClass ('list_view') .addClass ('grid_view');	
		$('#document_list') .fadeIn (100);	
			
			console.log(myClass);
			}	
			
			
			
			});
		
	
	// clears forms when you hit the cancel button
	
	function clearforms()
		{
		$('input[type=text], textarea, input[type=password]').val("");
		}
	
	function clearformscollapse(target)
		{
		$("input[type=text], textarea").val("");
		hide_show_too (target, 150)
		countertoo = 0;
		}

	$('.clear_forms_collapse') .click (function()
		{
		target= '#' + $(this) .attr ('id') + '_shade';
		clearformscollapse(target)
		});
	
	
	$('.clear_forms') .click (function()
		{
		clearforms()
		});
	
	
	//this triggers window shade action on THE credit card ccv number. 
	
	$('#CCV_explainer, #CCV_image_close, #CCV_image') .click (function()
		{	
		hide_show(this);	
		});
	
	
	// this triggers the windowshade action on the search box at the top of the inside page header
	
	$('#search_icon, #close_icon') .click (function()
		{
		toggle_header_height('#inside_page_search');
		hide_show_too('#search_icon');
		hide_show_too('#close_icon');
		});	
		
		
	// this triggers the window shade action of the site nav on mobile.
	
	$('#link_nav') .click (function()
		{
		toggle_header_height('#inside_nav');
		hide_show_too('#close_menu_icon');
		hide_show_too('#menu_icon');
		});	
		
		
		//this is for the submit page 
		// it hides the chooser box with the two buttons 
		// based on the button clicked, it shows the correct action forms.
		
		$('#create_new, #fork') .click (function()
		{
		hide_show_too('.top_info_container', 150, function()
		{
			var target_div = '#' + $(this) .attr ('id') + '_shade';
			console.log(counter);

		
		if (counter == 0)
		{
		toggle_header_height(target_div);
		counter ++;
		}
		});
		return false; 
		});		
		
		
		
	// this triggers generic window shade action sitewide
	// 
	
		var counter = 0;	
	$('.window_shade_trigger') .click (function()
		{
		var target_div = '#' + $(this) .attr ('id') + '_shade';

		
		if (counter == 0)
		{
		toggle_header_height(target_div);
		counter ++;
		}
		
		
		else
		{
		toggle_header_height(target_div);
		counter = 0;
		}

		});	
		

	// this is the same as the generic window shade above but it trigger the window shade once. It doesn't close it again.

		countertoo = 0;
	$('.window_shade_trigger_too') .click (function()
		{
		var target_div = '#' + $(this) .attr ('id') + '_shade';

		
		if (countertoo == 0)
		{
		toggle_header_height(target_div);
		countertoo ++;
		}


		});	
		
			
		
	
		
});
		
		
		
	
	
	
	//resizes input text box on review page to show all the text 
	
	/*
			$('#request_detail_review').css('height','auto')
		    var text = jQuery('#request_detail_review').val(),
            // look for any "\n" occurences

            matches = text.match(/\n/g),
            breaks = matches ? matches.length : 2;

        jQuery('#request_detail_review').attr('rows',breaks + 3);
	
	     //       console.log(text);
		

	
	
	
*/
function menu(scroll_position, menu_height)
		{		
		if (scroll_position	> 100 && menu_status==0)
		{

		
		
		$( "#menu" ).animate({
		top: '0'
		}, 200, function() {
		menu_status = 1;
		});		
		
		}
		
		if (scroll_position<100 && menu_status==1)
		{
		

		$( "#menu" ).animate({
		top: '-28'
		}, 200, function() {
		menu_status = 0;
		});					

			
		}

		}	
	


function menu_resizer(resize, menu)
	{
		//	if the menu us open when someone resizes the window, it goes way.
			
			if (resize >=690 & menu == true)
			{
			 $('#toolbox_menu_hidden_reveal_shade').hide();
			}	
			
				console.log('works');
	}

	
$( window ).resize(function() {
  	
  	var resize = $(window) .width();
  	
  	// checks if the toolbox menu is open or not which is passes to to menu resizer
   
   var toolbox_menu_visible =  $('#toolbox_menu_hidden_reveal_shade').is(':visible');	
	
	menu_resizer(resize, toolbox_menu_visible);	
  
});


	
	
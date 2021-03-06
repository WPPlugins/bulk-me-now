/**
 * Plugin:			Bulk Me Now!
 * Plugin URI:		http://metamorpher.net/bulk-me-now/
 * Description:		Adds a Contact Form Module for your blog, so you don't get your contact form into your e-mail but your WP admin area instead.
 * Author:			mEtAmorPher
 * Author URI:		http://metamorpher.net/
 * Version:			2.0
 * Text Domain:		bulk
 * Domain Path:		/lang
 *
 * Copyright 2014  mEtAmorPher  (email : metamorpher.py@gmail.com)
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as 
 * published by the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @package bulk-me-now
 */

jQuery(function($){
	
	$( ".delete-message, .empty-trash" ).click(function( e ){
		//e.preventDefault();
		if( confirm( $( this ).data( 'confirm' ) ) )
			return true;
		else
			return false;
	});
	
	
	$( "form#messages-form" ).submit(function(){
		if( $( 'select[name="action"]' ).val() == "delete" )
		{
			if( confirm( $( 'input[name="delete_all"]' ).val() ) )
				return true;
			else
				return false;
		}
		
		return true;
	});
	
	$( ".bmn-credits" ).click(function( e ){
		e.preventDefault();
		$( "#about-board" ).fadeIn().find( ".close" ).click(function(e){
			e.preventDefault();
			$( "#about-board" ).fadeOut();
		});
	});
	
	$( ".bmn-restore" ).click(function( e ){
		//e.preventDefault();
		if( confirm( $( this ).data( 'confirm' ) ) )
			return true;
		else
			return false;
	});
		
});
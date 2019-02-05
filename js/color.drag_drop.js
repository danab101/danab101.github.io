
var colorCount = 0;
var TotalColors = 11;
$(document).ready( suffleColors );

function suffleColors() {


// Reset to default
colorCount = 0;
$('#colorQueue').html( '' );
$('#colorSlots').html( '' );

// Create the color queue with the color codes
var colorCodes = [ '5F64CC', '4C97E4', '58BA67', 'ED7D50', 'DE5858', 'BB5355', 'A95053', '984E52', '874A4F', '77474B','66454A', '5E444A'];
var colors = [ 'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11', 'B12' ];
var wavelg = [ '430 - 450 nm', '450 - 510 nm', '530 - 590 nm', '640 - 670 nm', '850 - 880 nm', '1570 - 1650 nm', '2110 - 2290 nm', '500 - 680 nm', '1360 - 1380 nm', '10,600 - 11,190 nm', '11,500 - 12,510 nm', 'B12' ];
//colorCodes.sort( function() { return Math.random() - .5 } );

for ( var i = 0; i < TotalColors; i++ ) {
$('<div class="tooltip" style="background-color:'+ '#' + colorCodes[i] +'; text-align:center; " <span>' + colors[i] + '</span> <span class="tooltiptext">' + wavelg[i] +'</span> </div>').data( 'color', colorCodes[i] ).attr( 'id', colorCodes[i] ).appendTo( '#colorQueue' ).draggable( {
containment: '#content',
stack: '#colorQueue div',
cursor: 'move',
revert: true
} );
}

// Create the color slots with color codes and color names
var tempColorCodes = [ '5F64CC', '4C97E4', '58BA67', 'ED7D50', 'DE5858', 'BB5355', 'A95053', '984E52', '874A4F', '77474B','66454A','5E444A' ];
var colors = [ 'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11', 'B12' ];
for ( var i = 0; i < 3; i++ ) {
$('<div>' + '</div>').data( 'color', tempColorCodes[i] ).appendTo( '#colorSlots' ).droppable( {
accept: '#colorQueue div',
hoverClass: 'hovered',
drop: handleColorDrop
} );
}

}

function handleColorDrop( event, ui ) {
var slotNumber = $(this).data( 'color' );
var colorNumber = ui.draggable.data( 'color' );

// If the color was dropped to the correct slot,
// position it directly on top of the dashed slot
// and prevent it being dragged again
//if ( slotNumber === colorNumber ) {
//if dropped on correct slot then hide the error message box
$('#errorMsg').hide();
//disable draggable
ui.draggable.draggable( 'disable' );
//disable droppable
$(this).droppable( 'disable' );
ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
ui.draggable.draggable( 'option', 'revert', false );
//track how many colors have been dropped on the slots
colorCount++;
// } else {
// //show the error message if correct slot not selected for drop
// $('#errorMsg').show();
// }

// If all the colors have been placed correctly then display a message
// if ( colorCount == TotalColors ) {
// $('#successMsg').show();
// $('#successMsg').animate( {
// left: '50%',
// top: '50%',
// margin: '-50px 0 0 -200px',
// width: '400px',
// height: '100px',
// opacity: 1
// } );
// }

}

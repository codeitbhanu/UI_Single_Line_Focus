var itemfocus = 0;
var viewfocus = 0;
var rowfocus = 0;

var itemWidth = 50;

var currViewMin = 0;
var currViewMax = 3;

var minItemBound = 0;
var maxItemBound = 12;

var ele = 'content-';

var shiftView = function(direction) {
    //opp. move if touches edges
    var rowLeft = $('#row').offset().left;
    console.log('rowLeft: ' + rowLeft);
    $('#row').offset({ left: rowLeft - (itemWidth * direction) });
}


var shiftFocus = function(direction) {
    if (direction > 0 && itemfocus < maxItemBound) {
        //right
        $('#' + ele + itemfocus).removeClass('infocus');
        ++itemfocus;
        
        if (itemfocus > currViewMax) {
            //shift view right
            ++currViewMax; ++currViewMin;
            shiftView(direction);
        } 
        
        $('#' + ele + itemfocus).addClass('infocus');
    } else if (direction < 0 && itemfocus > minItemBound) {
        //left
        $('#' + ele + itemfocus).removeClass('infocus');
        --itemfocus;
        
        if (itemfocus < currViewMin) {
            //shift view left
            --currViewMin; --currViewMax;
            shiftView(direction);
        }
        
        $('#' + ele + itemfocus).addClass('infocus');
    } else {
        console.log('index out of bound!');
    }
}




var callLeft = function() {
    console.log('callLeft called...');
    shiftFocus(-1);
}

var callRight = function() {
    console.log('callRight called...');
    shiftFocus(1);
}
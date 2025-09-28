const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};

//DOT NOTATION for keys
palette.red; //'#eb4d4b'

//SQUARE BRACKET NOTATION for values
palette['yellow']; //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = 'blue';
palette[mysteryColor]; //'#30336b'


const nums = {
	100 : 'one hundred'
}
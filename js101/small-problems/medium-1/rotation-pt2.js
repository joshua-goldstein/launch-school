rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


function rotateRightmostDigits(number, count) {
	let str_array = String(number).split('');

	if (count > str_array.length ) {
		console.log('Something went wrong');
		return;
	}

	let intact_offset = str_array.length - count;
	str_array.slice(0, )

}
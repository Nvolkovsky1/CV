$(document).ready(function () {
	$('#photo_button').click(function () {
		console.log($(this).parent('img'));
		$(this).parent().find('img').attr('src', 'http://klopik.com/uploads/posts/2015-02/1424727165_4.jpg');
	});
});

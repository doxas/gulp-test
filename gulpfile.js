
var gulp      = require('gulp');
var webServer = require('gulp-webserver');

gulp.task('default', function(){
	console.log('default task running!');
});

gulp.task('server', function(){
	gulp.src('app')
	.pipe(webServer({
		livereload: true
	}));
});

gulp.task('default', ['server']);



var gulp = require('gulp');
var bsync = require('browser-sync');

// browser sync
gulp.task('bs-sync', function(){
	bsync.init(
		['app/*.js', 'app/*.css', 'app/*.html'],
		{
			port: 8888,
			server: {
				baseDir: './app'
			}
		}
	);
});

// browser reload
gulp.task('bs-reload', function(){
	bsync.reload();
	console.log('browser reload');
});

// default task
gulp.task('default', ['bs-sync'], function(){
	console.log('default task running');
	gulp.watch('.app/*.*', ['bs-reload']);
});


module.exports = {
	paths: {
		public: 'public',
		watched: ['app', 'vendor']
	},
	modules: {
		wrapper: false
	},
	files: {
		javascripts: {
			joinTo: {
				'js/vendor.js': /^(?!app)/,
				'js/app.js': /^app/
			},
			order: {
				before: [
					'vendor/jquery.js'
				],
				after: [
					'vendor/bootstrap/js/tooltip.js',
					'vendor/bootstrap/js/popover.js',
					'vendor/bootstrap/js/collapse.js',
					'vendor/bootstrap/js/transition.js'
				]
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^(app|vendor)/
			},
			order: {
				before: ['vendor/bootstrap']
			}
		}
	}
};

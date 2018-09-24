new Vue({
		el: '#vue-app',
		data: {
			name: 'Anciano',
			job : 'Programmer',
			website: 'https://github.com/berseckchr00/',
			websiteTag: "<a href='https://github.com/berseckchr00/'>Tag WebSite</a>"
		},
		methods: {
			greet: function(time){
				return 'Good ' + time + ' ' +  this.name;
			}
		}
});

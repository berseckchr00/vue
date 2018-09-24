new Vue({
		el: '#vue-app',
		data: {
			name: 'Anciano',
			job : 'Programmer'
		},
		methods: {
			greet: function(time){
				return 'Good ' + time + ' ' +  this.name;
			}
		}
});

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

new Vue({
	el: '#vue-app-events',
	data: {
		age: 28,
		x:0,
		y:0
	},
	methods: {
		add: function(add){
			this.age += add;
		},
		substract: function(less){
			this.age -= less;
		},
		updateXY: function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
});

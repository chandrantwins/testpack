var colors = Npm.require('colors');

Meteor.methods({
	serverlog : function(msg){
		console.log(msg);
	},
	serverrainbowlog : function(msg,warn){
		console.log(msg.rainbow);
	}
});
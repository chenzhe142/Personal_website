var ProjectModel = Backbone.Model.extend({
	defaults: {
		name: "",
		link: "",
		info: ""
	}
});

var ProjectView = Backbone.View.extend({
	className: "project-view",
	template: _.template($(".project-template").html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});

var projectModel = new ProjectModel;
projectModel.set('name', 'Snapshot Diary');
projectModel.set('link', 'https://github.com/chenzhe142/Snapshot-Diary');
projectModel.set('info', 'Snapshot Diary is an iOS application, written in Swift.\n\nThis application can record sounds and videos, together with photos and texts. User can create their own diary.')

var a = new ProjectView({model: projectModel});
console.log(a);
$('.test-placeholder').replaceWith(a.$el);
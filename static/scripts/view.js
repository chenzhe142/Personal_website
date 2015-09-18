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

var projectViews = []

var project1Model = new ProjectModel;
project1Model.set('name', 'Snapshot Diary');
project1Model.set('link', 'https://github.com/chenzhe142/Snapshot-Diary');
project1Model.set('info', 'Snapshot Diary is an iOS application, written in Swift.\n\nThis application can record sounds and videos, together with photos and texts. User can create their own diary.')

var project1View = new ProjectView({model: project1Model});
project1Views.add(project1View);

$('.project1-placeholder').replaceWith(project1View.$el);

var project2Model = new ProjectModel;
project2Model.set('name', 'Pitch Perfect');
project2Model.set('link', 'https://github.com/chenzhe142/Pitch-Perfect-x02');
project2Model.set('info', 'Pitch Perfect is an iOS application, written in Swift.\n\nThis application can record sound. Using the latest AVAudioEngine in iOS 8, it can create various sound effect, and play recorded sound with effects though output.')

var project2View = new ProjectView({model: project2Model});
$('.project2-placeholder').replaceWith(project2View.$el);
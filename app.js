(function() {
	var app = angular.module('store', []);

	app.controller('Controller', function(){
		this.products = gem;
	});

	app.controller('PanelController', function() {
			this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	var gem = 
		[
				{
					name: 'Lorem ipsum Ea cupidatat amet.',
					price: 250.00,
					description: "Lorem ipsum Duis ad amet. Lorem ipsum Aute qui in.",
					images: 
					[
							"images/gem-01.gif",
							"images/gem-02.gif",
							"images/gem-03.gif"
					],
					reviews: 
					[
						{
							stars: 5,
							body: "I love this product!",
							author: "joe@thomas.com"
						},
						{
							stars: 1,
							body: "This product sucks",
							author: "tim@hater.com"
						}
					]
				},
		];

})();
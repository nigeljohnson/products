
mymodule.config(function($stateProvider, $urlRouterProvider)

	{

		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("component-nigel");

		$stateProvider

		    .state('searchPage', {
		    	name: 'searchPage',
		        url: '/searchPage',
		        views: {

		            // the main template will be placed here (relatively named)
		            '': { templateUrl: 'app/shared/component-search.html',
		        			controller: 'projectscontroller'},

		            // the child views will be defined here (absolutely named)
		            'nestedviewmain@component-nigel': { templateUrl: 'app/shared/white.html' },

		            // the child views will be defined here (absolutely named)
		            'nestedview@component-nigel': { templateUrl: 'app/shared/librarybox.html' }
		        }
		        
		    })

		    .state('diffResults', {
		    	name: 'diffResults',
		        url: '/diffResults',
		        views: {

		            // the main template will be placed here (relatively named)
		            '': { templateUrl: 'app/shared/component-results.html',
		        			controller: 'projectscontroller'},

		            // the child views will be defined here (absolutely named)
		            'nestedviewmain@component-nigel': { templateUrl: 'app/shared/white.html' },

		            // the child views will be defined here (absolutely named)
		            'nestedview@component-nigel': { templateUrl: 'app/shared/librarybox.html' }
		        }
		        
		    })

		    .state('searchResults', {
		    	name: 'searchResults',
		        url: '/searchResults',
		        views: {

		            // the main template will be placed here (relatively named)
		            '': { templateUrl: 'app/shared/component-results.html',
		        			controller: 'moviecontroller'},

		            // the child views will be defined here (absolutely named)
		            'nestedviewmain@component-nigel': { templateUrl: 'app/shared/white.html' },

		            // the child views will be defined here (absolutely named)
		            'nestedview@component-nigel': { templateUrl: 'app/shared/librarybox.html' }
		        }
		        
		    })

		    .state('detailsPage', {
		    	name: 'detailsPage',
		        url: '/detailsPage',
		        views: {

		            // the main template will be placed here (relatively named)
		            '': { templateUrl: 'app/shared/component-details.html'},

		            // the child views will be defined here (absolutely named)
		            'nestedviewmain@component-nigel': { templateUrl: 'app/shared/white.html' },

		            // the child views will be defined here (absolutely named)
		            'nestedview@component-nigel': { templateUrl: 'app/shared/librarybox.html' }
		        }
		        
		    })

		    .state('projectsPage', {
		    	name: 'projectsPage',
		        url: '/projectsPage',
		        views: {

		            // the main template will be placed here (relatively named)
		            '': { templateUrl: 'app/shared/material.html'},

		            // the child views will be defined here (absolutely named)
		            'nestedviewmain@component-nigel': { templateUrl: 'app/shared/white.html' },

		            // the child views will be defined here (absolutely named)
		            'nestedview@component-nigel': { templateUrl: 'app/shared/librarybox.html' }
		        }
		        
		    })
		    
		    .state('component-nigel', {
		    	name: 'component-nigel',
		        url: '/component-nigel',
		        views: {

		            // the main template will be placed here (relatively named)
		            '': { templateUrl: 'app/shared/component-nigel.html'},

		            // the child views will be defined here (absolutely named)
		            'nestedviewmain@component-nigel': { templateUrl: 'app/shared/white.html' },

		            // the child views will be defined here (absolutely named)
		            'nestedview@component-nigel': { templateUrl: 'app/shared/librarybox.html' }
		        }
		        
		    })

		    .state('component-blog', {
		    	name: 'component-blog',
		        url: '/component-blog',
		        views: {

		            // the main template will be placed here (relatively named)
		            '': { templateUrl: 'app/shared/component-blog.html',
		        			controller: 'projectscontroller'},

		            // the child views will be defined here (absolutely named)
		            'nestedviewmain@component-blog': { templateUrl: 'app/shared/white.html' },

		            // the child views will be defined here (absolutely named)
		            'nestedview@component-blog': { templateUrl: 'app/shared/librarybox.html' }
		        }
		        
		    })
	});
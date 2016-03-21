const angular = require('angular')
const router = require('angular-ui-router')
const material = require('angular-material')
const animate = require('angular-animate')
const aria = require('angular-aria')
const messages = require('angular-messages')

// Import material CSS
require('angular-material/angular-material.css')

// Creating angular app
let app = angular.module('app', [router, material, animate, aria, messages])

// Registering controllers
require('./feed/FeedController')(app)
require('./post/PostController')(app)

// Configure routes
app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        $urlRouterProvider.otherwise("/")

        $stateProvider.state('feed', {
            url:'/',
            template: require('./feed/feed.html'),
            controller: 'FeedController'
         }).state('post', {
            url:'/post',
            template: require('./post/post.html'),
            controller: 'PostController'
        })
    }])


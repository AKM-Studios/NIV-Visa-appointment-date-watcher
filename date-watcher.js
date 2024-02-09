/*
To use this script, do the following:
	1. log in to https://ais.usvisa-info.com
	2. Click on the "Continue" button to go to the actions page
	3. Open up Console on your browser
	4. Copy and paste this script into the console and press Enter to run the script
*/


'use strict';

// Enter the desired date (or earlier) in yyyy-mm-dd format
var desiredDate = new Date('2023-02-01');

var path = window.location.pathname,
	id = path.split('/')[4];

var scrapeInterval = setInterval(function () {
	$.getJSON('https://ais.usvisa-info.com/en-ca/niv/schedule/' + id + '/appointment/days/94.json?appointments[expedite]=false', function (data) {
		if(Object.keys(data).length === 0) {
		console.log('Not available');
		}
		if(Object.keys(data).length > 0) {
		var earliestDate = new Date(Object.keys(data)[0].date);
		if (earliestDate.getTime() <= desiredDate.getTime()) {
			window.alert('Earliest date available: ' + earliestDate.toDateString());
		} else {
			console.log('No date available');
		}
	}
	});
}, 10000);

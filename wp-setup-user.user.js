// ==UserScript==
// @name         Setup WordPress user
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A Tampermonkey script to fill out user details from a name input
// @author       Andras Guseo
// @match        https://*/wp-admin/user-new.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get a name
    var person = prompt("Enter name", "First Last");

    if (person != null) {
        // Location of the space
        var space = person.search(" ");

        // Create array from name
        var split = person.split(" ");

        // Create user name (lowercase and divide with period
        var user_login = person.replace(" ", ".").toLowerCase;

        var email;

        // Set user name
        document.getElementById("user_login").value = person.replace(' ', '.').replace(' x', '').toLowerCase();

        // If there is an 'x' at the end of the name, then use only the first name for the email address
        // E.g. First Last x => first@email.com
        if ( split[2] == "x" ) {
            email = split[0].toLowerCase();
        }
        // Otherwise use the first letter of the first name and the last name for the email address.
        // E.g. flast@email.com
        else {
            email = split[0].substr(0,1).toLowerCase() + split[1].toLowerCase();
        }
        // Set email address
        document.getElementById("email").value = email + "@ithemes.com";
        // Set first name
        document.getElementById("first_name").value = split[0];
        // Set last name
        document.getElementById("last_name").value = split[1];
        // Set user role
        document.getElementById("role").value = "editor";
    }

})();

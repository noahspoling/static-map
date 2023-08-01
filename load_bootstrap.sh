#!/bin/bash

# Provide the direct CDN links to the Bootstrap CSS and JS files
bootstrap_css="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css"
bootstrap_js="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js"

# Download and move the Bootstrap CSS file to the desired location
wget -O css/bootstrap/bootstrap.min.css $bootstrap_css

# Download and move the Bootstrap JS file to the desired location
wget -O js/package/bootstrap.min.js $bootstrap_js

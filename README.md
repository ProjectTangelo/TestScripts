# TestScripts
This repository will hold the test scripts for the project


Format for screenCap.js:
  phantomjs screenCap.js websiteUrl


diff_test is a shell script that should find all the screenshots(.png files) in a folder,
compares two subsequent screenshots over and over again, the diff will be output as a .jpeg file.
The comaprison is done using ImageMagick commandline commands

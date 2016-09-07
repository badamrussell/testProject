echo 'starting aws stuff...'

aws s3 sync ./dist/ s3://bucketzoo.badrussell

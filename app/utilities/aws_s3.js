require('babel-register');
require('babel-polyfill');

const AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';






var AwsApi = {

  constructor: function () {

  },

  getBucketList: function () {

  },

  listBuckets: function () {
    var s3 = new AWS.S3(); 

    s3.listBuckets(function(err, data) {
      if (err) {
        console.log("Error:", err);
      } else {
        for (let index in data.Buckets) {
          let bucket = data.Buckets[index];
          console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
        }
      }
    });
  },

  createBucket: function(bucketName) {
    var s3 = new AWS.S3({
      params: {
        Bucket: bucketName,
        Key: 'AKIAIFF3OL6QTZ2KQKIQ'
      }
    });

    s3.createBucket(function(err) {
      if (err) {
        console.log("Error:", err);
      } else {
        // s3.upload(
        //   {Body: 'Hello!'},
        //   function() {
        //     console.log("Successfully uploaded data to myBucket/"+bucketName);
        //   }
        // );
      }
    });
  },

  // createBucket () {
  //   var s3 = new AWS.S3(); 

  //   s3.listBuckets(function(err, data) {
  //     if (err) { console.log("Error:", err); }
  //     else {
  //       for (var index in data.Buckets) {
  //         var bucket = data.Buckets[index];
  //         console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
  //       }
  //     }
  //   });

  //   s3.createBucket(
  //     {
  //       Bucket: 'testproject34.badrussell'
  //     },
  //     function() {

  //       var params = {
  //         Bucket: 'myBucket',
  //         Key: 'myKey',
  //         Body: 'Hello!'
  //       };

  //       s3.putObject(params, function(err, data) {
  //         if (err) {
  //           console.log(err)
  //         } else {
  //           console.log("Successfully uploaded data to myBucket/myKey");   
  //         }
  //       });

  //     }
  //   );
  // }
};

var a = AwsApi;
a.createBucket('bucketzoo2.badrussell');

module.exports = AwsApi;
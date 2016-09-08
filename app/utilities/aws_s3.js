require('babel-register');
require('babel-polyfill');

var fs = require('fs');

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
        Key: ''
      }
    });

    s3.createBucket(function(err) {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log("Successfully created bucket.")
        // s3.upload(
        //   {Body: 'Hello!'},
        //   function() {
        //     console.log("Successfully uploaded data to myBucket/"+bucketName);
        //   }
        // );
      }
    });
  },

  uploadFile: function(bucketName, folderPath, fileName) {
    var body = fs.createReadStream('bigfile').pipe(zlib.createGzip());
var s3obj = new AWS.S3({params: {Bucket: 'myBucket', Key: 'myKey'}});
s3obj.upload({Body: body}).
  on('httpUploadProgress', function(evt) { console.log(evt); }).
  send(function(err, data) { console.log(err, data) });
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
  // invalidateCloudfront: function() {
  //   var {clientConfig, cloudfrontInvalidateOptions} = this

  //   return new Promise(function(resolve, reject) {
  //     if (cloudfrontInvalidateOptions.DistributionId) {
  //       var cloudfront = new aws.CloudFront()

  //       cloudfront.config.update({
  //         accessKeyId: clientConfig.s3Options.accessKeyId,
  //         secretAccessKey: clientConfig.s3Options.secretAccessKey,
  //       })

  //       cloudfront.createInvalidation({
  //         DistributionId: cloudfrontInvalidateOptions.DistributionId,
  //         InvalidationBatch: {
  //           CallerReference: Date.now().toString(),
  //           Paths: {
  //             Quantity: cloudfrontInvalidateOptions.Items.length,
  //             Items: cloudfrontInvalidateOptions.Items
  //           }
  //         }
  //       }, (err, res) => err ? reject(err) : resolve(res.Id))
  //     } else {
  //       return resolve(null)
  //     }
  //   })
  // }
};

var a = AwsApi;
a.createBucket('bucketzoo2.badrussell');

module.exports = AwsApi;
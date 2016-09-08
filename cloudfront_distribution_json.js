
var bucketName = process.argv[2];
var folderName = process.argv[3];
var targetOriginId = "S3-" + bucketName + "/" + folderName;
var domainName = bucketName + '.s3.amazonaws.com';
var callerReference = bucketName + "-" + folderName + "-" + +new Date();

var data = {
  "DistributionConfig": {
    "CallerReference": callerReference,
    "Aliases": {
      "Quantity": 0
    },
    "DefaultRootObject": "index.html",
    "Origins": {
      "Items": [
        {
          "S3OriginConfig": {
            "OriginAccessIdentity": ""
          },
          "OriginPath": "/" + folderName,
          "CustomHeaders": {
            "Quantity": 0
          },
          "Id": targetOriginId,
          "DomainName": domainName
        }
      ],
      "Quantity": 1
    },
    "DefaultCacheBehavior": {
      "TrustedSigners": {
        "Enabled": false,
        "Quantity": 0
      },
      "TargetOriginId": targetOriginId,
      "ViewerProtocolPolicy": "allow-all",
      "ForwardedValues": {
        "Headers": {
          "Quantity": 0
        },
        "Cookies": {
          "Forward": "none"
        },
        "QueryStringCacheKeys": {
          "Quantity": 0
        },
        "QueryString": false
      },
      "MaxTTL": 31536000,
      "SmoothStreaming": false,
      "DefaultTTL": 86400,
      "AllowedMethods": {
        "Items": [
          "HEAD",
          "GET"
        ],
        "CachedMethods": {
          "Items": [
            "HEAD",
            "GET"
          ],
          "Quantity": 2
        },
        "Quantity": 2
      },
      "MinTTL": 0,
      "Compress": false
    },
    "CacheBehaviors": {
      "Quantity": 0
    },
    "Comment": "",
    "Logging": {
      "Bucket": "",
      "Prefix": "",
      "Enabled": false,
      "IncludeCookies": false
    },
    "PriceClass": "PriceClass_100",
    "Enabled": true,
    "WebACLId": "",
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": true,
      "MinimumProtocolVersion": "SSLv3",
      "CertificateSource": "cloudfront"
    },
    "CustomErrorResponses": {
      "Items": [
        {
          "ErrorCode": 403,
          "ResponsePagePath": "/index.html",
          "ResponseCode": "200",
          "ErrorCachingMinTTL": 0
        },
        {
          "ErrorCode": 404,
          "ResponsePagePath": "/index.html",
          "ResponseCode": "200",
          "ErrorCachingMinTTL": 0
        }
      ],
      "Quantity": 2
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": "none",
        "Quantity": 0
      }
    }
  }
};

process.stdout.write(JSON.stringify(data));

define({ "api": [
  {
    "type": "post",
    "url": "/user/registercompany",
    "title": "PostRegister",
    "name": "PostRegister",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": \"company successfully registered\",\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/user/company/profile/:id",
    "title": "Show_CompanyProfile",
    "name": "Show_CompanyProfile",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>companyid(_id).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"610919bf70bd2022749c8d5b\",\n            \"name\": \"company 2\",\n            \"email\": \"company2@c.com\",\n            \"phno\": 1234567890\n        }\n    ],\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/user/company/profile/",
    "title": "Update_CompanyProfile",
    "name": "Update_CompanyProfile",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>companyid(_id).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phno",
            "description": "<p>phno</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"_id\": \"610919bf70bd2022749c8d5b\",\n        \"createdAt\": \"2021-08-03T10:23:47.341Z\",\n        \"name\": \"company 2\",\n        \"email\": \"company2@c.com\",\n        \"phno\": 1234567891,\n        \"updatedAt\": \"2021-08-20T17:00:29.665Z\"\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/user/company/showall",
    "title": "ShowAll_Companies",
    "name": "showAll_Companies",
    "group": "Company",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"data\": [\n            {\n                \"status\": \"active\",\n                \"_id\": \"61191ce13dd040171cf9bdfa\",\n                \"name\": \"new company1 \",\n                \"email\": \"c1@c.com\",\n                \"password\": \"$2b$10$ibPfrLogCcTuHQfzQLcxke435oBv9qZGUY0O9aqrmrv0/JpHXlCjO\"\n            },\n            {\n                \"status\": \"blocked\",\n                \"_id\": \"61191e120f0d5c028434ac0e\",\n                \"name\": \"new company2 \",\n                \"email\": \"c2@c.com\",\n                \"password\": \"$2b$10$BWgbq0dMydUuHh6K0SPa0.Xu7w7jVcQHiTgm8LkCqV7p5mKYnqmzO\"\n            }\n        ],\n        \"current\": 1,\n        \"pages\": 1\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/job/applied/showall/:id",
    "title": "AppliedFor_Jobs",
    "name": "AppliedFor_Jobs",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>userid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"appliedon\": \"2021-08-21T03:53:00.058Z\",\n            \"status\": \"active\",\n            \"_id\": \"61207e4413d51319a4fec81d\",\n            \"uid\": \"6119213ac7e550208ccf3c9a\",\n            \"jobid\": \"61207da113d51319a4fec81a\",\n            \"__v\": 0\n        }\n    ],\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/jobsRoutes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/job/company/showall/:cid",
    "title": "ApplyFor_Job",
    "name": "ApplyFor_Job",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>userid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobid",
            "description": "<p>jobid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"appliedon\": \"2021-08-21T03:53:00.058Z\",\n        \"status\": \"active\",\n        \"_id\": \"61207e4413d51319a4fec81d\",\n        \"uid\": \"6119213ac7e550208ccf3c9a\",\n        \"jobid\": \"61207da113d51319a4fec81a\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/jobsRoutes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/job/add",
    "title": "add_job",
    "name": "add_job",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>companyid(_id)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>job title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>job description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>job qualification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>tags</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"status\": \"active\",\n        \"_id\": \"611fe3c9f3270907649caddb\",\n        \"cid\": \"610919bf70bd2022749c8d5b\",\n        \"title\": \"js developer\",\n        \"description\": \"this is a javascript developer job.Having 1 or more year experience\",\n        \"qualification\": \"bca,btech,mca\",\n        \"tags\": \"javascript\",\n        \"__v\": 0\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/jobsRoutes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/job/edit/:id",
    "title": "edit_job",
    "name": "edit_job",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>jobid(_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"status\": \"active\",\n        \"_id\": \"611fe3c9f3270907649caddb\",\n        \"cid\": \"610919bf70bd2022749c8d5b\",\n        \"title\": \"js developer\",\n        \"description\": \"this is a javascript developer job. for a one year experience\",\n        \"qualification\": \"bca,btech,mca\",\n        \"tags\": \"javascript\",\n        \"__v\": 0\n    },\n    \"msg\": \"suceess\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/jobsRoutes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/job/remove/:id",
    "title": "remove_job",
    "name": "remove_job",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>jobid(_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": \"job successfully removed\",\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/jobsRoutes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "get",
    "url": "/job/company/showall/:cid",
    "title": "showAllCompany_Jobs",
    "name": "showAllCompany_Jobs",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<p>companyid(_id)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": [\n         {\n             \"status\": \"active\",\n             \"_id\": \"610bf0c1d4f5b20304e1ff35\",\n             \"cid\": \"610919bf70bd2022749c8d5b\",\n             \"title\": \"need custom web site\",\n             \"description\": \"want a custom web site in php\",\n             \"qualification\": \"bca,mca\",\n             \"tags\": \"php,mysql\",\n             \"__v\": 0\n         },\n         {\n             \"status\": \"active\",\n             \"_id\": \"611fe3c9f3270907649caddb\",\n             \"cid\": \"610919bf70bd2022749c8d5b\",\n             \"title\": \"js developer\",\n             \"description\": \"this is a javascript developer job. for a one year experience\",\n             \"qualification\": \"bca,btech,mca\",\n             \"tags\": \"javascript\",\n             \"__v\": 0\n         }\n     ],\n     \"msg\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/jobsRoutes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Post_Login",
    "name": "Post_Login",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTkxZjJiZDkwMTNmMGUyMDFjMDlkYyIsImVtYWlsIjoidTNAdS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYyOTAzNjQ1NCwiZXhwIjoxNjI5NjQxMjU0fQ.hS4JtIphscsMxU5sYXp9QP2Wxc0aSa8guwJ-jCMoI1A\",\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "Login"
  },
  {
    "type": "put",
    "url": "/user/status/:id",
    "title": "UpdateStatus(user,company)",
    "name": "Update_Status",
    "group": "Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"resume\": \"/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx\",\n        \"status\": \"blocked\",\n        \"_id\": \"6119213ac7e550208ccf3c9a\",\n        \"name\": \"new  user4\",\n        \"email\": \"u4@u.com\",\n        \"password\": \"$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO\",\n        \"role\": \"user\",\n        \"createdAt\": \"2021-08-15T14:14:18.456Z\",\n        \"__v\": 0,\n        \"address\": \"address1\",\n        \"phno\": 1234567890,\n        \"updatedAt\": \"2021-08-15T14:50:14.948Z\"\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/user/profile/:id",
    "title": "Get_Profile",
    "name": "Get_Profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>userid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"resume\": \"/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx\",\n        \"_id\": \"6119213ac7e550208ccf3c9a\",\n        \"name\": \"new  user4\",\n        \"email\": \"u4@u.com\",\n        \"createdAt\": \"2021-08-15T14:14:18.456Z\",\n        \"address\": \"address1\",\n        \"phno\": 1234567890,\n        \"updatedAt\": \"2021-08-15T14:46:54.562Z\"\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Post_Register",
    "name": "Post_Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": \"user successfully registered\",\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/showall",
    "title": "ShowAll_User",
    "name": "ShowAll_User",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n      \"data\": [\n          {\n              \"resume\": \"/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx\",\n              \"status\": \"active\",\n              \"_id\": \"6119213ac7e550208ccf3c9a\",\n              \"name\": \"new  user4\",\n              \"email\": \"u4@u.com\",\n              \"password\": \"$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO\",\n              \"role\": \"user\",\n              \"createdAt\": \"2021-08-15T14:14:18.456Z\",\n              \"__v\": 0,\n              \"address\": \"address1\",\n              \"phno\": 1234567890,\n              \"updatedAt\": \"2021-08-15T14:50:14.948Z\"\n          }\n      ],\n      \"current\": \"1\",\n      \"pages\": 1\n  },\n  \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/profile",
    "title": "Update_Profile",
    "name": "Update_Profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phno",
            "description": "<p>user phno</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resume",
            "description": "<p>user new resume</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>user address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldresume",
            "description": "<p>user oldresume_url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": {\n      \"resume\": \"/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx\",\n      \"status\": \"active\",\n      \"_id\": \"6119213ac7e550208ccf3c9a\",\n      \"name\": \"new  user4\",\n      \"email\": \"u4@u.com\",\n      \"password\": \"$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO\",\n      \"role\": \"user\",\n      \"createdAt\": \"2021-08-15T14:14:18.456Z\",\n      \"__v\": 0,\n      \"address\": \"address2\",\n      \"phno\": 1234567890,\n      \"updatedAt\": \"2021-08-15T14:46:54.562Z\"\n  },\n  \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  }
] });

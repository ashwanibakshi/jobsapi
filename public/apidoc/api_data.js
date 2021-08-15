define({ "api": [
  {
    "type": "post",
    "url": "/user/registercompany",
    "title": "Post_Register",
    "name": "Post_Register",
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
    "type": "put",
    "url": "/user/showall",
    "title": "ShowAll_User",
    "name": "ShowAll_User",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"data\": [\n            {\n                \"resume\": \"/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx\",\n                \"status\": \"active\",\n                \"_id\": \"6119213ac7e550208ccf3c9a\",\n                \"name\": \"new  user4\",\n                \"email\": \"u4@u.com\",\n                \"password\": \"$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO\",\n                \"role\": \"user\",\n                \"createdAt\": \"2021-08-15T14:14:18.456Z\",\n                \"__v\": 0,\n                \"address\": \"address1\",\n                \"phno\": 1234567890,\n                \"updatedAt\": \"2021-08-15T14:50:14.948Z\"\n            }\n        ],\n        \"current\": \"1\",\n        \"pages\": 1\n    },\n    \"msg\": \"success\"\n}",
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
          "content": "{\n    \"data\": {\n        \"resume\": \"/uploads/resumeda272463-2557-4396-a030-815b02e7bd94.docx\",\n        \"status\": \"active\",\n        \"_id\": \"6119213ac7e550208ccf3c9a\",\n        \"name\": \"new  user4\",\n        \"email\": \"u4@u.com\",\n        \"password\": \"$2b$10$bw1p6CHyfIhF9/kAW2F7jO6G5Qsjgzns52JZCclxYbfnLrUY3BXlO\",\n        \"role\": \"user\",\n        \"createdAt\": \"2021-08-15T14:14:18.456Z\",\n        \"__v\": 0,\n        \"address\": \"address2\",\n        \"phno\": 1234567890,\n        \"updatedAt\": \"2021-08-15T14:46:54.562Z\"\n    },\n    \"msg\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/userRoutes.js",
    "groupTitle": "User"
  }
] });

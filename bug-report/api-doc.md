FORMAT: 1A

# Group Issues

議題相關的 API

## 議題清單 [/issues]

### 擷取所有議題 [GET]

擷取所有議題的清單，並有分頁限制

JSON Response 欄位說明：

- data: 議題清單
- id: 議題 id
- title: 議題標題
- status: 議題狀態，選項有 opened, closed，預設 opened
- updatedAt: 更新時間，格式爲 ISO-8601，時區一律爲 UTC
- updatedByUserName: 更新議題的使用者名稱
- pagination: 在分頁結果的第幾頁
- link: API URL

+ Request 200

    + Headers

            Content-Type: application/json

+ Response 200 (application/json)

        {
          "data": [
            {
              "id": 1,
              "title": "issue title 1",
              "status": "opened",
              "updatedAt": "2013-03-13T02:11:47,592883024Z",
              "updatedByUserName": "tomleesm"
            },
            {
              "id": 2,
              "title": "issue title 2",
              "status": "opened",
              "updatedAt": "2013-03-13T02:12:40,973737457Z",
              "updatedByUserName": "tomleesm"
            },
          ],
          "pagination": 1,
          "link": "http://localhost/issues"
        }

### 新增議題 [POST]

新增一則議題

JSON Response 欄位說明：

- title: 議題標題
- description: 議題描述
- createdAt: 新增時間，格式爲 ISO-8601，時區一律爲 UTC
- createdByUserId: 新增議題的使用者 id
- hasError: 是否有錯誤
- statusCode: HTTP status codes
- errors: 錯誤清單
- title: 錯誤訊息標題
- description: 錯誤訊息描述

+ Request 200

    + Headers

            Content-Type: application/json
            CSRF-token: gLANCEzor0sXpuD16KLzA5uKZ

    + Body

            {
              "title": "issue title",
              "description": "issue description",
              "createdAt": "2013-03-13T02:11:47,592883024+0800",
              "createdByUserId": 123
            }

+ Response 201 (application/json)

            {
              "hasError": false,
              "statusCode": 201
            }

+ Response 403 (application/json)

            {
                "hasError": true,
                "statusCode": 403,
                "errors": [
                  {
                    "title": "permission deny",
                    "description": "user tomleesm is not allowed to create issues."
                  }
                ]
            }

## 議題 [/issues/{id}]

+ Parameters

    + id (number) - 議題 id

### 擷取議題 [GET]

擷取一則議題

JSON Response 欄位說明：

- data: 議題清單
- id: 議題 id
- title: 議題標題
- description: 議題描述
- status: 議題狀態，選項有 opened, closed，預設 opened
- updatedAt: 更新時間，格式爲 ISO-8601，時區一律爲 UTC
- updatedByUserName: 更新議題的使用者名稱

+ Request 200

    + Headers

            Content-Type: application/json

+ Response 200 (application/json)

            {
              "data": {
                "id": 1,
                "title": "issue title 1",
                "description": "issue description",
                "status": "opened",
                "updatedAt": "2013-03-13T02:11:47,592883024Z",
                "updatedByUserName": "tomleesm"
              }
            }

### 更新議題 [PUT]

更新一則議題

JSON Response 欄位說明：

- title: 議題標題
- description: 議題描述
- updatedAt: 新增時間，格式爲 ISO-8601，時區一律爲 UTC
- updatedByUserId: 新增議題的使用者 id
- hasError: 是否有錯誤
- statusCode: HTTP status codes
- errors: 錯誤清單
- title: 錯誤訊息標題
- description: 錯誤訊息描述

+ Request 200

    + Headers

            Content-Type: application/json
            CSRF-token: gLANCEzor0sXpuD16KLzA5uKZ

    + Body

            {
              "title": "issue title",
              "description": "issue description",
              "updatedAt": "2013-03-13T02:11:47,592883024+0800",
              "updatedByUserId": 123
            }

+ Response 200 (application/json)

            {
              "hasError": false,
              "statusCode": 200
            }

+ Response 403 (application/json)

            {
                "hasError": true,
                "statusCode": 403,
                "errors": [
                  {
                    "title": "permission deny",
                    "description": "user tomleesm is not allowed to update an issue."
                  }
                ]
            }

### 刪除議題 [DELETE]

刪除一則議題

+ Request 200

    + Headers

            Content-Type: application/json
            CSRF-token: gLANCEzor0sXpuD16KLzA5uKZ

    + Body

            {
              "id": 123
            }

+ Response 200 (application/json)

            {
              "hasError": false,
              "statusCode": 200
            }

+ Response 403 (application/json)

            {
                "hasError": true,
                "statusCode": 403,
                "errors": [
                  {
                    "title": "permission deny",
                    "description": "user tomleesm is not allowed to delete an issue."
                  }
                ]
            }

## 新增議題頁面 [/issues/create]

### 新增議題頁面 [GET]

+ Request 200

    + Headers

            Content-Type: application/json

+ Response 200 (application/json)

            {
              "createdByUserName": "tomleesm"
            }


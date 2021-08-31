# ACCT API Hiring Coders Final Chalenge
The repository serves to store the API source codes.
 
## Table of contents

- [ACCT API Hiring Coders Final Chalenge Repository](#)
  * [Table of contents](#table-of-contents)
  * [How it works.](#how-it-works)
    + [How the API server works.](#how-the-api-server-works)
  * [Acess to the server](#acess-to-the-server)
    + [GET /leads - All items](#get--leads---all-items)
      - [Status codes](#status-codes)
    + [PUT /leads - New item](#put--leads---new-item)
      - [Status codes](#status-codes-1)
    + [GET /lead/{email} - Specific item](#get--lead--email----specific-item)
      - [Status codes](#status-codes-2)
    + [DELETE /lead/{email} - Delete item](#delete--lead--email----delete-item)
      - [Status codes](#status-codes-3)
    + [PATCH /lead/{email} - Update on specific columns](#patch--lead--email----update-on-specific-columns)
      - [Status codes](#status-codes-4)
    + [GET /_v/categories](#get--categories)
      - [Status codes](#status-codes-5)
    + [GET /_v/products/{categoryid}](#get--products-by-category)
      - [Status codes](#status-codes-6)
    + [GET /_v/specifications/{productid}](#get--specifications)
      - [Status codes](#status-codes-7)
  * [Todo](#todo)
  * [Changelog](#changelog)
 
## How it works.
 
### How the API server works.
The API should be hosted on VTEX IO together with the front end and use exclusive VTEX IO dependences and builders.

The builder used is **"node": "6.x"**.

This API perfom calls to **AWS** gateway API and VTEX IO API to the routes bellow:

- **AWS Gateway** (to do: authetication)<br>
https://g0deojz10k.execute-api.us-east-2.amazonaws.com//lead/leads

https://g0deojz10k.execute-api.us-east-2.amazonaws.com//lead/{email}


- **VTEX IO API** (this endpoints need VTEX authentications)
https://some-vtex-account.myvtex.com/api/catalog_system/pub/products/variations/{productId}

https://some-vtex-account.myvtex.com/api/catalog/pvt/product/{productId}

https://some-vtex-account.myvtex.com/api/catalog_system/pvt/products/{productId}/specification

https://some-vtex-account.myvtex.com/api/catalog_system/pub/specification/fieldGet/{fieldId}

https://some-vtex-account.myvtex.com/api/catalog/pvt/category/{categoryId}

https://some-vtex-account.myvtex.com/api/catalog_system/pvt/products/GetProductAndSkuIds?_from={from}_to={to}

https://some-vtex-account.myvtex.com/api/api/catalog/pvt/category/{categoryId}


 
## Acess to the server
Inside our API server, we have the link https://myworkspace--some-vtex-account.myvtex.com, were we make the request to our routes.

Our api have the following routes:
 
### GET /leads - All items
 
```http
  GET /leads
```
Returns the items list with the following structure:
```json
{
  "Items": [
    {
      "status": ...,
      "createdAt": ...,
      "lastUpdatedAt": ...,
      "customerAt": ...,
      "email": ...,
      "name": ...,
      "fone": ...
    }
  ],
  "Count": 1,
  "ScannedCount": 1
}
```

#### Status codes
[200](https://httpstatuses.com/200)

### PUT /leads - New item
 
```http
  PUT /leads
```
 
The item must be send with the following structure:
 
```json
{
  "email": ...,
  "name": ...,
  "fone": ...,
  "status": ... (optional)
}
```
 
Returns:

```json
{
  "email": ...,
  "name": ...,
  "fone": ...,
  "createdAt": ...,
  "status": ...,
  "lastUpdatedAt": ...,
  "customerAt": ...
}
```

#### Status codes
- [201](https://httpstatuses.com/201).
- [409](https://httpstatuses.com/409), when the email is alread on DynamoDB.

### GET /lead/{email} - Specific item
 
```http
  GET /lead/{email}
```
Where email is the email of the item without the brackets.
Returns the item with the following structure:
```json
{
  "Item": {
    "status": ...,
    "createdAt": ...,
    "lastUpdatedAt": ...,
    "customerAt": ...,
    "email": ...,
    "name": ...,
    "fone": ...
  }
}
```
#### Status codes
- [200](https://httpstatuses.com/200).
- [404](https://httpstatuses.com/404).


### DELETE /lead/{email} - Delete item

```http
  DELETE /lead/{email}
```
Where email is the email of the item without the brackets.

#### Status codes
- [204](https://httpstatuses.com/204).
- [404](https://httpstatuses.com/404).

### PATCH /lead/{email} - Update on specific columns

```http
  PATCH /lead/{email}
```
On the Json body, columns can be send to update the item. It keeps all the other columns.

Example:
```json
{
	"name": "much name! such easy! wow!"
}
```

It returns the full item:
```json
{
  "status": ...,
  "createdAt": ...,
  "lastUpdatedAt": ...,
  "customerAt": ...,
  "email": ...,
  "name": ...,
  "fone": ...
}
```

#### Status codes
- [200](https://httpstatuses.com/200).
- [404](https://httpstatuses.com/404).

### GET /_v/categories - Categories
 
```http
  GET /_v/categories
```
Returns the categories with the following structure:
```json
"Page": 1,
    "Size": 6,
    "TotalRows": 6,
    "TotalPage": 1,
    "Data": [
        {
            "Id": 1,
            "Name": "Category",
            "FatherCategoryId": null,
            "Title": "Category_Page_Title",
            "Description": "Brief description of the category. It is advisable not to exceed 150 characters so that the search engines can show it correctly in the search results;",
            "Ordem": 1,
            "HasChildren": true,
            "AcceptedGlobalCategoryId": 783
        },
        {
            "Id": 2,
            "Name": "growth-data",
            "FatherCategoryId": 1,
            "Title": "growth-data",
            "Description": "",
            "Ordem": 1,
            "HasChildren": false,
            "AcceptedGlobalCategoryId": 783
        },
        {
            "Id": 3,
            "Name": "growth-data",
            "FatherCategoryId": null,
            "Title": "",
            "Description": "",
            "Ordem": 2,
            "HasChildren": false,
            "AcceptedGlobalCategoryId": 783
        },
        {
            "Id": 4,
            "Name": "quality-assurance",
            "FatherCategoryId": null,
            "Title": "",
            "Description": "",
            "Ordem": 3,
            "HasChildren": false,
            "AcceptedGlobalCategoryId": 783
        },
        {
            "Id": 5,
            "Name": "experience-design",
            "FatherCategoryId": null,
            "Title": "",
            "Description": "",
            "Ordem": 4,
            "HasChildren": false,
            "AcceptedGlobalCategoryId": 783
        },
        {
            "Id": 6,
            "Name": "tecnologia",
            "FatherCategoryId": null,
            "Title": "",
            "Description": "",
            "Ordem": 5,
            "HasChildren": false,
            "AcceptedGlobalCategoryId": 783
        }
    ]
}
```
#### Status codes
- [200](https://httpstatuses.com/200).
- [404](https://httpstatuses.com/404).

### GET /_v/products/{categoryid} - products by category id
 
```http
  GET /_v/products/{categoryid}
```
Returns the products by category with the following structure:
```json
[
    {
        "Id": 5,
        "Name": "CRO",
        "CategoryId": 3,
        "IsVisible": true,
        "Description": "Data Analytics com foco em CRO",
        "Title": "",
        "IsActive": true,
        "MetaTagDescription": "Data Analytics com foco em CRO",
        "available": true,
        "skus": [
            {
                "skuId": 6,
                "skuName": "CRO",
                "skuAvailable": true,
                "skuListPriceFormated": "R$ 0,00",
                "skuListPrice": 0,
                "skuTaxFormated": "R$ 0,00",
                "skuTaxAsInt": 0,
                "skuBestPriceFormated": "R$ 299,99",
                "skuBestPrice": 29999,
                "skuSpotPrice": 29999,
                "skuInstallments": 1,
                "skuInstallmentsValue": 29999,
                "skuInstallmentsInsterestRate": 0,
                "skuImage": "https://hiringcoders202119.vteximg.com.br/arquivos/ids/155402-292-292/untitled--1-.png?v=637658581563300000"
            }
        ],
        "specifications": [
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Estudo de Conversão",
                "specId": 19,
                "specName": "Estudo de Conversão",
                "specValue": [
                    "true"
                ],
                "position": 1
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Elaboração de Dashboard",
                "specId": 21,
                "specName": "Elaboração de Dashboard",
                "specValue": [
                    "false"
                ],
                "position": 2
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Participações em discussões de estratégia",
                "specId": 22,
                "specName": "Participações em discussões de estratégia",
                "specValue": [
                    "false"
                ],
                "position": 3
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Configuração do Analytics",
                "specId": 23,
                "specName": "Configuração do Analytics",
                "specValue": [
                    "false"
                ],
                "position": 4
            },
            {
                "fieldGroupId": 6,
                "fieldGroupName": "Grupo de campos 02",
                "description": "Texto do Campo 01",
                "specId": 20,
                "specName": "Nome do Campo 01",
                "specValue": [
                    "Nome do Campo 01"
                ],
                "position": 1
            }
        ]
    },
    {
        "Id": 6,
        "Name": "GOLIVE",
        "CategoryId": 3,
        "IsVisible": true,
        "Description": "Acompanhar os principais ofensores e oportunidades do Funil",
        "Title": "",
        "IsActive": true,
        "MetaTagDescription": "Acompanhar os principais ofensores e oportunidades do Funil",
        "available": true,
        "skus": [
            {
                "skuId": 7,
                "skuName": "GOLIVE",
                "skuAvailable": true,
                "skuListPriceFormated": "R$ 0,00",
                "skuListPrice": 0,
                "skuTaxFormated": "R$ 0,00",
                "skuTaxAsInt": 0,
                "skuBestPriceFormated": "R$ 999,99",
                "skuBestPrice": 99999,
                "skuSpotPrice": 99999,
                "skuInstallments": 1,
                "skuInstallmentsValue": 99999,
                "skuInstallmentsInsterestRate": 0,
                "skuImage": "https://hiringcoders202119.vteximg.com.br/arquivos/ids/155403-292-292/untitled--2-.png?v=637658602176100000"
            }
        ],
        "specifications": [
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Estudo de Conversão",
                "specId": 19,
                "specName": "Estudo de Conversão",
                "specValue": [
                    "true"
                ],
                "position": 1
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Elaboração de Dashboard",
                "specId": 21,
                "specName": "Elaboração de Dashboard",
                "specValue": [
                    "true"
                ],
                "position": 2
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Participações em discussões de estratégia",
                "specId": 22,
                "specName": "Participações em discussões de estratégia",
                "specValue": [
                    "true"
                ],
                "position": 3
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Configuração do Analytics",
                "specId": 23,
                "specName": "Configuração do Analytics",
                "specValue": [
                    "true"
                ],
                "position": 4
            },
            {
                "fieldGroupId": 6,
                "fieldGroupName": "Grupo de campos 02",
                "description": "Texto do Campo 01",
                "specId": 20,
                "specName": "Nome do Campo 01",
                "specValue": [
                    ""
                ],
                "position": 1
            }
        ]
    },
    {
        "Id": 7,
        "Name": "TESTE AB",
        "CategoryId": 3,
        "IsVisible": true,
        "Description": "Realizar Testes entre Layouts, Versões de Site, Landing Pages",
        "Title": "",
        "IsActive": true,
        "MetaTagDescription": "Realizar Testes entre Layouts, Versões de Site, Landing Pages",
        "available": true,
        "skus": [
            {
                "skuId": 8,
                "skuName": "TESTE AB",
                "skuAvailable": true,
                "skuListPriceFormated": "R$ 0,00",
                "skuListPrice": 0,
                "skuTaxFormated": "R$ 0,00",
                "skuTaxAsInt": 0,
                "skuBestPriceFormated": "R$ 599,99",
                "skuBestPrice": 59999,
                "skuSpotPrice": 59999,
                "skuInstallments": 1,
                "skuInstallmentsValue": 59999,
                "skuInstallmentsInsterestRate": 0,
                "skuImage": "https://hiringcoders202119.vteximg.com.br/arquivos/ids/155404-292-292/untitled--3-.png?v=637658603400100000"
            }
        ],
        "specifications": [
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Estudo de Conversão",
                "specId": 19,
                "specName": "Estudo de Conversão",
                "specValue": [
                    "true"
                ],
                "position": 1
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Elaboração de Dashboard",
                "specId": 21,
                "specName": "Elaboração de Dashboard",
                "specValue": [
                    "true"
                ],
                "position": 2
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Participações em discussões de estratégia",
                "specId": 22,
                "specName": "Participações em discussões de estratégia",
                "specValue": [
                    "false"
                ],
                "position": 3
            },
            {
                "fieldGroupId": 5,
                "fieldGroupName": "PRINCIPAIS RECURSOS",
                "description": "Configuração do Analytics",
                "specId": 23,
                "specName": "Configuração do Analytics",
                "specValue": [
                    "false"
                ],
                "position": 4
            },
            {
                "fieldGroupId": 6,
                "fieldGroupName": "Grupo de campos 02",
                "description": "Texto do Campo 01",
                "specId": 20,
                "specName": "Nome do Campo 01",
                "specValue": [
                    ""
                ],
                "position": 1
            }
        ]
    }
]```

#### Status codes

- [200](https://httpstatuses.com/200).
- [404](https://httpstatuses.com/404).

### GET /_v/specifications/{productid} - specifications by product id
 
```http
  GET /_v/specifications/{productid}
```
Returns the specifications by product id with the following structure:
```json
[
    {
        "Value": [
            "true"
        ],
        "Id": 19,
        "Name": "Estudo de Conversão"
    },
    {
        "Value": [
            "false"
        ],
        "Id": 21,
        "Name": "Elaboração de Dashboard"
    },
    {
        "Value": [
            "false"
        ],
        "Id": 22,
        "Name": "Participações em discussões de estratégia"
    },
    {
        "Value": [
            "false"
        ],
        "Id": 23,
        "Name": "Configuração do Analytics"
    },
    {
        "Value": [
            "Nome do Campo 01"
        ],
        "Id": 20,
        "Name": "Nome do Campo 01"
    }
]

#### Status codes
- [200](https://httpstatuses.com/200).
- [404](https://httpstatuses.com/404).

## Todo
 
- [ ]  Clean the code.

## Changelog

### 1.0.0 24/08/2021
- First version of the project with basic functionality.
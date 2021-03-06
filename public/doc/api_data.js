define({ "api": [
  {
    "type": "get",
    "url": "/api/members/:id/?point=:point",
    "title": "Request member information",
    "name": "GetMembers",
    "group": "Members",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept-Language\": \"th\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Member ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "point",
            "description": "<p>Current point</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "MemberID",
            "description": "<p>Member ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Level",
            "description": "<p>Membership level</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PointTarget",
            "description": "<p>Points target for next redemption</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PointNeeded",
            "description": "<p>Points needed for next redemption</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Preferences",
            "description": "<p>Preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.TypeID",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.Description",
            "description": "<p>Category description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.TypeNumber",
            "description": "<p>Choice ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.Title",
            "description": "<p>Choice title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/members.js",
    "groupTitle": "Members",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/members/:id/?point=:point"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/members/:id/",
    "title": "Update member information",
    "name": "PostMembers",
    "group": "Members",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept-Language\": \"th\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "Preferences",
            "description": "<p>Preferences</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Preferences.TypeID",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Preferences.TypeNumber",
            "description": "<p>Choice ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"Preference\": [\n    {\n      \"TypeID\": 1,\n      \"TypeNumber\": 1\n    },\n    {\n      \"TypeID\": 1,\n      \"TypeNumber\": 2\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "MemberID",
            "description": "<p>Member ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Level",
            "description": "<p>Membership level</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PointTarget",
            "description": "<p>Points target for next redemption</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PointNeeded",
            "description": "<p>Points needed for next redemption</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Preferences",
            "description": "<p>Preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.TypeID",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.Description",
            "description": "<p>Category description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.TypeNumber",
            "description": "<p>Choice ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Preferences.Title",
            "description": "<p>Choice title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/members.js",
    "groupTitle": "Members"
  },
  {
    "type": "get",
    "url": "/api/prices",
    "title": "Get prices of all fuel types",
    "name": "GetFuelPrices",
    "group": "Prices",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages. (Accept-Language: th)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "fuelPrices",
            "description": "<p>List of fuel with pricing information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fuelPrices.ID",
            "description": "<p>ID of fuel type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fuelPrices.Title",
            "description": "<p>Name of fuel type</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "fuelPrices.Price",
            "description": "<p>Current price of fuel type</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/prices.js",
    "groupTitle": "Prices",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/prices"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/promotions",
    "title": "Get all active promotions",
    "name": "GetPromotions",
    "group": "Promotions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "PromotionID",
            "description": "<p>ID of promotion</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "LayoutID",
            "description": "<p>ID of layout to render the promotion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Header",
            "description": "<p>Header of the promotion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>Body of the promotion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgCaption1",
            "description": "<p>Caption of Image #1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgURL1",
            "description": "<p>URL of Image #1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgLink1",
            "description": "<p>Link URL if click at Image #1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgCaption2",
            "description": "<p>Caption of Image #2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgURL2",
            "description": "<p>URL of Image #2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgLink2",
            "description": "<p>Link URL if click at Image #2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgCaption3",
            "description": "<p>Caption of Image #3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgURL3",
            "description": "<p>URL of Image #3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ImgLink3",
            "description": "<p>Link URL if click at Image #3</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/promotions.js",
    "groupTitle": "Promotions",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/promotions"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/statics/facilities",
    "title": "Get all available facility types",
    "name": "GetFacilities",
    "group": "Statics",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages. (Accept-Language: th)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "facilities",
            "description": "<p>List of all available facility types</p>"
          },
          {
            "group": "Success 200",
            "type": "TypeNumber",
            "optional": false,
            "field": "facilities.TypeNumber",
            "description": "<p>ID of facility type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facilities.Title",
            "description": "<p>Name of facility type</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/statics.js",
    "groupTitle": "Statics",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/statics/facilities"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/statics/foods",
    "title": "Get all available food types",
    "name": "GetFoods",
    "group": "Statics",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages. (Accept-Language: th)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "foods",
            "description": "<p>List of all available food types</p>"
          },
          {
            "group": "Success 200",
            "type": "TypeNumber",
            "optional": false,
            "field": "foods.TypeNumber",
            "description": "<p>ID of food type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "foods.Title",
            "description": "<p>Name of food type</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/statics.js",
    "groupTitle": "Statics",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/statics/foods"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/statics/vehicles",
    "title": "Get all available vehicle types",
    "name": "GetVehicles",
    "group": "Statics",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages. (Accept-Language: th)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "vehicles",
            "description": "<p>List of all available vehicle types</p>"
          },
          {
            "group": "Success 200",
            "type": "TypeNumber",
            "optional": false,
            "field": "vehicles.TypeNumber",
            "description": "<p>ID of vehicle type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vehicles.Title",
            "description": "<p>Name of vehicle type</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/statics.js",
    "groupTitle": "Statics",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/statics/vehicles"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/stations/nearbyStations/:lat,:long",
    "title": "Request nearby stations",
    "name": "GetNearbyStations",
    "group": "Station",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages. (Accept-Language: th)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitude of the current Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "long",
            "description": "<p>Longitude of the current Location</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Unique Id of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Address of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>City (province) of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>Country of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DisplayName",
            "description": "<p>Name of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PostalCode",
            "description": "<p>PostalCode of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Latitude",
            "description": "<p>Latitude of the station location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Longitude",
            "description": "<p>Longitude of the station location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Distance",
            "description": "<p>Distance of the station from the current location</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/stations.js",
    "groupTitle": "Station",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/stations/nearbyStations/:lat,:long"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/stations/getStationServicesById/:id",
    "title": "Request services of one station",
    "name": "GetStationServices",
    "group": "Station",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages. (Accept-Language: th)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the station</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Services",
            "description": "<p>Services provided in the station</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Services.Type",
            "description": "<p>type of the services</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Services.Title",
            "description": "<p>title of the services</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/stations.js",
    "groupTitle": "Station",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/stations/getStationServicesById/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/stations/getByKeyword/:lat,:long,:keyword",
    "title": "Request stations by keyword",
    "name": "GetStationsByKeyword",
    "group": "Station",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Prefered languages. (Accept-Language: th)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitude of the current Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "long",
            "description": "<p>Longitude of the current Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword used to search for the stations</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Unique Id of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AddressLine",
            "description": "<p>Address of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>City (province) of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>Country of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DisplayName",
            "description": "<p>Name of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PostalCode",
            "description": "<p>PostalCode of the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Latitude",
            "description": "<p>Latitude of the station location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Longitude",
            "description": "<p>Longitude of the station location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Distance",
            "description": "<p>Distance of the station from the current location</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/stations.js",
    "groupTitle": "Station",
    "sampleRequest": [
      {
        "url": "https://bootcamp-dev.azurewebsites.net/api/stations/getByKeyword/:lat,:long,:keyword"
      }
    ]
  }
] });

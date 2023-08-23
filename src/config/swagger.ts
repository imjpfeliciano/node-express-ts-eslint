const swaggerDocument = {
  "openapi": "3.0.0",
  "info": {
    "title": "Express API with Swagger",
    "description": "This is a simple API application made with Express and documented with Swagger",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000/api"
    }
  ],
  "paths": {
    "/demo": {
      "get": {
        "tags": [
          "Demo"
        ],
        "description": "Retrieves a JSON object with <b>hello world<b>",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/demo"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "demo": {
        "type": "object",
        "properties": {
          "hello": {
            "type": "string"
          }
        }
      }
    }
  }
}

export default swaggerDocument
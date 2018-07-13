export const schema = {
	"type": "object",
	"properties":{
		"users":{
			"type": "array",
			"minItems": 3,
			"maxItems": 10,
			"items": {
				"type": "object",
				"additionalProperties": false,
				"properties": {
					"id": {
						"type": "integer",
						"unique": true,
						"minimum": 1
					},
					"firstName": {
						"type": "string",
						"minLength": 2,
						"faker": "name.firstName"
					},
					"lastName": {
						"type": "string",
						"minLength": 2,
						"faker": "name.lastName"
					},
					"email": {
						"type": "string",
						"minLength": 2,
						"faker": "internet.email"
					}
				},
				"required": ["id","firstName","lastName","email"]
			}
		}
	},
	"required": ["users"]
}

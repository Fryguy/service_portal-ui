/**
 * Insights Service Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The CatalogItem model module.
* @module model/CatalogItem
* @version 1.0.0
*/
export default class CatalogItem {
    /**
    * Constructs a new <code>CatalogItem</code>.
    * @alias module:model/CatalogItem
    * @class
    * @param name {String} 
    * @param description {String} 
    */

    constructor(name, description) {
        

        
        

        this['name'] = name;this['description'] = description;

        
    }

    /**
    * Constructs a <code>CatalogItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CatalogItem} obj Optional instance to populate.
    * @return {module:model/CatalogItem} The populated <code>CatalogItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogItem();

            
            
            

            if (data.hasOwnProperty('provider_id')) {
                obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'String');
            }
            if (data.hasOwnProperty('portfolio_item_id')) {
                obj['portfolio_item_id'] = ApiClient.convertToType(data['portfolio_item_id'], 'Number');
            }
            if (data.hasOwnProperty('catalog_id')) {
                obj['catalog_id'] = ApiClient.convertToType(data['catalog_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
        }
        return obj;
    }

    /**
    * ID of the provider object
    * @member {String} provider_id
    */
    provider_id = undefined;
    /**
    * ID of the portfolio item object
    * @member {Number} portfolio_item_id
    */
    portfolio_item_id = undefined;
    /**
    * Stores the Catalog ID from the provider
    * @member {String} catalog_id
    */
    catalog_id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} imageUrl
    */
    imageUrl = undefined;








}



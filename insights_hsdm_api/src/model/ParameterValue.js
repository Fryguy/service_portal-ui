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
* The ParameterValue model module.
* @module model/ParameterValue
* @version 1.0.0
*/
export default class ParameterValue {
    /**
    * Constructs a new <code>ParameterValue</code>.
    * @alias module:model/ParameterValue
    * @class
    * @param name {String} 
    * @param value {String} 
    */

    constructor(name, value) {
        

        
        

        this['name'] = name;this['value'] = value;

        
    }

    /**
    * Constructs a <code>ParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ParameterValue} obj Optional instance to populate.
    * @return {module:model/ParameterValue} The populated <code>ParameterValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParameterValue();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} value
    */
    value = undefined;
    /**
    * @member {String} type
    */
    type = undefined;
    /**
    * @member {String} format
    */
    format = undefined;








}



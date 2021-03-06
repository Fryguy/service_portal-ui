/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.0.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The ServiceOffering model module.
* @module model/ServiceOffering
* @version 0.0.1
*/
export default class ServiceOffering {
    /**
    * Constructs a new <code>ServiceOffering</code>.
    * @alias module:model/ServiceOffering
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ServiceOffering</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ServiceOffering} obj Optional instance to populate.
    * @return {module:model/ServiceOffering} The populated <code>ServiceOffering</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceOffering();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ems_ref')) {
                obj['ems_ref'] = ApiClient.convertToType(data['ems_ref'], 'String');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], Object);
            }
            if (data.hasOwnProperty('source_created_at')) {
                obj['source_created_at'] = ApiClient.convertToType(data['source_created_at'], 'Date');
            }
            if (data.hasOwnProperty('source_deleted_at')) {
                obj['source_deleted_at'] = ApiClient.convertToType(data['source_deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
            }
            if (data.hasOwnProperty('source_ref')) {
                obj['source_ref'] = ApiClient.convertToType(data['source_ref'], 'String');
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * The native reference used by the EMS to refer to this object
    * @member {String} ems_ref
    */
    ems_ref = undefined;
    /**
    * @member {Object} extra
    */
    extra = undefined;
    /**
    * @member {Date} source_created_at
    */
    source_created_at = undefined;
    /**
    * @member {Date} source_deleted_at
    */
    source_deleted_at = undefined;
    /**
    * @member {String} source_id
    */
    source_id = undefined;
    /**
    * @member {String} source_ref
    */
    source_ref = undefined;
    /**
    * @member {String} tenant_id
    */
    tenant_id = undefined;








}



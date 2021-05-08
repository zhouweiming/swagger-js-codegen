import {
    request
} from "./index";
const Parameter = require('router-parameter');
const paramter = new Parameter();

export interface IResponseData < T = any > {
    code: number
    message: string
    current_stamp: number
    data: T
}

type ICompanyApplicationConfig = {
    'color' ? : string

    'icon' ? : string

    'showInTargetModuleWhenConfig' ? : string

    'showInTargetModuleWhenUse' ? : string

};
type ICompanyApplication = {
    'app_key' ? : string

    'config' ? : ICompanyApplicationConfig

    'description' ? : string

    'id' ? : string

    'is_actived' ? : string

    'name' ? : string

    'type' ? : number

};
type IDepartment = {
    'company_id': number

    'created_at' ? : string

    'deleted_at' ? : string

    'id': number

    'is_actived' ? : boolean

    'is_deleted' ? : boolean

    'name': string

    'parent_id' ? : number

    'updated_at' ? : string

};
type IDepartmentUser = {
    'company_id' ? : number

    'id': number

    'name': string

    'avatar': string

    'phone': string

    'is_actived' ? : boolean

    'is_deleted' ? : boolean

};
type IBaseRole = {
    'company_id' ? : number

    'id' ? : number

    'name' ? : string

};
type IProfile = {
    'company_id' ? : number

    'id': number

    'name': string

    'avatar' ? : string

    'email' ? : string

    'created_at' ? : string

    'deleted_at' ? : string

    'updated_at' ? : string

    'is_actived' ? : boolean

    'is_deleted' ? : boolean

    'account_name' ? : string

    'company_name' ? : string

    'last_login_at' ? : string

    'last_success_sync_info_at' ? : string

    'login_type' ? : string

    'password' ? : string

    'phone' ? : string

    'roles' ? : Array < IBaseRole >

        'type' ? : number

};
type IMenuItem = {
    'id' ? : string

    'code' ? : string

    'name' ? : string

    'parent_id' ? : number

    'url' ? : string

    'weight' ? : number

    'list' ? : Array < IMenuItem >

};
type IRole = {
    'company_id' ? : number

    'id' ? : number

    'name' ? : string

    'code' ? : string

    'created_at' ? : string

    'deleted_at' ? : string

    'is_actived' ? : boolean

    'is_deleted' ? : boolean

    'last_success_sync_info_at' ? : string

    'parent_id' ? : number

    'role_type' ? : number

    'updated_at' ? : string

};
type IRoleUser = {
    'company_id' ? : number

    'company_name' ? : string

    'id': number

    'name': string

    'avatar': string

    'phone': string

    'is_actived' ? : boolean

    'is_deleted' ? : boolean

    'relationship_id' ? : number

};
type IProjectMdel = {
    'id' ? : number

    'company_id' ? : number

    'name' ? : string

};
type IProjectTaskEveryDayByUser = {
    'name': string

    'belong': string

};
type IProjectProgress = {
    'name': string

    'stages': string

};
type IProjectStatus = {
    'id': number

    'name': string

};
type IProjectListItem = {
    'collection_id': number

    'current_project_milestone_id': number

    'ended_at': string

    'id': number

    'inclusion': number

    'is_collection': boolean

    'is_delay': boolean

    'manager_id': number

    'manager_name': string

    'plan_inclusion': number

    'product_name': string

    'project_milestone_name': string

    'seq_no': string

    'status': number

    'week_inclusion': number

};
type IProjectTemplateSelectListItem = {
    'id' ? : number

    'name' ? : string

    'remark' ? : string

    'type' ? : number

};
type IProjectTemplateModel = {
    'id' ? : number

    'company_id' ? : number

    'name' ? : string

    'content' ? : {}

    'project_id' ? : number

    'type' ? : number

    'user_id' ? : number

    'remark' ? : string

};
type IProjectTemplateDetail = {
    'project_template' ? : IProjectTemplateModel

};
type IDingtalkProjectTemplateRelationshipModel = {
    'id' ? : number

    'company_id' ? : number

    'config' ? : {}

};

async function requestProxy < T > (method: string, url: string, body: any, headers: any, queryParameters: any, form: any, parameterConfig: any) {
    const paramValidateResult = paramter.param_validate(parameterConfig, Object.assign({}, queryParameters, body));
    if (paramValidateResult.errors) {
        const result = {
            code: 400,
            message: paramValidateResult.errors,
            current_stamp: Date.now(),
        }
        return result as IResponseData
    }
    return await request < T > (method, url, body, headers, queryParameters, form, parameterConfig);
}

/**
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 * @class Test
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export default {
    /**
     * 
     * @method
     * @name Test#getCompanyApplications
     */
    async getCompanyApplications(): Promise < IResponseData <
        Array < ICompanyApplication >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/companies/applications';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {};

            return await requestProxy < IResponseData <
                Array < ICompanyApplication >
                >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#toggleCompanyApplicationActived
     * @param {integer} applicationId - 应用id
     * @param {} body - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    async toggleCompanyApplicationActived(parameters: {
        'applicationId': number,
        'body': {
            'is_actived': boolean

        },
    }): Promise < IResponseData > {
        const domain = '';
        let path = '/api/v1/companies/applications/{application_id}/toggle-active';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/x-www-form-urlencoded';

        const parameterConfig = {
            "application_id": {
                "required": true,
                "type": "int",
                "description": "应用id"
            },
            "is_actived": {
                "required": true,
                "type": "boolean",
                "description": "是否启用"
            }
        };

        path = path.replace('{application_id}', `${parameters['applicationId']}`);

        if (parameters['applicationId'] === undefined) {
            throw new Error('Missing required  parameter: applicationId');
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            throw new Error('Missing required  parameter: body');
        }

        return await requestProxy < IResponseData > ('PUT', domain + path, body, headers, queryParameters, form, parameterConfig);
    },
    /**
     * 
     * @method
     * @name Test#modifyCompanyApplicationConfig
     * @param {string} applicationId - 
     * @param {} body - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    async modifyCompanyApplicationConfig(parameters: {
        'applicationId': string,
        'body': {
            'config': ICompanyApplicationConfig

        },
    }): Promise < IResponseData > {
        const domain = '';
        let path = '/api/v1/companies/applications/{application_id}/config';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/x-www-form-urlencoded';

        const parameterConfig = {
            "config": {
                "required": true,
                "type": "object",
                "entity": {
                    "___name": "ICompanyApplicationConfig",
                    "color": {
                        "type": "string",
                        "allowNull": false,
                        "description": "主题色"
                    },
                    "icon": {
                        "type": "string",
                        "allowNull": false,
                        "description": "图标"
                    },
                    "showInTargetModuleWhenConfig": {
                        "type": "string",
                        "allowNull": false,
                        "description": "是否出现在目标模块的配置界面"
                    },
                    "showInTargetModuleWhenUse": {
                        "type": "string",
                        "allowNull": false,
                        "description": "是否出现在目标模块的使用/运行界面"
                    }
                }
            }
        };

        path = path.replace('{application_id}', `${parameters['applicationId']}`);

        if (parameters['applicationId'] === undefined) {
            throw new Error('Missing required  parameter: applicationId');
        }

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        if (parameters['body'] === undefined) {
            throw new Error('Missing required  parameter: body');
        }

        return await requestProxy < IResponseData > ('PUT', domain + path, body, headers, queryParameters, form, parameterConfig);
    },
    /**
     * 
     * @method
     * @name Test#getAllDepartments
     */
    async getAllDepartments(): Promise < IResponseData <
        Array < IDepartment >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/department/list';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {};

            form = queryParameters;
            queryParameters = {};

            return await requestProxy < IResponseData <
                Array < IDepartment >
                >
                >
                ('POST', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getUsersByDepartment
     * @param {integer} id - 部门id
     */
    async getUsersByDepartment(parameters: {
        'id': number,
    }): Promise < IResponseData <
        Array < IDepartmentUser >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/department/{id}/user/list';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {
                "id": {
                    "required": true,
                    "type": "int",
                    "description": "部门id"
                }
            };

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                throw new Error('Missing required  parameter: id');
            }

            form = queryParameters;
            queryParameters = {};

            return await requestProxy < IResponseData <
                Array < IDepartmentUser >
                >
                >
                ('POST', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getProfileInfo
     */
    async getProfileInfo(): Promise < IResponseData <
        IProfile >
        >
        {
            const domain = '';
            let path = '/api/v1/profile/info';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {};

            return await requestProxy < IResponseData <
                IProfile >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getProfileMenus
     */
    async getProfileMenus(): Promise < IResponseData <
        Array < IMenuItem >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/profile/menu/list';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {};

            return await requestProxy < IResponseData <
                Array < IMenuItem >
                >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getProfile
     */
    async getProfile(): Promise < IResponseData > {
        const domain = '';
        let path = '/api/v1/profile/company';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        headers['Accept'] = 'application/json';

        const parameterConfig = {};

        return await requestProxy < IResponseData > ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
    },
    /**
     * 
     * @method
     * @name Test#getAllRoles
     */
    async getAllRoles(): Promise < IResponseData <
        Array < IRole >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/role/list';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {};

            form = queryParameters;
            queryParameters = {};

            return await requestProxy < IResponseData <
                Array < IRole >
                >
                >
                ('POST', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getUsersByRole
     * @param {string} id - 
     */
    async getUsersByRole(parameters: {
        'id': string,
    }): Promise < IResponseData <
        Array < IRoleUser >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/role/{id}/user/list';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {};

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                throw new Error('Missing required  parameter: id');
            }

            form = queryParameters;
            queryParameters = {};

            return await requestProxy < IResponseData <
                Array < IRoleUser >
                >
                >
                ('POST', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#addRole
     * @param {} body - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    async addRole(parameters: {
        'body': {
            'name': string

            'parent_id' ? : number

            'role_type': number

        },
    }): Promise < IResponseData <
        IRole >
        >
        {
            const domain = '';
            let path = '/api/v1/roles';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {
                "name": {
                    "required": true,
                    "type": "string",
                    "allowEmpty": false,
                    "description": "角色名称"
                },
                "parent_id": {
                    "required": false,
                    "type": "int",
                    "converType": "int",
                    "description": "上级角色id"
                },
                "role_type": {
                    "required": true,
                    "type": "int",
                    "converType": "int",
                    "description": "角色类型"
                }
            };

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                throw new Error('Missing required  parameter: body');
            }

            form = queryParameters;
            queryParameters = {};

            return await requestProxy < IResponseData <
                IRole >
                >
                ('POST', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#modifyRole
     * @param {integer} id - 角色id
     * @param {} body - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    async modifyRole(parameters: {
        'id': number,
        'body': {
            'name' ? : string

        },
    }): Promise < IResponseData <
        IRole >
        >
        {
            const domain = '';
            let path = '/api/v1/roles/{id}';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {
                "name": {
                    "required": false,
                    "type": "string",
                    "allowEmpty": false,
                    "description": "角色名称"
                },
                "id": {
                    "required": true,
                    "type": "int",
                    "converType": "int",
                    "description": "角色id"
                }
            };

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                throw new Error('Missing required  parameter: id');
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                throw new Error('Missing required  parameter: body');
            }

            return await requestProxy < IResponseData <
                IRole >
                >
                ('PUT', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#deleteRole
     * @param {integer} id - 角色id
     */
    async deleteRole(parameters: {
        'id': number,
    }): Promise < IResponseData <
        IRole >
        >
        {
            const domain = '';
            let path = '/api/v1/roles/{id}';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {
                "id": {
                    "required": true,
                    "type": "int",
                    "converType": "int",
                    "description": "角色id"
                }
            };

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                throw new Error('Missing required  parameter: id');
            }

            return await requestProxy < IResponseData <
                IRole >
                >
                ('DELETE', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getSystemRoles
     * @param {string} name - 角色名称
     */
    async getSystemRoles(parameters: {
        'name': string,
    }): Promise < IResponseData <
        Array < IRole >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/roles/system';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {
                "name": {
                    "required": true,
                    "type": "string",
                    "description": "角色名称",
                    "allowEmpty": true
                }
            };

            if (parameters['name'] !== undefined) {
                queryParameters['name'] = parameters['name'];
            }

            if (parameters['name'] === undefined) {
                throw new Error('Missing required  parameter: name');
            }

            return await requestProxy < IResponseData <
                Array < IRole >
                >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#restoreProject
     * @param {integer} id - 
     */
    async restoreProject(parameters: {
        'id': number,
    }): Promise < IResponseData <
        IProjectMdel >
        >
        {
            const domain = '';
            let path = '/api/v1/projects/{id}/restore';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {
                "id": {
                    "required": true,
                    "type": "int",
                    "convertType": "int"
                }
            };

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                throw new Error('Missing required  parameter: id');
            }

            return await requestProxy < IResponseData <
                IProjectMdel >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#sendReportEveryday
     */
    async sendReportEveryday(): Promise < IResponseData > {
        const domain = '';
        let path = '/api/v1/projects/everyday-report';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        headers['Accept'] = 'application/json';

        const parameterConfig = {};

        return await requestProxy < IResponseData > ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
    },
    /**
     * 
     * @method
     * @name Test#getEverydayTasksByUser
     * @param {integer} userId - 
     */
    async getEverydayTasksByUser(parameters: {
        'userId': number,
    }): Promise < IResponseData <
        Array < IProjectTaskEveryDayByUser >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/projects/users/{user_id}/everyday-tasks';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {
                "user_id": {
                    "required": false,
                    "type": "int",
                    "convertType": "int"
                }
            };

            path = path.replace('{user_id}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                throw new Error('Missing required  parameter: userId');
            }

            return await requestProxy < IResponseData <
                Array < IProjectTaskEveryDayByUser >
                >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getProjectStageNames
     */
    async getProjectStageNames(): Promise < IResponseData <
        Array < IProjectProgress >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/project/profile/progress/list';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {};

            return await requestProxy < IResponseData <
                Array < IProjectProgress >
                >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getProjectStatus
     */
    async getProjectStatus(): Promise < IResponseData <
        Array < IProjectStatus >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/project/status/list';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {};

            return await requestProxy < IResponseData <
                Array < IProjectStatus >
                >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getAllProjects
     * @param {integer} pageIndex - 
     * @param {integer} pageSize - 
     * @param {string} keywords - 
     * @param {string} projectIds - 
     * @param {integer} status - 
     * @param {string} orderBy - 
     * @param {string} orderRule - 
     */
    async getAllProjects(parameters: {
        'pageIndex': number,
        'pageSize': number,
        'keywords' ? : string,
        'projectIds' ? : string,
        'status' ? : 1 | 2 | 3 | 4,
        'orderBy' ? : string,
        'orderRule' ? : string,
    }): Promise < IResponseData < {
            'count': number

            'list' ? : Array < IProjectListItem >

        } >
        >
        {
            const domain = '';
            let path = '/api/v1/projects';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {};

            if (parameters['pageIndex'] !== undefined) {
                queryParameters['page_index'] = parameters['pageIndex'];
            }

            if (parameters['pageIndex'] === undefined) {
                throw new Error('Missing required  parameter: pageIndex');
            }

            if (parameters['pageSize'] !== undefined) {
                queryParameters['page_size'] = parameters['pageSize'];
            }

            if (parameters['pageSize'] === undefined) {
                throw new Error('Missing required  parameter: pageSize');
            }

            if (parameters['keywords'] !== undefined) {
                queryParameters['keywords'] = parameters['keywords'];
            }

            if (parameters['projectIds'] !== undefined) {
                queryParameters['project_ids'] = parameters['projectIds'];
            }

            if (parameters['status'] !== undefined) {
                queryParameters['status'] = parameters['status'];
            }

            if (parameters['orderBy'] !== undefined) {
                queryParameters['order_by'] = parameters['orderBy'];
            }

            if (parameters['orderRule'] !== undefined) {
                queryParameters['order_rule'] = parameters['orderRule'];
            }

            return await requestProxy < IResponseData < {
                    'count': number

                    'list' ? : Array < IProjectListItem >

                } >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getProjectTemplates
     * @param {integer} type - 
     */
    async getProjectTemplates(parameters: {
        'type' ? : number,
    }): Promise < IResponseData <
        Array < IProjectTemplateSelectListItem >
        >
        >
        {
            const domain = '';
            let path = '/api/v1/project_templates';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {
                "type": {
                    "required": false,
                    "type": "int",
                    "convertType": "int"
                }
            };

            if (parameters['type'] !== undefined) {
                queryParameters['type'] = parameters['type'];
            }

            return await requestProxy < IResponseData <
                Array < IProjectTemplateSelectListItem >
                >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#getProjectTemplateDetail
     * @param {integer} id - 
     */
    async getProjectTemplateDetail(parameters: {
        'id': number,
    }): Promise < IResponseData <
        IProjectTemplateDetail >
        >
        {
            const domain = '';
            let path = '/api/v1/project_templates/{id}';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';

            const parameterConfig = {
                "id": {
                    "required": true,
                    "type": "int",
                    "convertType": "int"
                }
            };

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                throw new Error('Missing required  parameter: id');
            }

            return await requestProxy < IResponseData <
                IProjectTemplateDetail >
                >
                ('GET', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#saveTemplateConfig
     * @param {integer} id - 
     * @param {} body - This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
     */
    async saveTemplateConfig(parameters: {
        'id': number,
        'body': {
            'config': {}

        },
    }): Promise < IResponseData <
        IDingtalkProjectTemplateRelationshipModel >
        >
        {
            const domain = '';
            let path = '/api/v1/project_templates/{id}';
            let body: any;
            let queryParameters: any = {};
            let headers: any = {};
            let form: any = {};
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            const parameterConfig = {
                "id": {
                    "required": true,
                    "type": "int",
                    "convertType": "int"
                },
                "config": {
                    "required": true,
                    "type": "object"
                }
            };

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                throw new Error('Missing required  parameter: id');
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                throw new Error('Missing required  parameter: body');
            }

            form = queryParameters;
            queryParameters = {};

            return await requestProxy < IResponseData <
                IDingtalkProjectTemplateRelationshipModel >
                >
                ('POST', domain + path, body, headers, queryParameters, form, parameterConfig);
        },
    /**
     * 
     * @method
     * @name Test#removeTemplate
     * @param {string} id - 
     */
    async removeTemplate(parameters: {
        'id': string,
    }): Promise < IResponseData > {
        const domain = '';
        let path = '/api/v1/project_templates/{id}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/x-www-form-urlencoded';

        const parameterConfig = {};

        path = path.replace('{id}', `${parameters['id']}`);

        if (parameters['id'] === undefined) {
            throw new Error('Missing required  parameter: id');
        }

        return await requestProxy < IResponseData > ('DELETE', domain + path, body, headers, queryParameters, form, parameterConfig);
    },
}
var API_ROUTES = [{
  "url": "/api/v1/companies/applications",
  "method": "get",
  "actionCode": "getCompanyApplications",
  "tag": "company",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "应用列表",
          "entity": {
              "___name": "ICompanyApplication",
              "app_key": {
                  "type": "string",
                  "allowNull": false,
                  "description": "应用全局唯一key"
              },
              "config": {
                  "type": "object",
                  "description": "应用配置",
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
              },
              "description": {
                  "type": "string",
                  "allowNull": true,
                  "description": "备注"
              },
              "id": {
                  "type": "string",
                  "allowNull": false,
                  "description": "应用id"
              },
              "is_actived": {
                  "type": "string",
                  "allowNull": false,
                  "description": "是否启用"
              },
              "name": {
                  "type": "string",
                  "allowNull": false,
                  "description": "应用名"
              },
              "type": {
                  "type": "int",
                  "allowNull": false,
                  "description": "应用类型"
              }
          }
      }
  }
}, {
  "url": "/api/v1/companies/applications/:application_id/toggle-active",
  "method": "put",
  "actionCode": "toggleCompanyApplicationActived",
  "param": {
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
  },
  "tag": "company",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/companies/applications/:application_id/config",
  "method": "put",
  "actionCode": "modifyCompanyApplicationConfig",
  "param": {
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
  },
  "tag": "company",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/department/list",
  "method": "post",
  "actionCode": "getAllDepartments",
  "tag": "department",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "部门列表",
          "entity": {
              "___name": "IDepartment",
              "company_id": {
                  "required": true,
                  "type": "int",
                  "description": "企业id"
              },
              "created_at": {
                  "required": false,
                  "type": "string",
                  "description": "创建时间"
              },
              "deleted_at": {
                  "required": false,
                  "type": "string",
                  "description": "删除时间"
              },
              "id": {
                  "required": true,
                  "type": "int",
                  "description": "部门id"
              },
              "is_actived": {
                  "required": false,
                  "type": "boolean",
                  "description": "是否激活"
              },
              "is_deleted": {
                  "required": false,
                  "type": "boolean",
                  "description": "是否删除"
              },
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "部门名称"
              },
              "parent_id": {
                  "required": false,
                  "type": "int",
                  "description": "上级部门id"
              },
              "updated_at": {
                  "required": false,
                  "type": "string",
                  "description": "更新时间"
              }
          }
      }
  }
}, {
  "url": "/api/v1/department/:id/user/list",
  "method": "post",
  "actionCode": "getUsersByDepartment",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "description": "部门id"
      }
  },
  "tag": "department",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "成员列表",
          "entity": {
              "___name": "IDepartmentUser",
              "company_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "企业id"
              },
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "required": true,
                  "description": "用户id"
              },
              "name": {
                  "type": "string",
                  "allowNull": false,
                  "required": true,
                  "description": "用户名"
              },
              "avatar": {
                  "type": "string",
                  "allowNull": true,
                  "required": true,
                  "description": "用户头像链接"
              },
              "phone": {
                  "type": "string",
                  "allowNull": true,
                  "required": true,
                  "description": "手机号"
              },
              "is_actived": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否激活"
              },
              "is_deleted": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否删除"
              }
          }
      }
  }
}, {
  "url": "/api/v1/profile/info",
  "method": "get",
  "actionCode": "getProfileInfo",
  "tag": "profile",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProfile",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "required": true,
              "description": "用户id"
          },
          "name": {
              "type": "string",
              "allowNull": false,
              "required": true,
              "description": "用户姓名"
          },
          "avatar": {
              "type": "string",
              "allowNull": true,
              "description": "用户头像链接"
          },
          "email": {
              "type": "string",
              "allowNull": true,
              "description": "用户邮箱"
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "description": "创建时间"
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "description": "删除时间"
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "description": "更新时间"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否激活"
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否删除"
          },
          "account_name": {
              "type": "string",
              "allowNull": true,
              "description": "用户登录用户名"
          },
          "company_name": {
              "type": "string",
              "allowNull": false,
              "description": "企业名称"
          },
          "last_login_at": {
              "type": "date",
              "allowNull": true,
              "description": "最近一次登录时间"
          },
          "last_success_sync_info_at": {
              "type": "date",
              "allowNull": true,
              "description": "最近一次数据同步成功时间"
          },
          "login_type": {
              "type": "string",
              "allowNull": false,
              "description": "登录类型"
          },
          "password": {
              "type": "string",
              "allowNull": true,
              "description": "密码"
          },
          "phone": {
              "type": "string",
              "allowNull": false,
              "description": "手机号"
          },
          "roles": {
              "type": "array",
              "allowNull": true,
              "entity": {
                  "___name": "IBaseRole",
                  "company_id": {
                      "type": "int",
                      "allowNull": false,
                      "description": "企业id"
                  },
                  "id": {
                      "type": "int",
                      "allowNull": false,
                      "description": "角色id"
                  },
                  "name": {
                      "type": "string",
                      "allowNull": false,
                      "description": "角色名称"
                  }
              },
              "description": "角色列表"
          },
          "type": {
              "type": "int",
              "allowNull": false,
              "description": "用户类型"
          }
      }
  }
}, {
  "url": "/api/v1/profile/menu/list",
  "method": "get",
  "actionCode": "getProfileMenus",
  "tag": "profile",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IMenuItem",
              "id": {
                  "type": "string",
                  "allowNull": false
              },
              "code": {
                  "type": "string",
                  "allowNull": false
              },
              "name": {
                  "type": "string",
                  "allowNull": false
              },
              "parent_id": {
                  "type": "int",
                  "allowNull": false
              },
              "url": {
                  "type": "string",
                  "allowNull": true
              },
              "weight": {
                  "type": "int",
                  "allowNull": false
              },
              "list": {
                  "type": "array",
                  "allowNull": true,
                  "entity": {
                      "___name": "IMenuItem",
                      "id": {
                          "type": "string",
                          "allowNull": false
                      },
                      "code": {
                          "type": "string",
                          "allowNull": false
                      },
                      "name": {
                          "type": "string",
                          "allowNull": false
                      },
                      "parent_id": {
                          "type": "int",
                          "allowNull": false
                      },
                      "url": {
                          "type": "string",
                          "allowNull": true
                      },
                      "weight": {
                          "type": "int",
                          "allowNull": false
                      }
                  }
              }
          },
          "allowNull": true
      }
  }
}, {
  "url": "/api/v1/profile/company",
  "method": "get",
  "actionCode": "getProfile",
  "tag": "profile"
}, {
  "url": "/api/v1/role/list",
  "method": "post",
  "actionCode": "getAllRoles",
  "tag": "role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "角色列表",
          "entity": {
              "___name": "IRole",
              "company_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "企业id"
              },
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "角色id"
              },
              "name": {
                  "type": "string",
                  "allowNull": false,
                  "description": "角色名称"
              },
              "code": {
                  "type": "string",
                  "allowNull": false,
                  "description": "唯一编号"
              },
              "created_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "创建时间"
              },
              "deleted_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "删除时间"
              },
              "is_actived": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否激活"
              },
              "is_deleted": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否删除"
              },
              "last_success_sync_info_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "最近一次同步数据成功时间"
              },
              "parent_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "上级角色id"
              },
              "role_type": {
                  "type": "int",
                  "allowNull": false,
                  "description": "角色类型"
              },
              "updated_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "更新时间"
              }
          }
      }
  }
}, {
  "url": "/api/v1/role/:id/user/list",
  "method": "post",
  "actionCode": "getUsersByRole",
  "tag": "role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "用户列表",
          "entity": {
              "___name": "IRoleUser",
              "company_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "企业id"
              },
              "company_name": {
                  "type": "string",
                  "allowNull": false,
                  "description": "企业名称"
              },
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "required": true,
                  "description": "用户id"
              },
              "name": {
                  "type": "string",
                  "allowNull": false,
                  "required": true,
                  "description": "用户名"
              },
              "avatar": {
                  "type": "string",
                  "allowNull": true,
                  "required": true,
                  "description": "用户头像链接"
              },
              "phone": {
                  "type": "string",
                  "allowNull": true,
                  "required": true,
                  "description": "手机号"
              },
              "is_actived": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否激活"
              },
              "is_deleted": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否删除"
              },
              "relationship_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "关系表id"
              }
          }
      }
  }
}, {
  "url": "/api/v1/roles",
  "method": "post",
  "actionCode": "addRole",
  "param": {
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
  },
  "tag": "role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IRole",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "description": "角色id"
          },
          "name": {
              "type": "string",
              "allowNull": false,
              "description": "角色名称"
          },
          "code": {
              "type": "string",
              "allowNull": false,
              "description": "唯一编号"
          },
          "created_at": {
              "type": "string",
              "allowNull": false,
              "description": "创建时间"
          },
          "deleted_at": {
              "type": "string",
              "allowNull": false,
              "description": "删除时间"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否激活"
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否删除"
          },
          "last_success_sync_info_at": {
              "type": "string",
              "allowNull": false,
              "description": "最近一次同步数据成功时间"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "上级角色id"
          },
          "role_type": {
              "type": "int",
              "allowNull": false,
              "description": "角色类型"
          },
          "updated_at": {
              "type": "string",
              "allowNull": false,
              "description": "更新时间"
          }
      }
  }
}, {
  "url": "/api/v1/roles/:id",
  "method": "put",
  "actionCode": "modifyRole",
  "param": {
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
  },
  "tag": "role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IRole",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "description": "角色id"
          },
          "name": {
              "type": "string",
              "allowNull": false,
              "description": "角色名称"
          },
          "code": {
              "type": "string",
              "allowNull": false,
              "description": "唯一编号"
          },
          "created_at": {
              "type": "string",
              "allowNull": false,
              "description": "创建时间"
          },
          "deleted_at": {
              "type": "string",
              "allowNull": false,
              "description": "删除时间"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否激活"
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否删除"
          },
          "last_success_sync_info_at": {
              "type": "string",
              "allowNull": false,
              "description": "最近一次同步数据成功时间"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "上级角色id"
          },
          "role_type": {
              "type": "int",
              "allowNull": false,
              "description": "角色类型"
          },
          "updated_at": {
              "type": "string",
              "allowNull": false,
              "description": "更新时间"
          }
      }
  }
}, {
  "url": "/api/v1/roles/:id",
  "method": "delete",
  "actionCode": "deleteRole",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "converType": "int",
          "description": "角色id"
      }
  },
  "tag": "role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IRole",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "description": "角色id"
          },
          "name": {
              "type": "string",
              "allowNull": false,
              "description": "角色名称"
          },
          "code": {
              "type": "string",
              "allowNull": false,
              "description": "唯一编号"
          },
          "created_at": {
              "type": "string",
              "allowNull": false,
              "description": "创建时间"
          },
          "deleted_at": {
              "type": "string",
              "allowNull": false,
              "description": "删除时间"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否激活"
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否删除"
          },
          "last_success_sync_info_at": {
              "type": "string",
              "allowNull": false,
              "description": "最近一次同步数据成功时间"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "上级角色id"
          },
          "role_type": {
              "type": "int",
              "allowNull": false,
              "description": "角色类型"
          },
          "updated_at": {
              "type": "string",
              "allowNull": false,
              "description": "更新时间"
          }
      }
  }
}, {
  "url": "/api/v1/roles/system",
  "method": "get",
  "actionCode": "getSystemRoles",
  "param": {
      "name": {
          "required": true,
          "type": "string",
          "description": "角色名称",
          "allowEmpty": true
      }
  },
  "tag": "role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "角色列表",
          "entity": {
              "___name": "IRole",
              "company_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "企业id"
              },
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "角色id"
              },
              "name": {
                  "type": "string",
                  "allowNull": false,
                  "description": "角色名称"
              },
              "code": {
                  "type": "string",
                  "allowNull": false,
                  "description": "唯一编号"
              },
              "created_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "创建时间"
              },
              "deleted_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "删除时间"
              },
              "is_actived": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否激活"
              },
              "is_deleted": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "是否删除"
              },
              "last_success_sync_info_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "最近一次同步数据成功时间"
              },
              "parent_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "上级角色id"
              },
              "role_type": {
                  "type": "int",
                  "allowNull": false,
                  "description": "角色类型"
              },
              "updated_at": {
                  "type": "string",
                  "allowNull": false,
                  "description": "更新时间"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id/restore",
  "method": "get",
  "actionCode": "restoreProject",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "object",
          "description": "项目信息",
          "entity": {
              "___name": "IProjectModel",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "模版名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "模版名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/everyday-report",
  "method": "get",
  "actionCode": "sendReportEveryday",
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/projects/users/:user_id/everyday-tasks",
  "method": "get",
  "actionCode": "getEverydayTasksByUser",
  "param": {
      "user_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "任务报告信息",
          "entity": {
              "___name": "IProjectTaskEveryDayByUser",
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "任务名称"
              },
              "belong": {
                  "required": true,
                  "type": "string",
                  "description": "项目编号"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/profile/progress/list",
  "method": "get",
  "actionCode": "getProjectStageNames",
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "项目阶段信息",
          "entity": {
              "___name": "IProjectProgress",
              "name": {
                  "required": true,
                  "type": "string",
                  "allowNull": false,
                  "description": "阶段名称"
              },
              "stages": {
                  "required": true,
                  "type": "string",
                  "allowNull": false,
                  "description": "阶段ids"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/status/list",
  "method": "get",
  "actionCode": "getProjectStatus",
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "状态信息",
          "entity": {
              "___name": "IProjectStatus",
              "id": {
                  "required": true,
                  "type": "int"
              },
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "状态值"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/list",
  "method": "post",
  "actionCode": "getProjectList",
  "param": {
      "page_index": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "types": {
          "required": false,
          "type": "array"
      },
      "stages": {
          "required": false,
          "type": "array"
      },
      "status": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "search_by": {
          "required": false,
          "type": "string"
      },
      "keywords": {
          "required": false,
          "type": "string"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "count": {
              "type": "int",
              "allowNull": false,
              "required": true
          },
          "list": {
              "type": "array",
              "entity": {
                  "___name": "IProjectListItem",
                  "id": {
                      "required": true,
                      "type": "int"
                  },
                  "is_delay": {
                      "required": true,
                      "type": "boolean",
                      "description": "是否逾期"
                  },
                  "parent_id": {
                      "required": true,
                      "type": "int",
                      "description": "父级项目ID"
                  },
                  "is_main_project": {
                      "required": true,
                      "type": "boolean",
                      "description": "是否主项目"
                  },
                  "seq_no": {
                      "required": true,
                      "type": "string",
                      "description": "主项目编号"
                  },
                  "name": {
                      "required": true,
                      "type": "string",
                      "description": "项目名称"
                  },
                  "manager": {
                      "required": true,
                      "type": "object",
                      "entity": {
                          "id": {
                              "required": true,
                              "type": "int",
                              "description": "用户ID"
                          },
                          "name": {
                              "required": true,
                              "type": "string",
                              "description": "用户名称"
                          }
                      }
                  },
                  "current_project_stage_name": {
                      "required": true,
                      "type": "string",
                      "description": "当前阶段名称"
                  },
                  "status": {
                      "required": true,
                      "type": "string",
                      "description": "项目状态"
                  },
                  "plan_end_date": {
                      "required": true,
                      "type": "date",
                      "allowNull": true,
                      "description": "计划结束时间"
                  },
                  "plan_inclusion": {
                      "required": true,
                      "type": "int",
                      "description": "计划入组数"
                  },
                  "current_inclusion": {
                      "required": true,
                      "type": "int",
                      "description": "实际入组数"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/upload",
  "method": "post",
  "actionCode": "projectUpload",
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/internal/project/upload",
  "method": "post",
  "actionCode": "projectInternalUpload",
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/project/import",
  "method": "post",
  "actionCode": "projectImport",
  "param": {
      "file_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/project/:id/child/list",
  "method": "get",
  "actionCode": "getChildProjectList",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      },
      "page_index": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "required": false,
          "type": "string"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "count": {
              "type": "int",
              "allowNull": false,
              "required": true
          },
          "list": {
              "type": "array",
              "entity": {
                  "___name": "IProjectChildListItem",
                  "id": {
                      "required": true,
                      "type": "int"
                  },
                  "hospital_id": {
                      "required": true,
                      "type": "int",
                      "description": "中心ID"
                  },
                  "hospital_name": {
                      "required": true,
                      "type": "string",
                      "description": "中心名称"
                  },
                  "name": {
                      "required": true,
                      "type": "string",
                      "description": "项目名称"
                  },
                  "stage_name": {
                      "required": true,
                      "type": "string",
                      "description": "阶段名称"
                  },
                  "plan_end_date": {
                      "required": true,
                      "type": "date",
                      "description": "计划结束时间"
                  },
                  "is_delay": {
                      "required": true,
                      "type": "boolean",
                      "description": "是否逾期"
                  },
                  "status": {
                      "required": true,
                      "type": "string",
                      "description": "项目状态"
                  },
                  "standard_time": {
                      "required": true,
                      "type": "number",
                      "description": "标准工时"
                  },
                  "actual_time": {
                      "required": true,
                      "type": "number",
                      "description": "实际工时"
                  },
                  "current_inclusion": {
                      "required": true,
                      "type": "int",
                      "description": "当前入组数"
                  },
                  "parent_id": {
                      "required": true,
                      "type": "int",
                      "description": "父级项目ID"
                  },
                  "plans": {
                      "required": true,
                      "type": "array",
                      "description": "计划"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/:project_id/log/list",
  "method": "get",
  "actionCode": "getAllLogsByType",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "type": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IPorjectLogModel",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "description": "项目id"
              },
              "name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": ""
              },
              "type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "时间类型编号",
                  "fieldName": "type",
                  "_modelAttribute": true,
                  "field": "type",
                  "description": "时间类型编号"
              },
              "original_value": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "修改前的值",
                  "fieldName": "original_value",
                  "_modelAttribute": true,
                  "field": "original_value",
                  "description": "修改前的值"
              },
              "current_value": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "修改后的值",
                  "fieldName": "current_value",
                  "_modelAttribute": true,
                  "field": "current_value",
                  "description": "修改后的值"
              },
              "owner_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "更新者id，如钉钉导入时为项目导入日志id、人为修改时为用户id",
                  "fieldName": "owner_id",
                  "_modelAttribute": true,
                  "field": "owner_id",
                  "description": "更新者id，如钉钉导入时为项目导入日志id、人为修改时为用户id"
              },
              "owner_type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 1,
                  "comment": "更新者类型，如app.enum.PROJECT.EVENT.OWNER.TYPE",
                  "fieldName": "owner_type",
                  "_modelAttribute": true,
                  "field": "owner_type",
                  "description": "更新者类型，如app.enum.PROJECT.EVENT.OWNER.TYPE"
              },
              "item_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "对象id",
                  "fieldName": "item_id",
                  "_modelAttribute": true,
                  "field": "item_id",
                  "description": "对象id"
              },
              "item_type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "对象类型, app.enum.PROJECT.LOG.ITEM_TYPE",
                  "fieldName": "item_type",
                  "_modelAttribute": true,
                  "field": "item_type",
                  "description": "对象类型, app.enum.PROJECT.LOG.ITEM_TYPE"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/type/list",
  "method": "get",
  "actionCode": "getProjectLevelList",
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IDictionaryProjectTypeModel",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目类型名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目类型名称"
              },
              "type": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "名称类型",
                  "fieldName": "type",
                  "_modelAttribute": true,
                  "field": "type",
                  "description": "名称类型"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/hospital/list",
  "method": "post",
  "actionCode": "getProjectHospitalList",
  "param": {
      "project_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IProjectHospitalListItem",
              "hospital_id": {
                  "required": true,
                  "type": "int",
                  "description": "中心ID"
              },
              "hospital_name": {
                  "required": true,
                  "type": "string",
                  "description": "中心名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/my/list",
  "method": "get",
  "actionCode": "getUserProjectList",
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IUserPorjectListItem",
              "project_id": {
                  "required": true,
                  "type": "int",
                  "description": "项目ID"
              },
              "project_name": {
                  "required": true,
                  "type": "string",
                  "description": "项目名称"
              },
              "parent_project_id": {
                  "required": true,
                  "type": "int",
                  "description": "父级项目ID"
              },
              "parent_seq_no": {
                  "required": true,
                  "type": "string",
                  "description": "项目编号"
              },
              "color_code": {
                  "required": true,
                  "type": "string",
                  "description": "颜色块儿"
              },
              "is_star_mark": {
                  "required": true,
                  "type": "int",
                  "description": "是否常用项目"
              },
              "collection_id": {
                  "required": true,
                  "type": "int",
                  "description": "常用项目ID"
              },
              "project_type": {
                  "required": true,
                  "type": "int",
                  "description": "项目类型"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/users/:user_id/my_list",
  "method": "get",
  "actionCode": "getAppointUserProjectList",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "user_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IUserPorjectListItem",
              "project_id": {
                  "required": true,
                  "type": "int",
                  "description": "项目ID"
              },
              "project_name": {
                  "required": true,
                  "type": "string",
                  "description": "项目名称"
              },
              "parent_project_id": {
                  "required": true,
                  "type": "int",
                  "description": "父级项目ID"
              },
              "parent_seq_no": {
                  "required": true,
                  "type": "string",
                  "description": "项目编号"
              },
              "color_code": {
                  "required": true,
                  "type": "string",
                  "description": "颜色块儿"
              },
              "is_star_mark": {
                  "required": true,
                  "type": "int",
                  "description": "是否常用项目"
              },
              "collection_id": {
                  "required": true,
                  "type": "int",
                  "description": "常用项目ID"
              },
              "project_type": {
                  "required": true,
                  "type": "int",
                  "description": "项目类型"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/:id/hospital/list",
  "method": "get",
  "actionCode": "getChildProjectHospitalList",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IProjectChildListItem",
              "id": {
                  "required": true,
                  "type": "int"
              },
              "hospital_id": {
                  "required": true,
                  "type": "int",
                  "description": "中心ID"
              },
              "hospital_name": {
                  "required": true,
                  "type": "string",
                  "description": "中心名称"
              },
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "项目名称"
              },
              "stage_name": {
                  "required": true,
                  "type": "string",
                  "description": "阶段名称"
              },
              "plan_end_date": {
                  "required": true,
                  "type": "date",
                  "description": "计划结束时间"
              },
              "is_delay": {
                  "required": true,
                  "type": "boolean",
                  "description": "是否逾期"
              },
              "status": {
                  "required": true,
                  "type": "string",
                  "description": "项目状态"
              },
              "standard_time": {
                  "required": true,
                  "type": "number",
                  "description": "标准工时"
              },
              "actual_time": {
                  "required": true,
                  "type": "number",
                  "description": "实际工时"
              },
              "current_inclusion": {
                  "required": true,
                  "type": "int",
                  "description": "当前入组数"
              },
              "parent_id": {
                  "required": true,
                  "type": "int",
                  "description": "父级项目ID"
              },
              "plans": {
                  "required": true,
                  "type": "array",
                  "description": "计划"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/export",
  "method": "get",
  "actionCode": "projectExport",
  "param": {
      "begin_date": {
          "required": true,
          "type": "date",
          "convertType": "string"
      },
      "end_date": {
          "required": true,
          "type": "date",
          "convertType": "string"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "stream"
      }
  }
}, {
  "url": "/api/v1/project/export-data",
  "method": "get",
  "actionCode": "projectExportData",
  "param": {
      "begin_date": {
          "required": true,
          "type": "date",
          "convertType": "string"
      },
      "end_date": {
          "required": true,
          "type": "date",
          "convertType": "string"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IProjectExportDataItem",
              "itemType": {
                  "required": true,
                  "type": "array"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id/active",
  "method": "put",
  "actionCode": "projectActive",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "object",
          "entity": {
              "___name": "IProjectModel",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "模版名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "模版名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id/unactive",
  "method": "put",
  "actionCode": "projectUnactive",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "object",
          "entity": {
              "___name": "IProjectModel",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "模版名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "模版名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id",
  "method": "put",
  "actionCode": "projectModify",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      },
      "dictionary_project_type_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "required": false,
          "type": "string"
      },
      "seq_no": {
          "required": false,
          "type": "string"
      },
      "plan_inclusion": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "plan_begin_date": {
          "required": false,
          "type": "date",
          "convertType": "string",
          "allowEmpty": true
      },
      "plan_end_date": {
          "required": false,
          "type": "date",
          "convertType": "string",
          "allowEmpty": true
      },
      "manager_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "plan_hospital": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "sponsor": {
          "required": false,
          "type": "string"
      },
      "product_name": {
          "required": false,
          "type": "string"
      },
      "dictionary_treatment_area_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "dictionary_project_phase_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "indication_comment": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "object",
          "entity": {
              "___name": "IProjectInfo",
              "id": {
                  "required": true,
                  "type": "int"
              },
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "项目名称"
              },
              "seq_no": {
                  "required": true,
                  "type": "string",
                  "description": "项目编号"
              },
              "is_delay": {
                  "required": true,
                  "type": "boolean",
                  "description": "是否逾期"
              },
              "dingtalk_project_id": {
                  "required": true,
                  "type": "int",
                  "description": "钉钉同步项目ID"
              },
              "dictionary_project_type_id": {
                  "required": true,
                  "type": "int",
                  "description": "项目类型ID"
              },
              "dictionary_project_type_name": {
                  "required": true,
                  "type": "string",
                  "description": "项目类型名称"
              },
              "status": {
                  "required": true,
                  "type": "int",
                  "description": "项目状态"
              },
              "plan_begin_date": {
                  "required": true,
                  "type": "date",
                  "description": "计划开始时间"
              },
              "plan_end_date": {
                  "required": true,
                  "type": "date",
                  "description": "计划结束时间"
              },
              "parent_id": {
                  "required": true,
                  "type": "int",
                  "description": "父级项目ID"
              },
              "current_project_stage_id": {
                  "required": true,
                  "type": "int",
                  "description": "当前项目阶段ID"
              },
              "stage": {
                  "required": true,
                  "type": "string",
                  "description": "当前阶段名称"
              },
              "stage_plan_begin_date": {
                  "required": true,
                  "type": "date",
                  "description": "阶段计划开始时间"
              },
              "stage_plan_end_date": {
                  "required": true,
                  "type": "date",
                  "description": "阶段计划结束时间"
              },
              "stage_actual_started_at": {
                  "required": true,
                  "type": "date",
                  "description": "阶段实际开始时间"
              },
              "stage_actual_ended_at": {
                  "required": true,
                  "type": "date",
                  "description": "阶段实际结束时间"
              },
              "current_project_milestone_id": {
                  "required": true,
                  "type": "int",
                  "description": "当前项目里程碑ID"
              },
              "current_project_milestone_name": {
                  "required": true,
                  "type": "string",
                  "description": "当前项目里程碑名称"
              },
              "mile_started_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑计划开始时间"
              },
              "mile_ended_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑计划结束时间"
              },
              "mile_actual_started_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑实际开始时间"
              },
              "mile_actual_ended_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑实际结束时间"
              },
              "current_project_milestone_status": {
                  "required": true,
                  "type": "int",
                  "description": "当前里程碑状态"
              },
              "plan_inclusion": {
                  "required": true,
                  "type": "int",
                  "description": "计划入组数"
              },
              "hospital_count": {
                  "required": true,
                  "type": "number",
                  "description": "中心数量"
              },
              "created_at": {
                  "required": true,
                  "type": "date",
                  "description": "创建时间"
              },
              "is_actived": {
                  "required": true,
                  "type": "boolean",
                  "description": "是否激活"
              },
              "manager_id": {
                  "required": true,
                  "type": "int",
                  "description": "项目PM用户ID"
              },
              "manager_name": {
                  "required": true,
                  "type": "string",
                  "description": "项目PM名称"
              },
              "sponsor": {
                  "required": true,
                  "type": "string",
                  "description": "申办方"
              },
              "product_name": {
                  "required": true,
                  "type": "string",
                  "description": "产品名称"
              },
              "dictionary_treatment_area_id": {
                  "required": true,
                  "type": "int",
                  "description": "治疗领域ID"
              },
              "treatment_area": {
                  "required": true,
                  "type": "string",
                  "description": "治疗领域名称"
              },
              "indication_comment": {
                  "required": true,
                  "type": "string",
                  "description": ""
              },
              "dictionary_project_phase_id": {
                  "required": true,
                  "type": "int",
                  "description": "周期ID"
              },
              "type": {
                  "required": true,
                  "type": "int",
                  "description": "项目类型"
              },
              "project_phase": {
                  "required": true,
                  "type": "string",
                  "description": "周期名称"
              },
              "is_main_project": {
                  "required": true,
                  "type": "int",
                  "description": "是否主项目"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects",
  "method": "post",
  "actionCode": "projectAdd",
  "param": {
      "seq_no": {
          "required": true,
          "type": "string"
      },
      "dictionary_project_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "plan_begin_date": {
          "required": false,
          "type": "date",
          "convertType": "string",
          "allowEmpty": true
      },
      "plan_end_date": {
          "required": false,
          "type": "date",
          "convertType": "string",
          "allowEmpty": true
      },
      "remark": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      },
      "sponsor": {
          "required": true,
          "type": "string"
      },
      "product_name": {
          "required": true,
          "type": "string"
      },
      "dictionary_treatment_area_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "dictionary_project_phase_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "indication_comment": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      },
      "plan_inclusion": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "plan_hospital": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "type": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "object",
          "entity": {
              "___name": "IProjectInfo",
              "id": {
                  "required": true,
                  "type": "int"
              },
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "项目名称"
              },
              "seq_no": {
                  "required": true,
                  "type": "string",
                  "description": "项目编号"
              },
              "is_delay": {
                  "required": true,
                  "type": "boolean",
                  "description": "是否逾期"
              },
              "dingtalk_project_id": {
                  "required": true,
                  "type": "int",
                  "description": "钉钉同步项目ID"
              },
              "dictionary_project_type_id": {
                  "required": true,
                  "type": "int",
                  "description": "项目类型ID"
              },
              "dictionary_project_type_name": {
                  "required": true,
                  "type": "string",
                  "description": "项目类型名称"
              },
              "status": {
                  "required": true,
                  "type": "int",
                  "description": "项目状态"
              },
              "plan_begin_date": {
                  "required": true,
                  "type": "date",
                  "description": "计划开始时间"
              },
              "plan_end_date": {
                  "required": true,
                  "type": "date",
                  "description": "计划结束时间"
              },
              "parent_id": {
                  "required": true,
                  "type": "int",
                  "description": "父级项目ID"
              },
              "current_project_stage_id": {
                  "required": true,
                  "type": "int",
                  "description": "当前项目阶段ID"
              },
              "stage": {
                  "required": true,
                  "type": "string",
                  "description": "当前阶段名称"
              },
              "stage_plan_begin_date": {
                  "required": true,
                  "type": "date",
                  "description": "阶段计划开始时间"
              },
              "stage_plan_end_date": {
                  "required": true,
                  "type": "date",
                  "description": "阶段计划结束时间"
              },
              "stage_actual_started_at": {
                  "required": true,
                  "type": "date",
                  "description": "阶段实际开始时间"
              },
              "stage_actual_ended_at": {
                  "required": true,
                  "type": "date",
                  "description": "阶段实际结束时间"
              },
              "current_project_milestone_id": {
                  "required": true,
                  "type": "int",
                  "description": "当前项目里程碑ID"
              },
              "current_project_milestone_name": {
                  "required": true,
                  "type": "string",
                  "description": "当前项目里程碑名称"
              },
              "mile_started_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑计划开始时间"
              },
              "mile_ended_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑计划结束时间"
              },
              "mile_actual_started_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑实际开始时间"
              },
              "mile_actual_ended_at": {
                  "required": true,
                  "type": "date",
                  "description": "里程碑实际结束时间"
              },
              "current_project_milestone_status": {
                  "required": true,
                  "type": "int",
                  "description": "当前里程碑状态"
              },
              "plan_inclusion": {
                  "required": true,
                  "type": "int",
                  "description": "计划入组数"
              },
              "hospital_count": {
                  "required": true,
                  "type": "number",
                  "description": "中心数量"
              },
              "created_at": {
                  "required": true,
                  "type": "date",
                  "description": "创建时间"
              },
              "is_actived": {
                  "required": true,
                  "type": "boolean",
                  "description": "是否激活"
              },
              "manager_id": {
                  "required": true,
                  "type": "int",
                  "description": "项目PM用户ID"
              },
              "manager_name": {
                  "required": true,
                  "type": "string",
                  "description": "项目PM名称"
              },
              "sponsor": {
                  "required": true,
                  "type": "string",
                  "description": "申办方"
              },
              "product_name": {
                  "required": true,
                  "type": "string",
                  "description": "产品名称"
              },
              "dictionary_treatment_area_id": {
                  "required": true,
                  "type": "int",
                  "description": "治疗领域ID"
              },
              "treatment_area": {
                  "required": true,
                  "type": "string",
                  "description": "治疗领域名称"
              },
              "indication_comment": {
                  "required": true,
                  "type": "string",
                  "description": ""
              },
              "dictionary_project_phase_id": {
                  "required": true,
                  "type": "int",
                  "description": "周期ID"
              },
              "type": {
                  "required": true,
                  "type": "int",
                  "description": "项目类型"
              },
              "project_phase": {
                  "required": true,
                  "type": "string",
                  "description": "周期名称"
              },
              "is_main_project": {
                  "required": true,
                  "type": "int",
                  "description": "是否主项目"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/all",
  "method": "get",
  "actionCode": "getAllMainPorjects",
  "param": {
      "keywords": {
          "required": false,
          "type": "string"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IPorjectLogModel",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "description": "项目id"
              },
              "name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": ""
              },
              "type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "时间类型编号",
                  "fieldName": "type",
                  "_modelAttribute": true,
                  "field": "type",
                  "description": "时间类型编号"
              },
              "original_value": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "修改前的值",
                  "fieldName": "original_value",
                  "_modelAttribute": true,
                  "field": "original_value",
                  "description": "修改前的值"
              },
              "current_value": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "修改后的值",
                  "fieldName": "current_value",
                  "_modelAttribute": true,
                  "field": "current_value",
                  "description": "修改后的值"
              },
              "owner_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "更新者id，如钉钉导入时为项目导入日志id、人为修改时为用户id",
                  "fieldName": "owner_id",
                  "_modelAttribute": true,
                  "field": "owner_id",
                  "description": "更新者id，如钉钉导入时为项目导入日志id、人为修改时为用户id"
              },
              "owner_type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 1,
                  "comment": "更新者类型，如app.enum.PROJECT.EVENT.OWNER.TYPE",
                  "fieldName": "owner_type",
                  "_modelAttribute": true,
                  "field": "owner_type",
                  "description": "更新者类型，如app.enum.PROJECT.EVENT.OWNER.TYPE"
              },
              "item_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "对象id",
                  "fieldName": "item_id",
                  "_modelAttribute": true,
                  "field": "item_id",
                  "description": "对象id"
              },
              "item_type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "对象类型, app.enum.PROJECT.LOG.ITEM_TYPE",
                  "fieldName": "item_type",
                  "_modelAttribute": true,
                  "field": "item_type",
                  "description": "对象类型, app.enum.PROJECT.LOG.ITEM_TYPE"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects",
  "method": "get",
  "actionCode": "getProjectPageList",
  "param": {
      "page_index": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "keywords": {
          "required": false,
          "type": "string"
      },
      "project_ids": {
          "required": false,
          "type": "string"
      },
      "status": {
          "required": false,
          "type": "int",
          "convertType": "int",
          "values": [1, 2, 3, 4],
          "allowNull": true
      },
      "order_by": {
          "required": false,
          "type": "string"
      },
      "order_rule": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "count": {
              "type": "int",
              "allowNull": false,
              "required": true
          },
          "list": {
              "type": "array",
              "entity": {
                  "___name": "IProjectsItem",
                  "collection_id": {
                      "required": true,
                      "type": "int",
                      "description": "常用项目ID"
                  },
                  "current_project_milestone_id": {
                      "required": true,
                      "type": "int",
                      "description": "当前里程碑ID"
                  },
                  "ended_at": {
                      "required": true,
                      "type": "string",
                      "allowNull": true,
                      "description": "计划结束时间"
                  },
                  "id": {
                      "required": true,
                      "type": "int",
                      "allowNull": false
                  },
                  "inclusion": {
                      "required": true,
                      "type": "int",
                      "allowNull": false,
                      "description": "入组数"
                  },
                  "is_collection": {
                      "required": true,
                      "type": "boolean",
                      "allowNull": false,
                      "description": "是否常用项目"
                  },
                  "is_delay": {
                      "required": true,
                      "type": "boolean",
                      "allowNull": false,
                      "description": "是否逾期"
                  },
                  "manager_id": {
                      "required": true,
                      "type": "int",
                      "allowNull": true,
                      "description": "项目PM用户ID"
                  },
                  "manager_name": {
                      "required": true,
                      "type": "string",
                      "allowNull": true,
                      "description": "项目PM名称"
                  },
                  "plan_inclusion": {
                      "required": true,
                      "type": "int",
                      "allowNull": true,
                      "description": "计划入组数"
                  },
                  "product_name": {
                      "required": true,
                      "type": "string",
                      "allowNull": true,
                      "description": "产品名称"
                  },
                  "project_milestone_name": {
                      "required": true,
                      "type": "string",
                      "allowNull": true,
                      "description": "当前里程碑名称"
                  },
                  "seq_no": {
                      "required": true,
                      "type": "string",
                      "allowNull": true,
                      "description": "项目编号"
                  },
                  "status": {
                      "required": true,
                      "type": "int",
                      "allowNull": false,
                      "description": "项目状态"
                  },
                  "week_inclusion": {
                      "required": true,
                      "type": "int",
                      "allowNull": false,
                      "description": "本周入组数"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_hospitals/:id",
  "method": "delete",
  "actionCode": "projectChildRemove",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "模版名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "模版名称"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id",
  "method": "delete",
  "actionCode": "projectRemove",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "模版名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "模版名称"
          }
      }
  }
}, {
  "url": "/api/v1/projects/filters",
  "method": "get",
  "actionCode": "projectFilters",
  "param": {
      "search_by": {
          "required": true,
          "type": "string"
      },
      "keywords": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IProjectFiltersItem",
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "名称"
              },
              "project_ids": {
                  "required": true,
                  "type": "array",
                  "description": "符合条件的项目IDs"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/logs",
  "method": "get",
  "actionCode": "getProjectLogList",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "page_index": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "count": {
              "type": "int",
              "allowNull": false,
              "required": true
          },
          "list": {
              "type": "array",
              "entity": {
                  "___name": "IPorjectLogModel",
                  "id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "company_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "企业id",
                      "fieldName": "company_id",
                      "_modelAttribute": true,
                      "field": "company_id",
                      "description": "企业id"
                  },
                  "project_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "项目id",
                      "fieldName": "project_id",
                      "_modelAttribute": true,
                      "field": "project_id",
                      "description": "项目id"
                  },
                  "name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": ""
                  },
                  "type": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "时间类型编号",
                      "fieldName": "type",
                      "_modelAttribute": true,
                      "field": "type",
                      "description": "时间类型编号"
                  },
                  "original_value": {
                      "type": "TEXT",
                      "allowNull": true,
                      "comment": "修改前的值",
                      "fieldName": "original_value",
                      "_modelAttribute": true,
                      "field": "original_value",
                      "description": "修改前的值"
                  },
                  "current_value": {
                      "type": "TEXT",
                      "allowNull": true,
                      "comment": "修改后的值",
                      "fieldName": "current_value",
                      "_modelAttribute": true,
                      "field": "current_value",
                      "description": "修改后的值"
                  },
                  "owner_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": -1,
                      "comment": "更新者id，如钉钉导入时为项目导入日志id、人为修改时为用户id",
                      "fieldName": "owner_id",
                      "_modelAttribute": true,
                      "field": "owner_id",
                      "description": "更新者id，如钉钉导入时为项目导入日志id、人为修改时为用户id"
                  },
                  "owner_type": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 1,
                      "comment": "更新者类型，如app.enum.PROJECT.EVENT.OWNER.TYPE",
                      "fieldName": "owner_type",
                      "_modelAttribute": true,
                      "field": "owner_type",
                      "description": "更新者类型，如app.enum.PROJECT.EVENT.OWNER.TYPE"
                  },
                  "item_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "对象id",
                      "fieldName": "item_id",
                      "_modelAttribute": true,
                      "field": "item_id",
                      "description": "对象id"
                  },
                  "item_type": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "对象类型, app.enum.PROJECT.LOG.ITEM_TYPE",
                      "fieldName": "item_type",
                      "_modelAttribute": true,
                      "field": "item_type",
                      "description": "对象类型, app.enum.PROJECT.LOG.ITEM_TYPE"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id",
  "method": "get",
  "actionCode": "getProjectInfo",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectInfo",
          "id": {
              "required": true,
              "type": "int"
          },
          "name": {
              "required": true,
              "type": "string",
              "description": "项目名称"
          },
          "seq_no": {
              "required": true,
              "type": "string",
              "description": "项目编号"
          },
          "is_delay": {
              "required": true,
              "type": "boolean",
              "description": "是否逾期"
          },
          "dingtalk_project_id": {
              "required": true,
              "type": "int",
              "description": "钉钉同步项目ID"
          },
          "dictionary_project_type_id": {
              "required": true,
              "type": "int",
              "description": "项目类型ID"
          },
          "dictionary_project_type_name": {
              "required": true,
              "type": "string",
              "description": "项目类型名称"
          },
          "status": {
              "required": true,
              "type": "int",
              "description": "项目状态"
          },
          "plan_begin_date": {
              "required": true,
              "type": "date",
              "description": "计划开始时间"
          },
          "plan_end_date": {
              "required": true,
              "type": "date",
              "description": "计划结束时间"
          },
          "parent_id": {
              "required": true,
              "type": "int",
              "description": "父级项目ID"
          },
          "current_project_stage_id": {
              "required": true,
              "type": "int",
              "description": "当前项目阶段ID"
          },
          "stage": {
              "required": true,
              "type": "string",
              "description": "当前阶段名称"
          },
          "stage_plan_begin_date": {
              "required": true,
              "type": "date",
              "description": "阶段计划开始时间"
          },
          "stage_plan_end_date": {
              "required": true,
              "type": "date",
              "description": "阶段计划结束时间"
          },
          "stage_actual_started_at": {
              "required": true,
              "type": "date",
              "description": "阶段实际开始时间"
          },
          "stage_actual_ended_at": {
              "required": true,
              "type": "date",
              "description": "阶段实际结束时间"
          },
          "current_project_milestone_id": {
              "required": true,
              "type": "int",
              "description": "当前项目里程碑ID"
          },
          "current_project_milestone_name": {
              "required": true,
              "type": "string",
              "description": "当前项目里程碑名称"
          },
          "mile_started_at": {
              "required": true,
              "type": "date",
              "description": "里程碑计划开始时间"
          },
          "mile_ended_at": {
              "required": true,
              "type": "date",
              "description": "里程碑计划结束时间"
          },
          "mile_actual_started_at": {
              "required": true,
              "type": "date",
              "description": "里程碑实际开始时间"
          },
          "mile_actual_ended_at": {
              "required": true,
              "type": "date",
              "description": "里程碑实际结束时间"
          },
          "current_project_milestone_status": {
              "required": true,
              "type": "int",
              "description": "当前里程碑状态"
          },
          "plan_inclusion": {
              "required": true,
              "type": "int",
              "description": "计划入组数"
          },
          "hospital_count": {
              "required": true,
              "type": "number",
              "description": "中心数量"
          },
          "created_at": {
              "required": true,
              "type": "date",
              "description": "创建时间"
          },
          "is_actived": {
              "required": true,
              "type": "boolean",
              "description": "是否激活"
          },
          "manager_id": {
              "required": true,
              "type": "int",
              "description": "项目PM用户ID"
          },
          "manager_name": {
              "required": true,
              "type": "string",
              "description": "项目PM名称"
          },
          "sponsor": {
              "required": true,
              "type": "string",
              "description": "申办方"
          },
          "product_name": {
              "required": true,
              "type": "string",
              "description": "产品名称"
          },
          "dictionary_treatment_area_id": {
              "required": true,
              "type": "int",
              "description": "治疗领域ID"
          },
          "treatment_area": {
              "required": true,
              "type": "string",
              "description": "治疗领域名称"
          },
          "indication_comment": {
              "required": true,
              "type": "string",
              "description": ""
          },
          "dictionary_project_phase_id": {
              "required": true,
              "type": "int",
              "description": "周期ID"
          },
          "type": {
              "required": true,
              "type": "int",
              "description": "项目类型"
          },
          "project_phase": {
              "required": true,
              "type": "string",
              "description": "周期名称"
          },
          "is_main_project": {
              "required": true,
              "type": "int",
              "description": "是否主项目"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/color",
  "method": "put",
  "actionCode": "projectColorCustomize",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "color_code": {
          "required": true,
          "type": "string"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectUserColorRelationshipModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "公司",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "公司"
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "description": "项目"
          },
          "user_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "用户id",
              "fieldName": "user_id",
              "_modelAttribute": true,
              "field": "user_id",
              "description": "用户id"
          },
          "color_code": {
              "type": "STRING",
              "allowNull": true,
              "comment": "颜色编号",
              "fieldName": "color_code",
              "_modelAttribute": true,
              "field": "color_code",
              "description": "颜色编号"
          }
      }
  }
}, {
  "url": "/api/v1/projects/get_project_surplus_inclusion/:project_id",
  "method": "get",
  "actionCode": "getProjectSurplusInclusion",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectSurplusInclusion",
          "surplus_inclusion": {
              "required": true,
              "type": "int",
              "description": "剩余入组数"
          }
      }
  }
}, {
  "url": "/api/v1/projects/get_project_all_inclusion/:project_id",
  "method": "get",
  "actionCode": "getProjectAllInclusion",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectAllInclusion",
          "all_inclusion": {
              "required": true,
              "type": "int",
              "description": "所有入组数"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/type_change",
  "method": "put",
  "actionCode": "projectTypeChange",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "type": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTopLevelExtendModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目id",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "description": "项目id"
          },
          "sponsor": {
              "type": "STRING",
              "allowNull": true,
              "comment": "",
              "fieldName": "sponsor",
              "_modelAttribute": true,
              "field": "sponsor",
              "description": ""
          },
          "product_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "",
              "fieldName": "product_name",
              "_modelAttribute": true,
              "field": "product_name",
              "description": ""
          },
          "indication_comment": {
              "type": "TEXT",
              "allowNull": true,
              "comment": "",
              "fieldName": "indication_comment",
              "_modelAttribute": true,
              "field": "indication_comment",
              "description": ""
          },
          "dictionary_project_phase_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 1,
              "comment": "项目分期",
              "fieldName": "dictionary_project_phase_id",
              "_modelAttribute": true,
              "field": "dictionary_project_phase_id",
              "description": "项目分期"
          },
          "dictionary_treatment_area_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "治疗领域",
              "fieldName": "dictionary_treatment_area_id",
              "_modelAttribute": true,
              "field": "dictionary_treatment_area_id",
              "description": "治疗领域"
          },
          "type": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 1,
              "comment": "项目类型 enum.PROJECT.TYPE",
              "fieldName": "type",
              "_modelAttribute": true,
              "field": "type",
              "description": "项目类型 enum.PROJECT.TYPE"
          }
      }
  }
}, {
  "url": "/api/v1/projects/member_allocate/projects",
  "method": "get",
  "actionCode": "getProjectsWithMember",
  "param": {
      "page_index": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "count": {
              "type": "int",
              "allowNull": false,
              "required": true
          },
          "list": {
              "type": "array",
              "entity": {
                  "___name": "IProjectsWithMemberItem",
                  "id": {
                      "required": true,
                      "type": "int"
                  },
                  "seq_no": {
                      "required": true,
                      "type": "string",
                      "description": "项目编号"
                  },
                  "product_name": {
                      "required": true,
                      "type": "string",
                      "description": "产品名称"
                  },
                  "manager_id": {
                      "required": true,
                      "type": "int",
                      "description": "项目PM用户ID"
                  },
                  "user_name": {
                      "required": true,
                      "type": "string",
                      "description": "项目PM名称"
                  },
                  "avatar": {
                      "required": true,
                      "type": "string",
                      "description": "项目PM头像",
                      "allowNull": true
                  },
                  "child_count": {
                      "required": true,
                      "type": "int",
                      "description": "中心总数"
                  },
                  "member_count": {
                      "required": true,
                      "type": "int",
                      "description": "成员总数"
                  },
                  "project_members": {
                      "required": true,
                      "type": "array",
                      "description": "成员"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/member_allocate/projects/:projectct_id/children",
  "method": "get",
  "actionCode": "getChildProjectsWithMember",
  "param": {
      "projectct_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IChildProjectsWithMemberItem",
              "id": {
                  "required": true,
                  "type": "int"
              },
              "hospital_id": {
                  "required": true,
                  "type": "int",
                  "description": "中心ID"
              },
              "child_project_name": {
                  "required": true,
                  "type": "string",
                  "description": "中心名称"
              },
              "province_name": {
                  "required": true,
                  "type": "string",
                  "description": "省份名称"
              },
              "city_name": {
                  "required": true,
                  "type": "string",
                  "description": "城市名称"
              },
              "project_members": {
                  "required": true,
                  "type": "array",
                  "description": "成员"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_hospitals",
  "method": "get",
  "actionCode": "projectChildren",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_child_level_extend",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectChildrenItem",
          "id": {
              "required": true,
              "type": "int"
          },
          "hospital_id": {
              "required": true,
              "type": "int",
              "description": "中心ID"
          },
          "hospital_name": {
              "required": true,
              "type": "string",
              "description": "中心名称"
          },
          "province_id": {
              "required": true,
              "type": "int",
              "description": "省份ID"
          },
          "province_name": {
              "required": true,
              "type": "string",
              "description": "省份名称"
          },
          "city_id": {
              "required": true,
              "type": "int",
              "description": "城市ID"
          },
          "city_name": {
              "required": true,
              "type": "string",
              "description": "城市名称"
          },
          "current_project_milestone_id": {
              "required": true,
              "type": "int",
              "description": "当前里程碑ID"
          },
          "project_milestone_name": {
              "required": true,
              "type": "string",
              "description": "当前里程碑名称"
          },
          "mile_ended_at": {
              "required": true,
              "type": "date",
              "description": "里程碑计划结束时间"
          },
          "created_at": {
              "required": true,
              "type": "date",
              "description": "中心创建时间"
          },
          "plan_inclusion": {
              "required": true,
              "type": "int",
              "description": "计划入组数"
          },
          "status": {
              "required": true,
              "type": "int",
              "description": "状态"
          },
          "is_collection": {
              "required": true,
              "type": "int",
              "description": "是否常用中心"
          },
          "collection_id": {
              "required": true,
              "type": "int",
              "description": "常用中心ID"
          },
          "is_delay": {
              "required": true,
              "type": "int",
              "description": "是否逾期"
          },
          "standard_times": {
              "required": true,
              "type": "number",
              "description": "计划工时"
          },
          "actual_times": {
              "required": true,
              "type": "number",
              "description": "实际工时"
          },
          "numbers": {
              "required": true,
              "type": "array",
              "description": "入组信息"
          },
          "week_numbers": {
              "required": true,
              "type": "array",
              "description": "本周入组信息"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_hospitals",
  "method": "post",
  "actionCode": "addChildProject",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "hospital_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "hospital_number": {
          "required": true,
          "type": "string"
      }
  },
  "tag": "project_child_level_extend",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "模版名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "模版名称"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_hospitals/:id",
  "method": "put",
  "actionCode": "modifyChildProject",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "id": {
          "required": true,
          "type": "int"
      },
      "hospital_number": {
          "required": false,
          "type": "string"
      },
      "screening": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "screening_failed": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "inclusion": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "uninclusion": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "falling": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_child_level_extend",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectChildLevelExtendModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "基于的项目id",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "description": "基于的项目id"
          },
          "hospital_number": {
              "type": "STRING",
              "allowNull": true,
              "comment": "分中心编号",
              "fieldName": "hospital_number",
              "_modelAttribute": true,
              "field": "hospital_number",
              "description": "分中心编号"
          },
          "screening": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "筛选数",
              "fieldName": "screening",
              "_modelAttribute": true,
              "field": "screening",
              "description": "筛选数"
          },
          "screening_failed": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "筛选失败数",
              "fieldName": "screening_failed",
              "_modelAttribute": true,
              "field": "screening_failed",
              "description": "筛选失败数"
          },
          "inclusion": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "入组数",
              "fieldName": "inclusion",
              "_modelAttribute": true,
              "field": "inclusion",
              "description": "入组数"
          },
          "uninclusion": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "出组数",
              "fieldName": "uninclusion",
              "_modelAttribute": true,
              "field": "uninclusion",
              "description": "出组数"
          },
          "falling": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "脱落数",
              "fieldName": "falling",
              "_modelAttribute": true,
              "field": "falling",
              "description": "脱落数"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/core_progress",
  "method": "get",
  "actionCode": "getChildProjectCoreProgress",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_child_level_extend",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectCoreProgess",
          "plan_inclusion": {
              "required": true,
              "type": "int",
              "description": "计划入组数"
          },
          "current_inclusion": {
              "required": true,
              "type": "int",
              "description": "当前入组数"
          },
          "milestones_all": {
              "required": true,
              "type": "int",
              "description": "里程碑总数"
          },
          "milestones_complete": {
              "required": true,
              "type": "int",
              "description": "里程碑完成数"
          },
          "milestones_uncomplete": {
              "required": true,
              "type": "int",
              "description": "里程碑未完成数"
          },
          "milestones_overdue": {
              "required": true,
              "type": "int",
              "description": "里程碑逾期数"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_progress",
  "method": "get",
  "actionCode": "getProjectProgress",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_child_level_extend",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectCoreProgess",
          "plan_inclusion": {
              "required": true,
              "type": "int",
              "description": "计划入组数"
          },
          "current_inclusion": {
              "required": true,
              "type": "int",
              "description": "当前入组数"
          },
          "milestones_all": {
              "required": true,
              "type": "int",
              "description": "里程碑总数"
          },
          "milestones_complete": {
              "required": true,
              "type": "int",
              "description": "里程碑完成数"
          },
          "milestones_uncomplete": {
              "required": true,
              "type": "int",
              "description": "里程碑未完成数"
          },
          "milestones_overdue": {
              "required": true,
              "type": "int",
              "description": "里程碑逾期数"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_type_statistics",
  "method": "get",
  "actionCode": "getProjectTypeStatistics",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_child_level_extend",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "IProjectTypeStatisticItem",
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "类型名称"
              },
              "count": {
                  "required": true,
                  "type": "int",
                  "description": "项目总数"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id/stages/:project_stage_id/tasks/:project_task_id/set_milestone",
  "method": "put",
  "actionCode": "setMilestoneTask",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int"
      },
      "project_task_id": {
          "required": true,
          "type": "int"
      },
      "is_milestone": {
          "required": true,
          "type": "boolean"
      }
  },
  "tag": "project_milestone",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "任务信息列表",
          "entity": {
              "___name": "IProjectTaskInfo",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "name": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "任务名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务名称"
              },
              "status": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "任务状态",
                  "fieldName": "status",
                  "_modelAttribute": true,
                  "field": "status",
                  "description": "任务状态"
              },
              "is_delay": {
                  "type": "BOOLEAN",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "是否逾期",
                  "fieldName": "is_delay",
                  "_modelAttribute": true,
                  "field": "is_delay",
                  "description": "是否逾期"
              },
              "delay_days": {
                  "type": "int",
                  "allowNull": false,
                  "description": "延期的天数"
              },
              "started_at": {
                  "type": "string",
                  "allowNull": true,
                  "description": "开始时间"
              },
              "ended_at": {
                  "type": "string",
                  "allowNull": true,
                  "description": "结束时间"
              },
              "project_milestone_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "milestone_order": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 1,
                  "comment": "里程碑排序，从1开始",
                  "fieldName": "order",
                  "_modelAttribute": true,
                  "field": "order",
                  "description": "里程碑排序，从1开始"
              },
              "task_is_deleted": {
                  "type": "BOOLEAN",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "",
                  "fieldName": "is_deleted",
                  "_modelAttribute": true,
                  "field": "is_deleted",
                  "description": ""
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "references": {
                      "model": "projects",
                      "key": "id"
                  },
                  "onDelete": "CASCADE",
                  "onUpdate": "CASCADE",
                  "description": "项目id"
              },
              "plan_time_limit": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "计划时限",
                  "fieldName": "plan_time_limit",
                  "_modelAttribute": true,
                  "field": "plan_time_limit",
                  "description": "计划时限"
              },
              "project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              },
              "parent_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "父项目id",
                  "fieldName": "parent_id",
                  "_modelAttribute": true,
                  "field": "parent_id",
                  "description": "父项目id"
              },
              "project_stage_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "阶段id",
                  "fieldName": "project_stage_id",
                  "_modelAttribute": true,
                  "field": "project_stage_id",
                  "description": "阶段id"
              },
              "stage_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "阶段名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "阶段名称"
              },
              "hospital_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "医院id",
                  "fieldName": "hospital_id",
                  "_modelAttribute": true,
                  "field": "hospital_id",
                  "references": {
                      "model": "hospitals",
                      "key": "id"
                  },
                  "onDelete": "NO ACTION",
                  "onUpdate": "CASCADE",
                  "description": "医院id"
              },
              "hospital_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": ""
              },
              "task_type_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "任务类型ID",
                  "fieldName": "task_type_id",
                  "_modelAttribute": true,
                  "field": "task_type_id",
                  "description": "任务类型ID"
              },
              "task_type_name": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "任务类型名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务类型名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id/project_milestones",
  "method": "get",
  "actionCode": "getProjectMilestonesByProject",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_milestone",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "里程碑任务信息列表",
          "entity": {
              "___name": "IProjectMilestoneTaskInfo",
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "里程碑id"
              },
              "order": {
                  "type": "string",
                  "allowNull": false,
                  "description": "里程碑序号"
              },
              "name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "任务名称"
              },
              "status": {
                  "type": "int",
                  "allowNull": false,
                  "description": "任务状态"
              },
              "started_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务开始时间"
              },
              "ended_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务截止时间"
              },
              "actual_started_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务实际开始时间"
              },
              "actual_ended_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务实际截止时间"
              },
              "is_delay": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "任务是否逾期"
              },
              "stage_count": {
                  "type": "int",
                  "allowNull": false,
                  "description": "阶段数量"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id/project_milestones/order",
  "method": "put",
  "actionCode": "modifyProjectMilestonesOrder",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      },
      "list": {
          "type": "array"
      }
  },
  "tag": "project_milestone",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "里程碑任务信息列表",
          "entity": {
              "___name": "IProjectMilestoneTaskInfo",
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "里程碑id"
              },
              "order": {
                  "type": "string",
                  "allowNull": false,
                  "description": "里程碑序号"
              },
              "name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "任务名称"
              },
              "status": {
                  "type": "int",
                  "allowNull": false,
                  "description": "任务状态"
              },
              "started_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务开始时间"
              },
              "ended_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务截止时间"
              },
              "actual_started_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务实际开始时间"
              },
              "actual_ended_at": {
                  "type": "date",
                  "allowNull": false,
                  "description": "任务实际截止时间"
              },
              "is_delay": {
                  "type": "boolean",
                  "allowNull": false,
                  "description": "任务是否逾期"
              },
              "stage_count": {
                  "type": "int",
                  "allowNull": false,
                  "description": "阶段数量"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_milestones/:id",
  "method": "get",
  "actionCode": "getProjectMilestone",
  "param": {},
  "tag": "project_milestone",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectMilestoneTaskDetail",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "project_task_id": {
              "type": "int",
              "allowNull": false,
              "description": ""
          },
          "name": {
              "type": "string",
              "allowNull": true,
              "description": "任务名称"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "description": "项目id"
          },
          "remark": {
              "type": "string",
              "allowNull": true,
              "description": "备注"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "父级任务id"
          },
          "started_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务开始时间"
          },
          "ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务截止时间"
          },
          "completed_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务完成时间"
          },
          "status": {
              "type": "int",
              "allowNull": false,
              "description": "任务状态"
          },
          "completed_by": {
              "type": "int",
              "allowNull": false,
              "description": "任务被谁完成"
          },
          "standard_time": {
              "type": "number",
              "allowNull": false,
              "description": "标准工时"
          },
          "actual_time": {
              "type": "number",
              "allowNull": false,
              "description": "实际工时"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "project_stage_id": {
              "type": "int",
              "allowNull": false,
              "description": "阶段id"
          },
          "type": {
              "type": "int",
              "allowNull": false,
              "description": "项目日程类型"
          },
          "tag": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "order": {
              "type": "int",
              "allowNull": false,
              "description": "序号"
          },
          "actual_started_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际开始时间"
          },
          "actual_ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际结束时间"
          },
          "is_delay": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否逾期"
          },
          "guide": {
              "type": "string",
              "allowNull": true,
              "description": "指南"
          },
          "unique_no": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "created_by": {
              "type": "int",
              "allowNull": false,
              "description": "创建人"
          },
          "plan_time_limit": {
              "type": "int",
              "allowNull": false,
              "description": "计划时限"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "description": "里程碑id"
          },
          "stages": {
              "type": "array",
              "allowNull": true,
              "entity": {
                  "id": {
                      "type": "int",
                      "allowNull": false,
                      "description": "阶段id"
                  },
                  "name": {
                      "type": "string",
                      "allowNull": true,
                      "description": "阶段名称"
                  }
              },
              "description": "角色列表"
          },
          "task_type_id": {
              "type": "int",
              "allowNull": false,
              "description": "任务类型ID"
          }
      }
  }
}, {
  "url": "/api/v1/project_milestones",
  "method": "get",
  "actionCode": "getProjectMilestones",
  "param": {
      "project_ids": {
          "required": true,
          "type": "string"
      }
  },
  "tag": "project_milestone",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "里程碑项目列表",
          "entity": {
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "项目id"
              },
              "seq_no": {
                  "type": "string",
                  "allowNull": true,
                  "description": "项目编号"
              },
              "parent_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "父项目id"
              },
              "hospital_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "医院id"
              },
              "current_project_stage_id": {
                  "type": "int",
                  "allowNull": true,
                  "description": "当前阶段id"
              },
              "hospital_name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "机构名称"
              },
              "project_milestones": {
                  "type": "array",
                  "allowNull": true,
                  "entity": {
                      "___name": "IProject",
                      "id": {
                          "type": "INTEGER",
                          "allowNull": false,
                          "primaryKey": true,
                          "autoIncrement": true,
                          "comment": "",
                          "fieldName": "id",
                          "_modelAttribute": true,
                          "field": "id",
                          "description": ""
                      },
                      "name": {
                          "type": "string"
                      }
                  },
                  "description": "项目列表"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/porject_roles",
  "method": "get",
  "actionCode": "getProjectRoleList",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "项目下的角色列表",
          "entity": {
              "___name": "projectRoleListItem",
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "角色id"
              },
              "name": {
                  "type": "string",
                  "allowNull": false,
                  "description": "角色名称"
              },
              "role_type": {
                  "type": "int",
                  "allowNull": false,
                  "description": "角色类型 this.app.enum.PROJECT.ROLE.TYPE"
              },
              "unique_no": {
                  "type": "int",
                  "allowNull": false,
                  "description": ""
              },
              "count": {
                  "type": "int",
                  "allowNull": false,
                  "description": "成员数量"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/porject_roles",
  "method": "post",
  "actionCode": "addProjectRole",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "name": {
          "required": true,
          "type": "string"
      }
  },
  "tag": "project_role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectRole",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "comment": "项目id"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "description": "角色id"
          },
          "name": {
              "type": "string",
              "allowNull": false,
              "description": "角色名称"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": true,
              "comment": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "comment": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "unique_no": {
              "type": "string",
              "allowNull": false,
              "comment": "唯一编号"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/porject_roles/:id",
  "method": "put",
  "actionCode": "modifyProjectRole",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "id": {
          "required": true,
          "type": "int"
      },
      "name": {
          "required": true,
          "type": "string"
      }
  },
  "tag": "project_role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectRole",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "comment": "项目id"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "description": "角色id"
          },
          "name": {
              "type": "string",
              "allowNull": false,
              "description": "角色名称"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": true,
              "comment": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "comment": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "unique_no": {
              "type": "string",
              "allowNull": false,
              "comment": "唯一编号"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/porject_roles/:id",
  "method": "delete",
  "actionCode": "deleteProjectRole",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_role",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectRole",
          "company_id": {
              "type": "int",
              "allowNull": false,
              "description": "企业id"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "comment": "项目id"
          },
          "id": {
              "type": "int",
              "allowNull": false,
              "description": "角色id"
          },
          "name": {
              "type": "string",
              "allowNull": false,
              "description": "角色名称"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": true,
              "comment": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "comment": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "unique_no": {
              "type": "string",
              "allowNull": false,
              "comment": "唯一编号"
          }
      }
  }
}, {
  "url": "/api/v1/project/project_stage/list",
  "method": "get",
  "actionCode": "getProjectStageNameList",
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectStageNameListItem",
          "project_stage_name": {
              "required": true,
              "type": "string",
              "description": "阶段名称"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages",
  "method": "get",
  "actionCode": "getProjectStageList",
  "param": {
      "project_id": {
          "type": "int",
          "convertType": "int"
      },
      "task_type_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectStageListItem",
          "project": {
              "required": true,
              "type": "object",
              "description": "项目信息"
          },
          "list": {
              "required": true,
              "type": "array",
              "entity": {
                  "order": {
                      "required": true,
                      "type": "int",
                      "description": "排序ID"
                  },
                  "task_type_id": {
                      "required": true,
                      "type": "int",
                      "description": "任务类型ID"
                  },
                  "id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "company_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "企业id",
                      "fieldName": "company_id",
                      "_modelAttribute": true,
                      "field": "company_id",
                      "description": "企业id"
                  },
                  "project_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "项目id",
                      "fieldName": "project_id",
                      "_modelAttribute": true,
                      "field": "project_id",
                      "references": {
                          "model": "projects",
                          "key": "id"
                      },
                      "onDelete": "CASCADE",
                      "onUpdate": "CASCADE",
                      "description": "项目id"
                  },
                  "name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "阶段名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "阶段名称"
                  },
                  "status": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "阶段状态",
                      "fieldName": "status",
                      "_modelAttribute": true,
                      "field": "status",
                      "description": "阶段状态"
                  },
                  "plan_begin_date": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "计划开始时间",
                      "fieldName": "plan_begin_date",
                      "_modelAttribute": true,
                      "field": "plan_begin_date",
                      "description": "计划开始时间"
                  },
                  "plan_end_date": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "计划结束时间",
                      "fieldName": "plan_end_date",
                      "_modelAttribute": true,
                      "field": "plan_end_date",
                      "description": "计划结束时间"
                  },
                  "finish_date": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "完成时间",
                      "fieldName": "finish_date",
                      "_modelAttribute": true,
                      "field": "finish_date",
                      "description": "完成时间"
                  },
                  "actual_started_at": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "实际开始时间",
                      "fieldName": "actual_started_at",
                      "_modelAttribute": true,
                      "field": "actual_started_at",
                      "description": "实际开始时间"
                  },
                  "actual_ended_at": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "实际结束时间",
                      "fieldName": "actual_ended_at",
                      "_modelAttribute": true,
                      "field": "actual_ended_at",
                      "description": "实际结束时间"
                  },
                  "is_delay": {
                      "type": "BOOLEAN",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "是否逾期",
                      "fieldName": "is_delay",
                      "_modelAttribute": true,
                      "field": "is_delay",
                      "description": "是否逾期"
                  },
                  "unique_no": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "唯一编号",
                      "fieldName": "unique_no",
                      "_modelAttribute": true,
                      "field": "unique_no",
                      "description": "唯一编号"
                  },
                  "has_project_milestone": {
                      "required": true,
                      "type": "boolean",
                      "description": "是否有里程碑"
                  },
                  "task_total": {
                      "required": true,
                      "type": "int",
                      "description": "任务总数"
                  },
                  "completed_total": {
                      "required": true,
                      "type": "int",
                      "description": "已完成任务总数"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks",
  "method": "get",
  "actionCode": "getTaskListByStage",
  "param": {
      "project_id": {
          "type": "int",
          "convertType": "int"
      },
      "project_stage_id": {
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "ITaskListByStageItem",
          "id": {
              "required": true,
              "type": "int",
              "description": "任务ID"
          },
          "company_id": {
              "required": true,
              "type": "int",
              "description": "企业ID"
          },
          "name": {
              "required": true,
              "type": "string",
              "description": "任务名称"
          },
          "status": {
              "required": true,
              "type": "int",
              "description": "任务状态"
          },
          "is_delay": {
              "required": true,
              "type": "int",
              "description": "是否逾期"
          },
          "delay_days": {
              "required": true,
              "type": "int",
              "description": "逾期天数"
          },
          "standard_time": {
              "required": true,
              "type": "number",
              "description": "标准工时"
          },
          "actual_time": {
              "required": true,
              "type": "number",
              "description": "实际工时"
          },
          "remark": {
              "required": true,
              "type": "string",
              "description": "备注"
          },
          "started_at": {
              "required": true,
              "type": "date",
              "description": "计划开始时间"
          },
          "ended_at": {
              "required": true,
              "type": "date",
              "description": "计划结束时间"
          },
          "project_milestone_id": {
              "required": true,
              "type": "int",
              "description": "里程碑ID"
          },
          "milestone_order": {
              "required": true,
              "type": "int",
              "description": "里程碑排序"
          },
          "guide": {
              "required": true,
              "type": "string",
              "description": "指南"
          },
          "project_id": {
              "required": true,
              "type": "int",
              "description": "项目ID"
          },
          "project_stage_id": {
              "required": true,
              "type": "int",
              "description": "项目阶段ID"
          },
          "order": {
              "required": true,
              "type": "int",
              "description": "项目任务排序"
          },
          "plan_time_limit": {
              "required": true,
              "type": "int",
              "description": "项目任务时限"
          },
          "owner_id": {
              "required": true,
              "type": "int",
              "description": "负责ID"
          },
          "owner_type": {
              "required": true,
              "type": "int",
              "description": "负责类型"
          },
          "owner_name": {
              "required": true,
              "type": "string",
              "description": "负责名称"
          },
          "avatar": {
              "required": true,
              "type": "string",
              "description": "头像"
          },
          "seq_no": {
              "required": true,
              "type": "string",
              "description": "项目编号"
          },
          "parent_id": {
              "required": true,
              "type": "int",
              "description": "父级项目ID"
          },
          "hospital_id": {
              "required": true,
              "type": "int",
              "description": "中心ID"
          },
          "hospital_name": {
              "required": true,
              "type": "string",
              "description": "中心名称"
          },
          "is_created_by_me": {
              "required": true,
              "type": "boolean",
              "description": "是否创建人"
          },
          "is_follower": {
              "required": true,
              "type": "boolean",
              "description": "是否关注人"
          },
          "user_count": {
              "required": true,
              "type": "int",
              "description": "用户总数"
          },
          "is_owner": {
              "required": true,
              "type": "boolean",
              "description": "是否负责人"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/order",
  "method": "put",
  "actionCode": "modifyProjectStageOrder",
  "param": {
      "task_type_id": {
          "require": true,
          "type": "int",
          "convertType": "int"
      },
      "list": {
          "type": "array"
      }
  },
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id",
  "method": "put",
  "actionCode": "modifyProjectStage",
  "param": {
      "project_id": {
          "type": "int",
          "convertType": "int"
      },
      "project_stage_id": {
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "type": "string?"
      }
  },
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectStageListItem",
          "project": {
              "required": true,
              "type": "object",
              "description": "项目信息"
          },
          "list": {
              "required": true,
              "type": "array",
              "entity": {
                  "order": {
                      "required": true,
                      "type": "int",
                      "description": "排序ID"
                  },
                  "task_type_id": {
                      "required": true,
                      "type": "int",
                      "description": "任务类型ID"
                  },
                  "id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "company_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "企业id",
                      "fieldName": "company_id",
                      "_modelAttribute": true,
                      "field": "company_id",
                      "description": "企业id"
                  },
                  "project_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "项目id",
                      "fieldName": "project_id",
                      "_modelAttribute": true,
                      "field": "project_id",
                      "references": {
                          "model": "projects",
                          "key": "id"
                      },
                      "onDelete": "CASCADE",
                      "onUpdate": "CASCADE",
                      "description": "项目id"
                  },
                  "name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "阶段名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "阶段名称"
                  },
                  "status": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "阶段状态",
                      "fieldName": "status",
                      "_modelAttribute": true,
                      "field": "status",
                      "description": "阶段状态"
                  },
                  "plan_begin_date": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "计划开始时间",
                      "fieldName": "plan_begin_date",
                      "_modelAttribute": true,
                      "field": "plan_begin_date",
                      "description": "计划开始时间"
                  },
                  "plan_end_date": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "计划结束时间",
                      "fieldName": "plan_end_date",
                      "_modelAttribute": true,
                      "field": "plan_end_date",
                      "description": "计划结束时间"
                  },
                  "finish_date": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "完成时间",
                      "fieldName": "finish_date",
                      "_modelAttribute": true,
                      "field": "finish_date",
                      "description": "完成时间"
                  },
                  "actual_started_at": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "实际开始时间",
                      "fieldName": "actual_started_at",
                      "_modelAttribute": true,
                      "field": "actual_started_at",
                      "description": "实际开始时间"
                  },
                  "actual_ended_at": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "实际结束时间",
                      "fieldName": "actual_ended_at",
                      "_modelAttribute": true,
                      "field": "actual_ended_at",
                      "description": "实际结束时间"
                  },
                  "is_delay": {
                      "type": "BOOLEAN",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "是否逾期",
                      "fieldName": "is_delay",
                      "_modelAttribute": true,
                      "field": "is_delay",
                      "description": "是否逾期"
                  },
                  "unique_no": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "唯一编号",
                      "fieldName": "unique_no",
                      "_modelAttribute": true,
                      "field": "unique_no",
                      "description": "唯一编号"
                  },
                  "has_project_milestone": {
                      "required": true,
                      "type": "boolean",
                      "description": "是否有里程碑"
                  },
                  "task_total": {
                      "required": true,
                      "type": "int",
                      "description": "任务总数"
                  },
                  "completed_total": {
                      "required": true,
                      "type": "int",
                      "description": "已完成任务总数"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:id",
  "method": "delete",
  "actionCode": "removeProjectStage",
  "param": {},
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectStageModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目id",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "references": {
                  "model": "projects",
                  "key": "id"
              },
              "onDelete": "CASCADE",
              "onUpdate": "CASCADE",
              "description": "项目id"
          },
          "name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "阶段名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "阶段名称"
          },
          "status": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "阶段状态",
              "fieldName": "status",
              "_modelAttribute": true,
              "field": "status",
              "description": "阶段状态"
          },
          "plan_begin_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "计划开始时间",
              "fieldName": "plan_begin_date",
              "_modelAttribute": true,
              "field": "plan_begin_date",
              "description": "计划开始时间"
          },
          "plan_end_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "计划结束时间",
              "fieldName": "plan_end_date",
              "_modelAttribute": true,
              "field": "plan_end_date",
              "description": "计划结束时间"
          },
          "finish_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "完成时间",
              "fieldName": "finish_date",
              "_modelAttribute": true,
              "field": "finish_date",
              "description": "完成时间"
          },
          "actual_started_at": {
              "type": "DATE",
              "allowNull": true,
              "comment": "实际开始时间",
              "fieldName": "actual_started_at",
              "_modelAttribute": true,
              "field": "actual_started_at",
              "description": "实际开始时间"
          },
          "actual_ended_at": {
              "type": "DATE",
              "allowNull": true,
              "comment": "实际结束时间",
              "fieldName": "actual_ended_at",
              "_modelAttribute": true,
              "field": "actual_ended_at",
              "description": "实际结束时间"
          },
          "is_delay": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "是否逾期",
              "fieldName": "is_delay",
              "_modelAttribute": true,
              "field": "is_delay",
              "description": "是否逾期"
          },
          "unique_no": {
              "type": "STRING",
              "allowNull": true,
              "comment": "唯一编号",
              "fieldName": "unique_no",
              "_modelAttribute": true,
              "field": "unique_no",
              "description": "唯一编号"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/form_datas",
  "method": "get",
  "actionCode": "getProjectStageFormDatas",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectStageFormDatasItem",
          "project_task_id": {
              "required": true,
              "type": "int",
              "description": "项目任务ID"
          },
          "form_data": {
              "required": true,
              "type": "object",
              "description": "表单数据信息"
          },
          "form_component_datas": {
              "required": true,
              "type": "array",
              "description": "表单组件数据信息"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/task_stage",
  "method": "get",
  "actionCode": "getProjectTaskStagesStatistic",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "export": {
          "required": false,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "project_stage",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "项目阶段统计列表",
          "entity": {
              "___name": "ITaskStageStatisticListItem",
              "name": {
                  "type": "string",
                  "allowNull": false,
                  "description": "名称"
              },
              "count": {
                  "type": "int",
                  "allowNull": false,
                  "description": "数量"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_stages/:project_stage_id/project_milestones/:project_milestone_id",
  "method": "delete",
  "actionCode": "deleteProjectStageMilestoneRelationship",
  "param": {
      "project_stage_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "project_milestone_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_stage_milestone_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectStageMilestoneRelationship",
          "id": {
              "type": "int",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": ""
          },
          "company_id": {
              "type": "int",
              "allowNull": false,
              "comment": "企业id"
          },
          "project_stage_id": {
              "type": "int",
              "allowNull": false,
              "comment": "项目阶段id"
          },
          "project_milestone_id": {
              "type": "int",
              "allowNull": false,
              "comment": "项目里程碑id"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "comment": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "comment": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "comment": ""
          }
      }
  }
}, {
  "url": "/api/v1/project_milestones/:id/add_stage_relationships",
  "method": "post",
  "actionCode": "setProjectStageMilestoneRelationship",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "stages": {
          "required": true,
          "type": "array"
      }
  },
  "tag": "project_stage_milestone_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/project_stages/:project_stage_id/project_milestones",
  "method": "get",
  "actionCode": "getProjectMilestoneDetailByStage",
  "param": {
      "project_stage_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_stage_milestone_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectStageMilestoneRelationshipTask",
          "id": {
              "type": "int",
              "allowNull": false,
              "comment": "项目里程碑id"
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "name": {
              "type": "TEXT",
              "allowNull": true,
              "comment": "任务名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务名称"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "description": "项目id"
          },
          "remark": {
              "type": "string",
              "allowNull": true,
              "description": "备注"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "父级任务id"
          },
          "started_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务开始时间"
          },
          "ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务截止时间"
          },
          "completed_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务完成时间"
          },
          "status": {
              "type": "int",
              "allowNull": false,
              "description": "任务状态"
          },
          "completed_by": {
              "type": "int",
              "allowNull": false,
              "description": "任务被谁完成"
          },
          "standard_time": {
              "type": "number",
              "allowNull": false,
              "description": "标准工时"
          },
          "actual_time": {
              "type": "number",
              "allowNull": false,
              "description": "实际工时"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "project_stage_id": {
              "type": "int",
              "allowNull": false,
              "description": "阶段id"
          },
          "type": {
              "type": "int",
              "allowNull": false,
              "description": "项目日程类型 this.app.enum.PROJECT.WORKING_TIME_TYPE"
          },
          "tag": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "order": {
              "type": "int",
              "allowNull": false,
              "description": "序号"
          },
          "actual_started_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际开始时间"
          },
          "actual_ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际结束时间"
          },
          "is_delay": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否逾期"
          },
          "guide": {
              "type": "string",
              "allowNull": true,
              "description": "指南"
          },
          "unique_no": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "created_by": {
              "type": "int",
              "allowNull": false,
              "description": "创建人"
          },
          "plan_time_limit": {
              "type": "int",
              "allowNull": false,
              "description": "计划时限"
          },
          "project_task_id": {
              "type": "int",
              "allowNull": false,
              "comment": "任务id"
          }
      }
  }
}, {
  "url": "/api/v1/tasks/:id/time-info",
  "method": "get",
  "actionCode": "getTimeInfo",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "任务的工时信息",
          "entity": {
              "___name": "ITimeInfo",
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "任务id"
              },
              "actual_time": {
                  "type": "number",
                  "allowNull": false,
                  "description": "实际工时"
              },
              "standard_time": {
                  "type": "number",
                  "allowNull": false,
                  "description": "标准工时"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/project_task/add",
  "method": "post",
  "actionCode": "addWorkingTime",
  "param": {
      "project_task_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "required": true,
          "type": "string",
          "allowEmpty": true
      },
      "type": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "started_at": {
          "required": true,
          "type": "date",
          "convertType": "string"
      },
      "ended_at": {
          "required": true,
          "type": "date",
          "convertType": "string"
      },
      "standard_time": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "actual_time": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "project_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "remark": {
          "required": false,
          "type": "string",
          "convertType": "string",
          "allowEmpty": true
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "创建的工时信息",
          "entity": {
              "___name": "IWokingTimeInfo",
              "task_name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "任务名称"
              },
              "task_status": {
                  "type": "int",
                  "allowNull": false,
                  "description": "任务状态"
              },
              "type": {
                  "type": "int",
                  "allowNull": false,
                  "description": "项目日程类型 this.app.enum.PROJECT.WORKING_TIME_TYPE"
              },
              "task_id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "任务id"
              },
              "id": {
                  "type": "int",
                  "allowNull": false,
                  "description": "工时id"
              },
              "standard_time": {
                  "type": "number",
                  "allowNull": false,
                  "description": "标准工时"
              },
              "actual_time": {
                  "type": "number",
                  "allowNull": false,
                  "description": "实际工时"
              },
              "status": {
                  "type": "int",
                  "allowNull": false,
                  "description": "状态 参考enum.project.working_time_status"
              },
              "begin_date": {
                  "type": "string",
                  "allowNull": true,
                  "description": "开始时间"
              },
              "end_date": {
                  "type": "string",
                  "allowNull": true,
                  "description": "实际时间"
              },
              "color_code": {
                  "type": "string",
                  "allowNull": true,
                  "description": "颜色"
              },
              "created_at": {
                  "type": "string",
                  "allowNull": true,
                  "description": "工时创建时间"
              },
              "finish_date": {
                  "type": "string",
                  "allowNull": true,
                  "description": "工时完成时间"
              },
              "user_name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "用户名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/project_task/:id",
  "method": "put",
  "actionCode": "modifyProjectTaskById",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      },
      "name": {
          "required": false,
          "type": "string"
      },
      "remark": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      },
      "started_at": {
          "required": false,
          "type": "date",
          "convertType": "string"
      },
      "ended_at": {
          "required": false,
          "type": "date",
          "convertType": "string"
      },
      "status": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "standard_time": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "actual_time": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "is_milestone": {
          "required": false,
          "type": "boolean"
      },
      "milestone_complete_type": {
          "required": false,
          "type": "int"
      },
      "guide": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      },
      "plan_time_limit": {
          "required": false,
          "type": "number",
          "convertType": "number"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "任务信息列表",
          "entity": {
              "___name": "IProjectTaskInfo",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "name": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "任务名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务名称"
              },
              "status": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "任务状态",
                  "fieldName": "status",
                  "_modelAttribute": true,
                  "field": "status",
                  "description": "任务状态"
              },
              "is_delay": {
                  "type": "BOOLEAN",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "是否逾期",
                  "fieldName": "is_delay",
                  "_modelAttribute": true,
                  "field": "is_delay",
                  "description": "是否逾期"
              },
              "delay_days": {
                  "type": "int",
                  "allowNull": false,
                  "description": "延期的天数"
              },
              "started_at": {
                  "type": "string",
                  "allowNull": true,
                  "description": "开始时间"
              },
              "ended_at": {
                  "type": "string",
                  "allowNull": true,
                  "description": "结束时间"
              },
              "project_milestone_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "milestone_order": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 1,
                  "comment": "里程碑排序，从1开始",
                  "fieldName": "order",
                  "_modelAttribute": true,
                  "field": "order",
                  "description": "里程碑排序，从1开始"
              },
              "task_is_deleted": {
                  "type": "BOOLEAN",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "",
                  "fieldName": "is_deleted",
                  "_modelAttribute": true,
                  "field": "is_deleted",
                  "description": ""
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "references": {
                      "model": "projects",
                      "key": "id"
                  },
                  "onDelete": "CASCADE",
                  "onUpdate": "CASCADE",
                  "description": "项目id"
              },
              "plan_time_limit": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "计划时限",
                  "fieldName": "plan_time_limit",
                  "_modelAttribute": true,
                  "field": "plan_time_limit",
                  "description": "计划时限"
              },
              "project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              },
              "parent_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "父项目id",
                  "fieldName": "parent_id",
                  "_modelAttribute": true,
                  "field": "parent_id",
                  "description": "父项目id"
              },
              "project_stage_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "阶段id",
                  "fieldName": "project_stage_id",
                  "_modelAttribute": true,
                  "field": "project_stage_id",
                  "description": "阶段id"
              },
              "stage_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "阶段名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "阶段名称"
              },
              "hospital_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "医院id",
                  "fieldName": "hospital_id",
                  "_modelAttribute": true,
                  "field": "hospital_id",
                  "references": {
                      "model": "hospitals",
                      "key": "id"
                  },
                  "onDelete": "NO ACTION",
                  "onUpdate": "CASCADE",
                  "description": "医院id"
              },
              "hospital_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": ""
              },
              "task_type_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "任务类型ID",
                  "fieldName": "task_type_id",
                  "_modelAttribute": true,
                  "field": "task_type_id",
                  "description": "任务类型ID"
              },
              "task_type_name": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "任务类型名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务类型名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/project_task/:id",
  "method": "get",
  "actionCode": "getProjectTaskInfoById",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskInfo",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "name": {
              "type": "TEXT",
              "allowNull": true,
              "comment": "任务名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务名称"
          },
          "status": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "任务状态",
              "fieldName": "status",
              "_modelAttribute": true,
              "field": "status",
              "description": "任务状态"
          },
          "is_delay": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "是否逾期",
              "fieldName": "is_delay",
              "_modelAttribute": true,
              "field": "is_delay",
              "description": "是否逾期"
          },
          "delay_days": {
              "type": "int",
              "allowNull": false,
              "description": "延期的天数"
          },
          "started_at": {
              "type": "string",
              "allowNull": true,
              "description": "开始时间"
          },
          "ended_at": {
              "type": "string",
              "allowNull": true,
              "description": "结束时间"
          },
          "project_milestone_id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "milestone_order": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 1,
              "comment": "里程碑排序，从1开始",
              "fieldName": "order",
              "_modelAttribute": true,
              "field": "order",
              "description": "里程碑排序，从1开始"
          },
          "task_is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目id",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "references": {
                  "model": "projects",
                  "key": "id"
              },
              "onDelete": "CASCADE",
              "onUpdate": "CASCADE",
              "description": "项目id"
          },
          "plan_time_limit": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "计划时限",
              "fieldName": "plan_time_limit",
              "_modelAttribute": true,
              "field": "plan_time_limit",
              "description": "计划时限"
          },
          "project_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "项目名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "项目名称"
          },
          "seq_no": {
              "type": "STRING",
              "allowNull": true,
              "comment": "项目编号",
              "fieldName": "seq_no",
              "_modelAttribute": true,
              "field": "seq_no",
              "description": "项目编号"
          },
          "parent_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "父项目id",
              "fieldName": "parent_id",
              "_modelAttribute": true,
              "field": "parent_id",
              "description": "父项目id"
          },
          "project_stage_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "阶段id",
              "fieldName": "project_stage_id",
              "_modelAttribute": true,
              "field": "project_stage_id",
              "description": "阶段id"
          },
          "stage_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "阶段名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "阶段名称"
          },
          "hospital_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "医院id",
              "fieldName": "hospital_id",
              "_modelAttribute": true,
              "field": "hospital_id",
              "references": {
                  "model": "hospitals",
                  "key": "id"
              },
              "onDelete": "NO ACTION",
              "onUpdate": "CASCADE",
              "description": "医院id"
          },
          "hospital_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": ""
          },
          "task_type_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "任务类型ID",
              "fieldName": "task_type_id",
              "_modelAttribute": true,
              "field": "task_type_id",
              "description": "任务类型ID"
          },
          "task_type_name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "任务类型名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务类型名称"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/:project_task_id/owners",
  "method": "post",
  "actionCode": "addProjectTaskOwner",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int"
      },
      "project_task_id": {
          "required": true,
          "type": "int"
      },
      "type": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskOwnerRelationship",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_task_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目任务id",
              "fieldName": "project_task_id",
              "_modelAttribute": true,
              "field": "project_task_id",
              "description": "项目任务id"
          },
          "owner_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "负责人id：角色id或人id",
              "fieldName": "owner_id",
              "_modelAttribute": true,
              "field": "owner_id",
              "description": "负责人id：角色id或人id"
          },
          "type": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 1,
              "comment": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE",
              "fieldName": "type",
              "_modelAttribute": true,
              "field": "type",
              "description": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/:project_task_id/owners/:id",
  "method": "delete",
  "actionCode": "removeProjectTaskOwner",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskOwnerRelationship",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_task_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目任务id",
              "fieldName": "project_task_id",
              "_modelAttribute": true,
              "field": "project_task_id",
              "description": "项目任务id"
          },
          "owner_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "负责人id：角色id或人id",
              "fieldName": "owner_id",
              "_modelAttribute": true,
              "field": "owner_id",
              "description": "负责人id：角色id或人id"
          },
          "type": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 1,
              "comment": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE",
              "fieldName": "type",
              "_modelAttribute": true,
              "field": "type",
              "description": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/order",
  "method": "put",
  "actionCode": "modifyProjectTaskOwner",
  "param": {
      "list": {
          "type": "array"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks",
  "method": "post",
  "actionCode": "addProjectTask",
  "param": {
      "name": {
          "type": "string"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTask",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "name": {
              "type": "TEXT",
              "allowNull": true,
              "comment": "任务名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务名称"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "description": "项目id"
          },
          "remark": {
              "type": "string",
              "allowNull": true,
              "description": "备注"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "父级任务id"
          },
          "started_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务开始时间"
          },
          "ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务截止时间"
          },
          "completed_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务完成时间"
          },
          "status": {
              "type": "int",
              "allowNull": false,
              "description": "任务状态"
          },
          "completed_by": {
              "type": "int",
              "allowNull": false,
              "description": "任务被谁完成"
          },
          "standard_time": {
              "type": "number",
              "allowNull": false,
              "description": "标准工时"
          },
          "actual_time": {
              "type": "number",
              "allowNull": false,
              "description": "实际工时"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "project_stage_id": {
              "type": "int",
              "allowNull": false,
              "description": "阶段id"
          },
          "type": {
              "type": "int",
              "allowNull": false,
              "description": "项目日程类型 this.app.enum.PROJECT.WORKING_TIME_TYPE"
          },
          "tag": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "order": {
              "type": "int",
              "allowNull": false,
              "description": "序号"
          },
          "actual_started_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际开始时间"
          },
          "actual_ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际结束时间"
          },
          "is_delay": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否逾期"
          },
          "guide": {
              "type": "string",
              "allowNull": true,
              "description": "指南"
          },
          "unique_no": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "created_by": {
              "type": "int",
              "allowNull": false,
              "description": "创建人"
          },
          "plan_time_limit": {
              "type": "int",
              "allowNull": false,
              "description": "计划时限"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/:id",
  "method": "delete",
  "actionCode": "deleteProjectTaskByProjectStage",
  "param": {},
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTask",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "name": {
              "type": "TEXT",
              "allowNull": true,
              "comment": "任务名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务名称"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "description": "项目id"
          },
          "remark": {
              "type": "string",
              "allowNull": true,
              "description": "备注"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "父级任务id"
          },
          "started_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务开始时间"
          },
          "ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务截止时间"
          },
          "completed_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务完成时间"
          },
          "status": {
              "type": "int",
              "allowNull": false,
              "description": "任务状态"
          },
          "completed_by": {
              "type": "int",
              "allowNull": false,
              "description": "任务被谁完成"
          },
          "standard_time": {
              "type": "number",
              "allowNull": false,
              "description": "标准工时"
          },
          "actual_time": {
              "type": "number",
              "allowNull": false,
              "description": "实际工时"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "project_stage_id": {
              "type": "int",
              "allowNull": false,
              "description": "阶段id"
          },
          "type": {
              "type": "int",
              "allowNull": false,
              "description": "项目日程类型 this.app.enum.PROJECT.WORKING_TIME_TYPE"
          },
          "tag": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "order": {
              "type": "int",
              "allowNull": false,
              "description": "序号"
          },
          "actual_started_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际开始时间"
          },
          "actual_ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际结束时间"
          },
          "is_delay": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否逾期"
          },
          "guide": {
              "type": "string",
              "allowNull": true,
              "description": "指南"
          },
          "unique_no": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "created_by": {
              "type": "int",
              "allowNull": false,
              "description": "创建人"
          },
          "plan_time_limit": {
              "type": "int",
              "allowNull": false,
              "description": "计划时限"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/:id",
  "method": "get",
  "actionCode": "getProjectTaskByProjectStage",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTask",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "name": {
              "type": "TEXT",
              "allowNull": true,
              "comment": "任务名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务名称"
          },
          "project_id": {
              "type": "int",
              "allowNull": false,
              "description": "项目id"
          },
          "remark": {
              "type": "string",
              "allowNull": true,
              "description": "备注"
          },
          "parent_id": {
              "type": "int",
              "allowNull": false,
              "description": "父级任务id"
          },
          "started_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务开始时间"
          },
          "ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务截止时间"
          },
          "completed_at": {
              "type": "date",
              "allowNull": true,
              "description": "任务完成时间"
          },
          "status": {
              "type": "int",
              "allowNull": false,
              "description": "任务状态"
          },
          "completed_by": {
              "type": "int",
              "allowNull": false,
              "description": "任务被谁完成"
          },
          "standard_time": {
              "type": "number",
              "allowNull": false,
              "description": "标准工时"
          },
          "actual_time": {
              "type": "number",
              "allowNull": false,
              "description": "实际工时"
          },
          "is_actived": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "is_deleted": {
              "type": "boolean",
              "allowNull": false,
              "description": ""
          },
          "deleted_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "created_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "updated_at": {
              "type": "date",
              "allowNull": false,
              "description": ""
          },
          "project_stage_id": {
              "type": "int",
              "allowNull": false,
              "description": "阶段id"
          },
          "type": {
              "type": "int",
              "allowNull": false,
              "description": "项目日程类型 this.app.enum.PROJECT.WORKING_TIME_TYPE"
          },
          "tag": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "order": {
              "type": "int",
              "allowNull": false,
              "description": "序号"
          },
          "actual_started_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际开始时间"
          },
          "actual_ended_at": {
              "type": "date",
              "allowNull": true,
              "description": "实际结束时间"
          },
          "is_delay": {
              "type": "boolean",
              "allowNull": false,
              "description": "是否逾期"
          },
          "guide": {
              "type": "string",
              "allowNull": true,
              "description": "指南"
          },
          "unique_no": {
              "type": "string",
              "allowNull": true,
              "description": "唯一标记"
          },
          "created_by": {
              "type": "int",
              "allowNull": false,
              "description": "创建人"
          },
          "plan_time_limit": {
              "type": "int",
              "allowNull": false,
              "description": "计划时限"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/:project_task_id/task_logs",
  "method": "get",
  "actionCode": "getProjectStageTaskLogs",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int"
      },
      "project_task_id": {
          "required": true,
          "type": "int"
      },
      "page_size": {
          "required": true,
          "type": "int"
      },
      "page_index": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskListAndCount",
          "count": {
              "type": "int",
              "allowNull": false,
              "description": "列表数量"
          },
          "list": {
              "type": "array",
              "description": "任务列表",
              "entity": {
                  "___name": "IProjectTask",
                  "id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "company_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "企业id",
                      "fieldName": "company_id",
                      "_modelAttribute": true,
                      "field": "company_id",
                      "description": "企业id"
                  },
                  "name": {
                      "type": "TEXT",
                      "allowNull": true,
                      "comment": "任务名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "任务名称"
                  },
                  "project_id": {
                      "type": "int",
                      "allowNull": false,
                      "description": "项目id"
                  },
                  "remark": {
                      "type": "string",
                      "allowNull": true,
                      "description": "备注"
                  },
                  "parent_id": {
                      "type": "int",
                      "allowNull": false,
                      "description": "父级任务id"
                  },
                  "started_at": {
                      "type": "date",
                      "allowNull": true,
                      "description": "任务开始时间"
                  },
                  "ended_at": {
                      "type": "date",
                      "allowNull": true,
                      "description": "任务截止时间"
                  },
                  "completed_at": {
                      "type": "date",
                      "allowNull": true,
                      "description": "任务完成时间"
                  },
                  "status": {
                      "type": "int",
                      "allowNull": false,
                      "description": "任务状态"
                  },
                  "completed_by": {
                      "type": "int",
                      "allowNull": false,
                      "description": "任务被谁完成"
                  },
                  "standard_time": {
                      "type": "number",
                      "allowNull": false,
                      "description": "标准工时"
                  },
                  "actual_time": {
                      "type": "number",
                      "allowNull": false,
                      "description": "实际工时"
                  },
                  "is_actived": {
                      "type": "boolean",
                      "allowNull": false,
                      "description": ""
                  },
                  "is_deleted": {
                      "type": "boolean",
                      "allowNull": false,
                      "description": ""
                  },
                  "deleted_at": {
                      "type": "date",
                      "allowNull": false,
                      "description": ""
                  },
                  "created_at": {
                      "type": "date",
                      "allowNull": false,
                      "description": ""
                  },
                  "updated_at": {
                      "type": "date",
                      "allowNull": false,
                      "description": ""
                  },
                  "project_stage_id": {
                      "type": "int",
                      "allowNull": false,
                      "description": "阶段id"
                  },
                  "type": {
                      "type": "int",
                      "allowNull": false,
                      "description": "项目日程类型 this.app.enum.PROJECT.WORKING_TIME_TYPE"
                  },
                  "tag": {
                      "type": "string",
                      "allowNull": true,
                      "description": "唯一标记"
                  },
                  "order": {
                      "type": "int",
                      "allowNull": false,
                      "description": "序号"
                  },
                  "actual_started_at": {
                      "type": "date",
                      "allowNull": true,
                      "description": "实际开始时间"
                  },
                  "actual_ended_at": {
                      "type": "date",
                      "allowNull": true,
                      "description": "实际结束时间"
                  },
                  "is_delay": {
                      "type": "boolean",
                      "allowNull": false,
                      "description": "是否逾期"
                  },
                  "guide": {
                      "type": "string",
                      "allowNull": true,
                      "description": "指南"
                  },
                  "unique_no": {
                      "type": "string",
                      "allowNull": true,
                      "description": "唯一标记"
                  },
                  "created_by": {
                      "type": "int",
                      "allowNull": false,
                      "description": "创建人"
                  },
                  "plan_time_limit": {
                      "type": "int",
                      "allowNull": false,
                      "description": "计划时限"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/:project_task_id/task_time",
  "method": "get",
  "actionCode": "getProjectTaskTime",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int"
      },
      "project_task_id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskTime",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "date": {
              "type": "string",
              "allowNull": true,
              "description": "日期"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/:project_task_id/delay",
  "method": "post",
  "actionCode": "addTaskDelay",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int"
      },
      "project_task_id": {
          "required": true,
          "type": "int"
      },
      "delay_reason": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "delay_solution": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "delay_plan": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "started_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "ended_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/projects/:project_id/task_statistic",
  "method": "get",
  "actionCode": "getTaskStatisticByProject",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "export_type": {
          "required": false,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "任务状态统计列表",
          "entity": {
              "___name": "IProjectTaskStatisticListItem",
              "name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "名称"
              },
              "count": {
                  "type": "int",
                  "allowNull": false,
                  "description": "数量"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_tasks/my",
  "method": "post",
  "actionCode": "addMyProjectTask",
  "param": {
      "project_id": {
          "required": true,
          "type": "int"
      },
      "export": {
          "required": false,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskOwnerRelationship",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_task_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目任务id",
              "fieldName": "project_task_id",
              "_modelAttribute": true,
              "field": "project_task_id",
              "description": "项目任务id"
          },
          "owner_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "负责人id：角色id或人id",
              "fieldName": "owner_id",
              "_modelAttribute": true,
              "field": "owner_id",
              "description": "负责人id：角色id或人id"
          },
          "type": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 1,
              "comment": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE",
              "fieldName": "type",
              "_modelAttribute": true,
              "field": "type",
              "description": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/status/batch",
  "method": "put",
  "actionCode": "batchModifyProjectTaskStatus",
  "param": {
      "ids": {
          "required": true,
          "type": "array",
          "min": 1
      },
      "status": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/remove/batch",
  "method": "post",
  "actionCode": "batchDeleteProjectTasks",
  "param": {
      "ids": {
          "required": true,
          "type": "array",
          "min": 1
      },
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/project_tasks/owner/batch",
  "method": "put",
  "actionCode": "batchSetProjectTasksOwner",
  "param": {
      "ids": {
          "required": true,
          "type": "array",
          "min": 1
      },
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "type": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/project_tasks/:project_task_id/progresses",
  "method": "get",
  "actionCode": "getProjectTaskProgresses",
  "param": {
      "project_task_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "page_index": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskProgressListAndCount",
          "list": {
              "type": "array",
              "description": "任务进展列表",
              "entity": {
                  "___name": "IProjectTaskProgress",
                  "id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "company_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "企业id",
                      "fieldName": "company_id",
                      "_modelAttribute": true,
                      "field": "company_id",
                      "description": "企业id"
                  },
                  "project_task_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "任务id",
                      "fieldName": "project_task_id",
                      "_modelAttribute": true,
                      "field": "project_task_id",
                      "description": "任务id"
                  },
                  "created_by": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "content": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "at_users": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "is_actived": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "is_deleted": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "deleted_at": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "created_at": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "updated_at": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "user_name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "名称"
                  },
                  "avatar": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "头像",
                      "fieldName": "avatar",
                      "_modelAttribute": true,
                      "field": "avatar",
                      "description": "头像"
                  }
              }
          },
          "count": {
              "type": "int",
              "allowNull": false,
              "description": "数量"
          }
      }
  }
}, {
  "url": "/api/v1/project_tasks/:project_task_id/progresses",
  "method": "post",
  "actionCode": "addTaskProgress",
  "param": {
      "project_task_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "content": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "at_users": {
          "required": false,
          "type": "array"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskProgress",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_task_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "任务id",
              "fieldName": "project_task_id",
              "_modelAttribute": true,
              "field": "project_task_id",
              "description": "任务id"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "content": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "at_users": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "is_actived": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "is_deleted": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "deleted_at": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "created_at": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "updated_at": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/project_tasks/:project_task_id/progresses/:id",
  "method": "delete",
  "actionCode": "removeTaskProgress",
  "param": {
      "project_task_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTaskProgress",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_task_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "任务id",
              "fieldName": "project_task_id",
              "_modelAttribute": true,
              "field": "project_task_id",
              "description": "任务id"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "content": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "at_users": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "is_actived": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "is_deleted": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "deleted_at": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "created_at": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "updated_at": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/owner_tasks",
  "method": "get",
  "actionCode": "getOwnerAndJoinTasksByProject",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "用户负责和参与的任务列表",
          "entity": {
              "___name": "IOwnerAndJoinTaskListItem",
              "project_task_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "project_task_name": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "任务名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务名称"
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "references": {
                      "model": "projects",
                      "key": "id"
                  },
                  "onDelete": "CASCADE",
                  "onUpdate": "CASCADE",
                  "description": "项目id"
              },
              "seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              },
              "child_project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "standard_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "标准工时",
                  "fieldName": "standard_time",
                  "_modelAttribute": true,
                  "field": "standard_time",
                  "description": "标准工时"
              },
              "actual_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "实际工时",
                  "fieldName": "actual_time",
                  "_modelAttribute": true,
                  "field": "actual_time",
                  "description": "实际工时"
              },
              "project_stage_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "阶段id",
                  "fieldName": "project_stage_id",
                  "_modelAttribute": true,
                  "field": "project_stage_id",
                  "description": "阶段id"
              },
              "project_stage_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "阶段名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "阶段名称"
              },
              "task_type_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "task_type_name": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "任务类型名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务类型名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/project_stages/:project_stage_id/owner_tasks",
  "method": "get",
  "actionCode": "getOwnerAndJoinTasksByProjectStage",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "project_stage_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "用户负责和参与的任务列表",
          "entity": {
              "___name": "IOwnerAndJoinTaskListItem",
              "project_task_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "project_task_name": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "任务名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务名称"
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "references": {
                      "model": "projects",
                      "key": "id"
                  },
                  "onDelete": "CASCADE",
                  "onUpdate": "CASCADE",
                  "description": "项目id"
              },
              "seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              },
              "child_project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "standard_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "标准工时",
                  "fieldName": "standard_time",
                  "_modelAttribute": true,
                  "field": "standard_time",
                  "description": "标准工时"
              },
              "actual_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "实际工时",
                  "fieldName": "actual_time",
                  "_modelAttribute": true,
                  "field": "actual_time",
                  "description": "实际工时"
              },
              "project_stage_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "阶段id",
                  "fieldName": "project_stage_id",
                  "_modelAttribute": true,
                  "field": "project_stage_id",
                  "description": "阶段id"
              },
              "project_stage_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "阶段名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "阶段名称"
              },
              "task_type_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "task_type_name": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "任务类型名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务类型名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_tasks/:project_task_id/joins",
  "method": "get",
  "actionCode": "getProjectTaskJoins",
  "param": {
      "project_task_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "任务参与人列表",
          "entity": {
              "___name": "IProjectTaskJoinItem",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 1,
                  "comment": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE",
                  "fieldName": "type",
                  "_modelAttribute": true,
                  "field": "type",
                  "description": "负责人类型：角色/人，app.enum.PROJECT.TASK.OWNER.TYPE"
              },
              "owner_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "负责人id：角色id或人id",
                  "fieldName": "owner_id",
                  "_modelAttribute": true,
                  "field": "owner_id",
                  "description": "负责人id：角色id或人id"
              },
              "owner_name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "参与人名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_tasks/:project_task_id/working_times",
  "method": "get",
  "actionCode": "getActualWorkingTimesByProjectTask",
  "param": {
      "project_task_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "page_index": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "任务实际工时列表",
          "entity": {
              "___name": "IWorkingTimeItemByProjectTask",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "actual_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "实际工时",
                  "fieldName": "actual_time",
                  "_modelAttribute": true,
                  "field": "actual_time",
                  "description": "实际工时"
              },
              "begin_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "开始时间",
                  "fieldName": "begin_date",
                  "_modelAttribute": true,
                  "field": "begin_date",
                  "description": "开始时间"
              },
              "user_id": {
                  "type": "INTEGER",
                  "allowNull": true,
                  "comment": "工时归属人id",
                  "fieldName": "user_id",
                  "_modelAttribute": true,
                  "field": "user_id",
                  "description": "工时归属人id"
              },
              "remark": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "工时备注",
                  "fieldName": "remark",
                  "_modelAttribute": true,
                  "field": "remark",
                  "description": "工时备注"
              },
              "status": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "状态 参考enum.project.working_time_status",
                  "fieldName": "status",
                  "_modelAttribute": true,
                  "field": "status",
                  "description": "状态 参考enum.project.working_time_status"
              },
              "finish_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "完成时间",
                  "fieldName": "finish_date",
                  "_modelAttribute": true,
                  "field": "finish_date",
                  "description": "完成时间"
              },
              "user_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "名称"
              },
              "avatar": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "头像",
                  "fieldName": "avatar",
                  "_modelAttribute": true,
                  "field": "avatar",
                  "description": "头像"
              },
              "color_code": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "默认项目颜色",
                  "fieldName": "color_code",
                  "_modelAttribute": true,
                  "field": "color_code",
                  "description": "默认项目颜色"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_tasks/my",
  "method": "get",
  "actionCode": "getMyOwnerAndJoinAllTasks",
  "param": {
      "name": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "project_task",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "参与的所有任务列表",
          "entity": {
              "___name": "IOwnerAndJoinTaskListItem",
              "project_task_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "project_task_name": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "任务名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务名称"
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "references": {
                      "model": "projects",
                      "key": "id"
                  },
                  "onDelete": "CASCADE",
                  "onUpdate": "CASCADE",
                  "description": "项目id"
              },
              "seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              },
              "child_project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "standard_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "标准工时",
                  "fieldName": "standard_time",
                  "_modelAttribute": true,
                  "field": "standard_time",
                  "description": "标准工时"
              },
              "actual_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "实际工时",
                  "fieldName": "actual_time",
                  "_modelAttribute": true,
                  "field": "actual_time",
                  "description": "实际工时"
              },
              "project_stage_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "阶段id",
                  "fieldName": "project_stage_id",
                  "_modelAttribute": true,
                  "field": "project_stage_id",
                  "description": "阶段id"
              },
              "project_stage_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "阶段名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "阶段名称"
              },
              "task_type_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "task_type_name": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "任务类型名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务类型名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_templates",
  "method": "get",
  "actionCode": "getProjectTemplates",
  "param": {
      "type": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_template",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "模板基础信息",
          "entity": {
              "___name": "IProjectTemplateSelectListItem",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "模版名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "模版名称"
              },
              "remark": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "备注",
                  "fieldName": "remark",
                  "_modelAttribute": true,
                  "field": "remark",
                  "description": "备注"
              },
              "type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 1,
                  "comment": "项目模板类型，app.enum.PROJECT.TEMPLATE.TYPE",
                  "fieldName": "type",
                  "_modelAttribute": true,
                  "field": "type",
                  "description": "项目模板类型，app.enum.PROJECT.TEMPLATE.TYPE"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_templates/:id",
  "method": "get",
  "actionCode": "getProjectTemplateDetail",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_template",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "object",
          "description": "模板详情",
          "entity": {
              "___name": "IProjectTemplateDetail",
              "project_template": {
                  "___name": "IProjectTemplateModel",
                  "id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "company_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "企业id",
                      "fieldName": "company_id",
                      "_modelAttribute": true,
                      "field": "company_id",
                      "description": "企业id"
                  },
                  "name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "模版名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "模版名称"
                  },
                  "content": {
                      "type": "JSON",
                      "allowNull": false,
                      "comment": "模版详情",
                      "fieldName": "content",
                      "_modelAttribute": true,
                      "field": "content",
                      "description": "模版详情"
                  },
                  "project_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": -1,
                      "comment": "基于的项目id",
                      "fieldName": "project_id",
                      "_modelAttribute": true,
                      "field": "project_id",
                      "description": "基于的项目id"
                  },
                  "type": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 1,
                      "comment": "项目模板类型，app.enum.PROJECT.TEMPLATE.TYPE",
                      "fieldName": "type",
                      "_modelAttribute": true,
                      "field": "type",
                      "description": "项目模板类型，app.enum.PROJECT.TEMPLATE.TYPE"
                  },
                  "user_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "创建者id，系统为-999",
                      "fieldName": "user_id",
                      "_modelAttribute": true,
                      "field": "user_id",
                      "description": "创建者id，系统为-999"
                  },
                  "remark": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "备注",
                      "fieldName": "remark",
                      "_modelAttribute": true,
                      "field": "remark",
                      "description": "备注"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_templates/:id",
  "method": "post",
  "actionCode": "saveTemplateConfig",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "config": {
          "required": true,
          "type": "object"
      }
  },
  "tag": "project_template",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "object",
          "description": "模板详情",
          "entity": {
              "___name": "IDingtalkProjectTemplateRelationshipModel",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": ""
              },
              "config": {
                  "type": "JSON",
                  "allowNull": false,
                  "comment": "预设配置",
                  "fieldName": "config",
                  "_modelAttribute": true,
                  "field": "config",
                  "description": "预设配置"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project_templates/:id",
  "method": "delete",
  "actionCode": "removeTemplate",
  "tag": "project_template",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/project/working_time/list",
  "method": "get",
  "actionCode": "getProjectWorkingTimeList",
  "param": {
      "hospital_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "project_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "project_name": {
          "required": false,
          "type": "string"
      },
      "project_stage_name": {
          "required": false,
          "type": "string"
      },
      "begin_date": {
          "required": false,
          "type": "string"
      },
      "end_date": {
          "required": false,
          "type": "string"
      },
      "type": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "task_status": {
          "required": false,
          "type": "int"
      },
      "actual_time_min": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "actual_time_max": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "page_index": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "工时信息列表",
          "entity": {
              "___name": "IProjectWorkingTime",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "企业id",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": "企业id"
              },
              "project_task_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "工时归属任务id，日程为-1",
                  "fieldName": "project_task_id",
                  "_modelAttribute": true,
                  "field": "project_task_id",
                  "description": "工时归属任务id，日程为-1"
              },
              "status": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "状态 参考enum.project.working_time_status",
                  "fieldName": "status",
                  "_modelAttribute": true,
                  "field": "status",
                  "description": "状态 参考enum.project.working_time_status"
              },
              "project_plan_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "任务计划工时",
                  "fieldName": "project_plan_time",
                  "_modelAttribute": true,
                  "field": "project_plan_time",
                  "description": "任务计划工时"
              },
              "standard_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "标准工时",
                  "fieldName": "standard_time",
                  "_modelAttribute": true,
                  "field": "standard_time",
                  "description": "标准工时"
              },
              "actual_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "实际工时",
                  "fieldName": "actual_time",
                  "_modelAttribute": true,
                  "field": "actual_time",
                  "description": "实际工时"
              },
              "begin_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "开始时间",
                  "fieldName": "begin_date",
                  "_modelAttribute": true,
                  "field": "begin_date",
                  "description": "开始时间"
              },
              "end_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "结束时间",
                  "fieldName": "end_date",
                  "_modelAttribute": true,
                  "field": "end_date",
                  "description": "结束时间"
              },
              "finish_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "完成时间",
                  "fieldName": "finish_date",
                  "_modelAttribute": true,
                  "field": "finish_date",
                  "description": "完成时间"
              },
              "place": {
                  "type": "INTEGER",
                  "allowNull": true,
                  "comment": "颜色表id",
                  "fieldName": "place",
                  "_modelAttribute": true,
                  "field": "place",
                  "description": "颜色表id"
              },
              "is_actived": {
                  "type": "BOOLEAN",
                  "allowNull": true,
                  "defaultValue": 1,
                  "comment": "",
                  "fieldName": "is_actived",
                  "_modelAttribute": true,
                  "field": "is_actived",
                  "description": ""
              },
              "is_deleted": {
                  "type": "BOOLEAN",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "",
                  "fieldName": "is_deleted",
                  "_modelAttribute": true,
                  "field": "is_deleted",
                  "description": ""
              },
              "deleted_at": {
                  "type": "DATE",
                  "allowNull": false,
                  "defaultValue": "1970-01-01 00:00:00",
                  "comment": "",
                  "fieldName": "deleted_at",
                  "_modelAttribute": true,
                  "field": "deleted_at",
                  "description": ""
              },
              "created_at": {
                  "type": "DATE",
                  "allowNull": false,
                  "defaultValue": {},
                  "comment": "",
                  "fieldName": "created_at",
                  "_modelAttribute": true,
                  "field": "created_at",
                  "description": ""
              },
              "updated_at": {
                  "type": "DATE",
                  "allowNull": false,
                  "defaultValue": {},
                  "comment": "",
                  "fieldName": "updated_at",
                  "_modelAttribute": true,
                  "field": "updated_at",
                  "description": ""
              },
              "user_id": {
                  "type": "INTEGER",
                  "allowNull": true,
                  "comment": "工时归属人id",
                  "fieldName": "user_id",
                  "_modelAttribute": true,
                  "field": "user_id",
                  "description": "工时归属人id"
              },
              "remark": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "工时备注",
                  "fieldName": "remark",
                  "_modelAttribute": true,
                  "field": "remark",
                  "description": "工时备注"
              },
              "order": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "排序",
                  "fieldName": "order",
                  "_modelAttribute": true,
                  "field": "order",
                  "description": "排序"
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/working_time/all_list",
  "method": "get",
  "actionCode": "getUserAllWorkingTimeListByDate",
  "param": {
      "begin_date": {
          "required": false,
          "type": "string"
      },
      "end_date": {
          "required": false,
          "type": "string"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "用户所有的工时列表信息",
          "entity": {
              "___name": "IUserAllWorkingTimeListItem",
              "seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              },
              "project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "parent_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "父项目id",
                  "fieldName": "parent_id",
                  "_modelAttribute": true,
                  "field": "parent_id",
                  "description": "父项目id"
              },
              "task_name": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "任务名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务名称"
              },
              "project_stage_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "阶段id",
                  "fieldName": "project_stage_id",
                  "_modelAttribute": true,
                  "field": "project_stage_id",
                  "description": "阶段id"
              },
              "stage_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "阶段名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "阶段名称"
              },
              "hospital_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": ""
              },
              "user_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "名称"
              },
              "task_status": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "任务状态",
                  "fieldName": "status",
                  "_modelAttribute": true,
                  "field": "status",
                  "description": "任务状态"
              },
              "is_delay": {
                  "type": "BOOLEAN",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "是否逾期",
                  "fieldName": "is_delay",
                  "_modelAttribute": true,
                  "field": "is_delay",
                  "description": "是否逾期"
              },
              "delay_days": {
                  "type": "int",
                  "allowNull": false,
                  "description": "延期天数"
              },
              "type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "项目日程类型",
                  "fieldName": "type",
                  "_modelAttribute": true,
                  "field": "type",
                  "description": "项目日程类型"
              },
              "guide": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "指南",
                  "fieldName": "guide",
                  "_modelAttribute": true,
                  "field": "guide",
                  "description": "指南"
              },
              "started_at": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "任务开始时间",
                  "fieldName": "started_at",
                  "_modelAttribute": true,
                  "field": "started_at",
                  "description": "任务开始时间"
              },
              "ended_at": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "任务截止时间",
                  "fieldName": "ended_at",
                  "_modelAttribute": true,
                  "field": "ended_at",
                  "description": "任务截止时间"
              },
              "remark": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "工时备注",
                  "fieldName": "remark",
                  "_modelAttribute": true,
                  "field": "remark",
                  "description": "工时备注"
              },
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "place": {
                  "type": "INTEGER",
                  "allowNull": true,
                  "comment": "颜色表id",
                  "fieldName": "place",
                  "_modelAttribute": true,
                  "field": "place",
                  "description": "颜色表id"
              },
              "standard_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "标准工时",
                  "fieldName": "standard_time",
                  "_modelAttribute": true,
                  "field": "standard_time",
                  "description": "标准工时"
              },
              "actual_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "实际工时",
                  "fieldName": "actual_time",
                  "_modelAttribute": true,
                  "field": "actual_time",
                  "description": "实际工时"
              },
              "status": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "状态 参考enum.project.working_time_status",
                  "fieldName": "status",
                  "_modelAttribute": true,
                  "field": "status",
                  "description": "状态 参考enum.project.working_time_status"
              },
              "created_at": {
                  "type": "DATE",
                  "allowNull": false,
                  "defaultValue": {},
                  "comment": "",
                  "fieldName": "created_at",
                  "_modelAttribute": true,
                  "field": "created_at",
                  "description": ""
              },
              "order": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "排序",
                  "fieldName": "order",
                  "_modelAttribute": true,
                  "field": "order",
                  "description": "排序"
              },
              "finish_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "完成时间",
                  "fieldName": "finish_date",
                  "_modelAttribute": true,
                  "field": "finish_date",
                  "description": "完成时间"
              },
              "task_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "task_standard_time": {
                  "type": "DECIMAL",
                  "allowNull": false,
                  "defaultValue": "0.00",
                  "comment": "标准工时",
                  "fieldName": "standard_time",
                  "_modelAttribute": true,
                  "field": "standard_time",
                  "description": "标准工时"
              },
              "task_is_deleted": {
                  "type": "BOOLEAN",
                  "allowNull": false,
                  "defaultValue": 0,
                  "comment": "",
                  "fieldName": "is_deleted",
                  "_modelAttribute": true,
                  "field": "is_deleted",
                  "description": ""
              },
              "begin_date": {
                  "type": "string",
                  "allowNull": true,
                  "description": "开始日期"
              },
              "end_date": {
                  "type": "string",
                  "allowNull": true,
                  "description": "结束日期"
              },
              "color_code": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "默认项目颜色",
                  "fieldName": "color_code",
                  "_modelAttribute": true,
                  "field": "color_code",
                  "description": "默认项目颜色"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/users/:user_id/working_time/all_list",
  "method": "get",
  "actionCode": "getUserProjectWorkingTimesByProjectUserDate",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "user_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "begin_date": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "end_date": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "working_time_approver_type": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IUserProjectWorkingTimeListDetail",
          "title": {
              "type": "string",
              "allowNull": true,
              "description": "名称"
          },
          "count": {
              "type": "int",
              "allowNull": false,
              "description": "数量"
          },
          "list": {
              "type": "array",
              "description": "用户项目工时列表",
              "entity": {
                  "___name": "IUserAllWorkingTimeListItem",
                  "seq_no": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "项目编号",
                      "fieldName": "seq_no",
                      "_modelAttribute": true,
                      "field": "seq_no",
                      "description": "项目编号"
                  },
                  "project_name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "项目名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "项目名称"
                  },
                  "project_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "parent_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": -1,
                      "comment": "父项目id",
                      "fieldName": "parent_id",
                      "_modelAttribute": true,
                      "field": "parent_id",
                      "description": "父项目id"
                  },
                  "task_name": {
                      "type": "TEXT",
                      "allowNull": true,
                      "comment": "任务名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "任务名称"
                  },
                  "project_stage_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "comment": "阶段id",
                      "fieldName": "project_stage_id",
                      "_modelAttribute": true,
                      "field": "project_stage_id",
                      "description": "阶段id"
                  },
                  "stage_name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "阶段名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "阶段名称"
                  },
                  "hospital_name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": ""
                  },
                  "user_name": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "名称",
                      "fieldName": "name",
                      "_modelAttribute": true,
                      "field": "name",
                      "description": "名称"
                  },
                  "task_status": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "任务状态",
                      "fieldName": "status",
                      "_modelAttribute": true,
                      "field": "status",
                      "description": "任务状态"
                  },
                  "is_delay": {
                      "type": "BOOLEAN",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "是否逾期",
                      "fieldName": "is_delay",
                      "_modelAttribute": true,
                      "field": "is_delay",
                      "description": "是否逾期"
                  },
                  "delay_days": {
                      "type": "int",
                      "allowNull": false,
                      "description": "延期天数"
                  },
                  "type": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "项目日程类型",
                      "fieldName": "type",
                      "_modelAttribute": true,
                      "field": "type",
                      "description": "项目日程类型"
                  },
                  "guide": {
                      "type": "TEXT",
                      "allowNull": true,
                      "comment": "指南",
                      "fieldName": "guide",
                      "_modelAttribute": true,
                      "field": "guide",
                      "description": "指南"
                  },
                  "started_at": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "任务开始时间",
                      "fieldName": "started_at",
                      "_modelAttribute": true,
                      "field": "started_at",
                      "description": "任务开始时间"
                  },
                  "ended_at": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "任务截止时间",
                      "fieldName": "ended_at",
                      "_modelAttribute": true,
                      "field": "ended_at",
                      "description": "任务截止时间"
                  },
                  "remark": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "工时备注",
                      "fieldName": "remark",
                      "_modelAttribute": true,
                      "field": "remark",
                      "description": "工时备注"
                  },
                  "id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "place": {
                      "type": "INTEGER",
                      "allowNull": true,
                      "comment": "颜色表id",
                      "fieldName": "place",
                      "_modelAttribute": true,
                      "field": "place",
                      "description": "颜色表id"
                  },
                  "standard_time": {
                      "type": "DECIMAL",
                      "allowNull": false,
                      "defaultValue": "0.00",
                      "comment": "标准工时",
                      "fieldName": "standard_time",
                      "_modelAttribute": true,
                      "field": "standard_time",
                      "description": "标准工时"
                  },
                  "actual_time": {
                      "type": "DECIMAL",
                      "allowNull": false,
                      "defaultValue": "0.00",
                      "comment": "实际工时",
                      "fieldName": "actual_time",
                      "_modelAttribute": true,
                      "field": "actual_time",
                      "description": "实际工时"
                  },
                  "status": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "状态 参考enum.project.working_time_status",
                      "fieldName": "status",
                      "_modelAttribute": true,
                      "field": "status",
                      "description": "状态 参考enum.project.working_time_status"
                  },
                  "created_at": {
                      "type": "DATE",
                      "allowNull": false,
                      "defaultValue": {},
                      "comment": "",
                      "fieldName": "created_at",
                      "_modelAttribute": true,
                      "field": "created_at",
                      "description": ""
                  },
                  "order": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "排序",
                      "fieldName": "order",
                      "_modelAttribute": true,
                      "field": "order",
                      "description": "排序"
                  },
                  "finish_date": {
                      "type": "DATE",
                      "allowNull": true,
                      "comment": "完成时间",
                      "fieldName": "finish_date",
                      "_modelAttribute": true,
                      "field": "finish_date",
                      "description": "完成时间"
                  },
                  "task_id": {
                      "type": "INTEGER",
                      "allowNull": false,
                      "primaryKey": true,
                      "autoIncrement": true,
                      "comment": "",
                      "fieldName": "id",
                      "_modelAttribute": true,
                      "field": "id",
                      "description": ""
                  },
                  "task_standard_time": {
                      "type": "DECIMAL",
                      "allowNull": false,
                      "defaultValue": "0.00",
                      "comment": "标准工时",
                      "fieldName": "standard_time",
                      "_modelAttribute": true,
                      "field": "standard_time",
                      "description": "标准工时"
                  },
                  "task_is_deleted": {
                      "type": "BOOLEAN",
                      "allowNull": false,
                      "defaultValue": 0,
                      "comment": "",
                      "fieldName": "is_deleted",
                      "_modelAttribute": true,
                      "field": "is_deleted",
                      "description": ""
                  },
                  "begin_date": {
                      "type": "string",
                      "allowNull": true,
                      "description": "开始日期"
                  },
                  "end_date": {
                      "type": "string",
                      "allowNull": true,
                      "description": "结束日期"
                  },
                  "color_code": {
                      "type": "STRING",
                      "allowNull": true,
                      "comment": "默认项目颜色",
                      "fieldName": "color_code",
                      "_modelAttribute": true,
                      "field": "color_code",
                      "description": "默认项目颜色"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/project/working_time/:id/modify",
  "method": "post",
  "actionCode": "modifyProjectWorkingTime",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      },
      "name": {
          "required": false,
          "type": "string"
      },
      "remark": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      },
      "started_at": {
          "required": false,
          "type": "string"
      },
      "ended_at": {
          "required": false,
          "type": "string"
      },
      "standard_time": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "actual_time": {
          "required": false,
          "type": "number",
          "convertType": "number"
      },
      "project_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectWorkingTime",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_task_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "工时归属任务id，日程为-1",
              "fieldName": "project_task_id",
              "_modelAttribute": true,
              "field": "project_task_id",
              "description": "工时归属任务id，日程为-1"
          },
          "status": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "状态 参考enum.project.working_time_status",
              "fieldName": "status",
              "_modelAttribute": true,
              "field": "status",
              "description": "状态 参考enum.project.working_time_status"
          },
          "project_plan_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "任务计划工时",
              "fieldName": "project_plan_time",
              "_modelAttribute": true,
              "field": "project_plan_time",
              "description": "任务计划工时"
          },
          "standard_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "标准工时",
              "fieldName": "standard_time",
              "_modelAttribute": true,
              "field": "standard_time",
              "description": "标准工时"
          },
          "actual_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "实际工时",
              "fieldName": "actual_time",
              "_modelAttribute": true,
              "field": "actual_time",
              "description": "实际工时"
          },
          "begin_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "开始时间",
              "fieldName": "begin_date",
              "_modelAttribute": true,
              "field": "begin_date",
              "description": "开始时间"
          },
          "end_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "结束时间",
              "fieldName": "end_date",
              "_modelAttribute": true,
              "field": "end_date",
              "description": "结束时间"
          },
          "finish_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "完成时间",
              "fieldName": "finish_date",
              "_modelAttribute": true,
              "field": "finish_date",
              "description": "完成时间"
          },
          "place": {
              "type": "INTEGER",
              "allowNull": true,
              "comment": "颜色表id",
              "fieldName": "place",
              "_modelAttribute": true,
              "field": "place",
              "description": "颜色表id"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          },
          "user_id": {
              "type": "INTEGER",
              "allowNull": true,
              "comment": "工时归属人id",
              "fieldName": "user_id",
              "_modelAttribute": true,
              "field": "user_id",
              "description": "工时归属人id"
          },
          "remark": {
              "type": "STRING",
              "allowNull": true,
              "comment": "工时备注",
              "fieldName": "remark",
              "_modelAttribute": true,
              "field": "remark",
              "description": "工时备注"
          },
          "order": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "排序",
              "fieldName": "order",
              "_modelAttribute": true,
              "field": "order",
              "description": "排序"
          }
      }
  }
}, {
  "url": "/api/v1/project/working_time/:id/remove",
  "method": "post",
  "actionCode": "deleteProjectWorkingTime",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectWorkingTime",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "project_task_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "工时归属任务id，日程为-1",
              "fieldName": "project_task_id",
              "_modelAttribute": true,
              "field": "project_task_id",
              "description": "工时归属任务id，日程为-1"
          },
          "status": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "状态 参考enum.project.working_time_status",
              "fieldName": "status",
              "_modelAttribute": true,
              "field": "status",
              "description": "状态 参考enum.project.working_time_status"
          },
          "project_plan_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "任务计划工时",
              "fieldName": "project_plan_time",
              "_modelAttribute": true,
              "field": "project_plan_time",
              "description": "任务计划工时"
          },
          "standard_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "标准工时",
              "fieldName": "standard_time",
              "_modelAttribute": true,
              "field": "standard_time",
              "description": "标准工时"
          },
          "actual_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "实际工时",
              "fieldName": "actual_time",
              "_modelAttribute": true,
              "field": "actual_time",
              "description": "实际工时"
          },
          "begin_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "开始时间",
              "fieldName": "begin_date",
              "_modelAttribute": true,
              "field": "begin_date",
              "description": "开始时间"
          },
          "end_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "结束时间",
              "fieldName": "end_date",
              "_modelAttribute": true,
              "field": "end_date",
              "description": "结束时间"
          },
          "finish_date": {
              "type": "DATE",
              "allowNull": true,
              "comment": "完成时间",
              "fieldName": "finish_date",
              "_modelAttribute": true,
              "field": "finish_date",
              "description": "完成时间"
          },
          "place": {
              "type": "INTEGER",
              "allowNull": true,
              "comment": "颜色表id",
              "fieldName": "place",
              "_modelAttribute": true,
              "field": "place",
              "description": "颜色表id"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          },
          "user_id": {
              "type": "INTEGER",
              "allowNull": true,
              "comment": "工时归属人id",
              "fieldName": "user_id",
              "_modelAttribute": true,
              "field": "user_id",
              "description": "工时归属人id"
          },
          "remark": {
              "type": "STRING",
              "allowNull": true,
              "comment": "工时备注",
              "fieldName": "remark",
              "_modelAttribute": true,
              "field": "remark",
              "description": "工时备注"
          },
          "order": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "排序",
              "fieldName": "order",
              "_modelAttribute": true,
              "field": "order",
              "description": "排序"
          }
      }
  }
}, {
  "url": "/api/v1/project/working_time/month_count",
  "method": "post",
  "actionCode": "getProjectWorkingTimeMonthCountStatistics",
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectWorkingTimeMonthCountStatistics",
          "actual_working_time": {
              "type": "number",
              "allowNull": false,
              "description": "本月实际总工时"
          },
          "actual_unproject_working_time": {
              "type": "number",
              "allowNull": false,
              "description": "本月非项目总工时"
          },
          "actual_project_working_time": {
              "type": "number",
              "allowNull": false,
              "description": "本月项目总工时"
          },
          "delay_count": {
              "type": "int",
              "allowNull": false,
              "description": "数量"
          }
      }
  }
}, {
  "url": "/api/v1/project/working_time/overview",
  "method": "post",
  "actionCode": "getProjectWorkingTimeOverview",
  "param": {
      "name": {
          "required": false,
          "type": "string"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectWorkingTimeOverview",
          "project_task_count": {
              "type": "int",
              "allowNull": false,
              "description": "（当日/本周）任务总数"
          },
          "project_finished_count": {
              "type": "int",
              "allowNull": false,
              "description": "（当日/本周）已完成任务数"
          },
          "actual_time_count": {
              "type": "int",
              "allowNull": false,
              "description": "（当日/本周）实际总工时"
          },
          "standard_time_count": {
              "type": "int",
              "allowNull": false,
              "description": "（当日/本周）标准总工时"
          },
          "task_actual_time_count": {
              "type": "int",
              "allowNull": false,
              "description": "（当日/本周）日程总工时"
          },
          "delay_count": {
              "type": "int",
              "allowNull": false,
              "description": "逾期总数"
          }
      }
  }
}, {
  "url": "/api/v1/project/working_time/:id",
  "method": "get",
  "actionCode": "getProjectWorkingTimeById",
  "param": {
      "id": {
          "required": true,
          "type": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectDetail",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "企业id",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": "企业id"
          },
          "status": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "状态 参考enum.project.working_time_status",
              "fieldName": "status",
              "_modelAttribute": true,
              "field": "status",
              "description": "状态 参考enum.project.working_time_status"
          },
          "standard_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "标准工时",
              "fieldName": "standard_time",
              "_modelAttribute": true,
              "field": "standard_time",
              "description": "标准工时"
          },
          "actual_time": {
              "type": "DECIMAL",
              "allowNull": false,
              "defaultValue": "0.00",
              "comment": "实际工时",
              "fieldName": "actual_time",
              "_modelAttribute": true,
              "field": "actual_time",
              "description": "实际工时"
          },
          "remark": {
              "type": "STRING",
              "allowNull": true,
              "comment": "工时备注",
              "fieldName": "remark",
              "_modelAttribute": true,
              "field": "remark",
              "description": "工时备注"
          },
          "user_id": {
              "type": "INTEGER",
              "allowNull": true,
              "comment": "工时归属人id",
              "fieldName": "user_id",
              "_modelAttribute": true,
              "field": "user_id",
              "description": "工时归属人id"
          },
          "begin_date": {
              "type": "string",
              "allowNull": true,
              "description": "开始日期"
          },
          "end_date": {
              "type": "string",
              "allowNull": true,
              "description": "结束日期"
          },
          "finish_date": {
              "type": "string",
              "allowNull": true,
              "description": "确定日期"
          },
          "task_name": {
              "type": "TEXT",
              "allowNull": true,
              "comment": "任务名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务名称"
          },
          "task_status": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "任务状态",
              "fieldName": "status",
              "_modelAttribute": true,
              "field": "status",
              "description": "任务状态"
          },
          "task_type": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "项目日程类型",
              "fieldName": "type",
              "_modelAttribute": true,
              "field": "type",
              "description": "项目日程类型"
          },
          "seq_no": {
              "type": "STRING",
              "allowNull": true,
              "comment": "项目编号",
              "fieldName": "seq_no",
              "_modelAttribute": true,
              "field": "seq_no",
              "description": "项目编号"
          },
          "project_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "项目名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "项目名称"
          },
          "stage_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "阶段名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "阶段名称"
          },
          "user_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "名称"
          },
          "hospital_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "医院id",
              "fieldName": "hospital_id",
              "_modelAttribute": true,
              "field": "hospital_id",
              "references": {
                  "model": "hospitals",
                  "key": "id"
              },
              "onDelete": "NO ACTION",
              "onUpdate": "CASCADE",
              "description": "医院id"
          },
          "hospital_name": {
              "type": "STRING",
              "allowNull": true,
              "comment": "",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/system_configs/time_freeze",
  "method": "get",
  "actionCode": "getTimeFreeze",
  "param": {},
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "ITimeFreeze",
          "config": {
              "allowNull": true,
              "type": "object",
              "entity": {
                  "time_freeze": {
                      "type": "boolean",
                      "allowNull": false,
                      "description": "是否开启工时冻结的开关"
                  }
              }
          }
      }
  }
}, {
  "url": "/api/v1/working_times/recycles",
  "method": "get",
  "actionCode": "getWorkingTimeRecycles",
  "param": {
      "page_index": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "page_size": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "回收站列表",
          "entity": {
              "___name": "IProjectWorkingTimeRecycleItem",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "begin_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "开始时间",
                  "fieldName": "begin_date",
                  "_modelAttribute": true,
                  "field": "begin_date",
                  "description": "开始时间"
              },
              "task_name": {
                  "type": "TEXT",
                  "allowNull": true,
                  "comment": "任务名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务名称"
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目id",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "references": {
                      "model": "projects",
                      "key": "id"
                  },
                  "onDelete": "CASCADE",
                  "onUpdate": "CASCADE",
                  "description": "项目id"
              },
              "project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "parent_seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              }
          }
      }
  }
}, {
  "url": "/api/v1/working_times/recycles",
  "method": "put",
  "actionCode": "recoverWorkingTimeRecycles",
  "param": {
      "ids": {
          "required": true,
          "type": "array",
          "min": 1
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "recoverWorkingTimeRecycle",
          "error_message": {
              "type": "string",
              "allowNull": true,
              "description": "报错信息"
          }
      }
  }
}, {
  "url": "/api/v1/working_times/dingtalk_approvals",
  "method": "get",
  "actionCode": "getProjectWorkingTimeDingtalkApprovals",
  "param": {},
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "工时审批列表",
          "entity": {
              "___name": "getWorkingTimeApprovalRevceiveItem",
              "start_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "",
                  "fieldName": "started_at",
                  "_modelAttribute": true,
                  "field": "started_at",
                  "description": ""
              },
              "end_date": {
                  "type": "DATE",
                  "allowNull": true,
                  "comment": "",
                  "fieldName": "ended_at",
                  "_modelAttribute": true,
                  "field": "ended_at",
                  "description": ""
              },
              "working_time_approver_type": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": 1,
                  "comment": "工时审批类型 app.enum.WORKING_TIME_APPROVAL_TYPE",
                  "fieldName": "type",
                  "_modelAttribute": true,
                  "field": "type",
                  "description": "工时审批类型 app.enum.WORKING_TIME_APPROVAL_TYPE"
              },
              "approver_status": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "审批状态 enum.DINGTALK.APPROVAL_SEND_STATUS",
                  "fieldName": "approval_status",
                  "_modelAttribute": true,
                  "field": "approval_status",
                  "description": "审批状态 enum.DINGTALK.APPROVAL_SEND_STATUS"
              },
              "working_time_approval_relationship_name": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "审批单名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "审批单名称"
              },
              "working_time_approval_relationship_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "工时审批关系表id",
                  "fieldName": "working_time_approval_relationship_id",
                  "_modelAttribute": true,
                  "field": "working_time_approval_relationship_id",
                  "description": "工时审批关系表id"
              },
              "projects": {
                  "type": "array",
                  "allowNull": true,
                  "entity": {
                      "project_id": {
                          "type": "INTEGER",
                          "allowNull": false,
                          "primaryKey": true,
                          "autoIncrement": true,
                          "comment": "",
                          "fieldName": "id",
                          "_modelAttribute": true,
                          "field": "id",
                          "description": ""
                      },
                      "seq_no": {
                          "type": "STRING",
                          "allowNull": true,
                          "comment": "项目编号",
                          "fieldName": "seq_no",
                          "_modelAttribute": true,
                          "field": "seq_no",
                          "description": "项目编号"
                      },
                      "approver_status": {
                          "type": "INTEGER",
                          "allowNull": false,
                          "defaultValue": -1,
                          "comment": "审批状态 enum.DINGTALK.APPROVAL_SEND_STATUS",
                          "fieldName": "approval_status",
                          "_modelAttribute": true,
                          "field": "approval_status",
                          "description": "审批状态 enum.DINGTALK.APPROVAL_SEND_STATUS"
                      },
                      "approval_list": {
                          "type": "array",
                          "allowNull": true,
                          "entity": {
                              "approver_name": {
                                  "type": "STRING",
                                  "allowNull": true,
                                  "comment": "名称",
                                  "fieldName": "name",
                                  "_modelAttribute": true,
                                  "field": "name",
                                  "description": "名称"
                              },
                              "approver_status": {
                                  "type": "INTEGER",
                                  "allowNull": false,
                                  "defaultValue": -1,
                                  "comment": "审批状态 app.enum.DINGTALK.APPROVAL_RECEIVE_STATUS",
                                  "fieldName": "receive_status",
                                  "_modelAttribute": true,
                                  "field": "receive_status",
                                  "description": "审批状态 app.enum.DINGTALK.APPROVAL_RECEIVE_STATUS"
                              },
                              "created_at": {
                                  "type": "DATE",
                                  "allowNull": false,
                                  "defaultValue": {},
                                  "comment": "",
                                  "fieldName": "created_at",
                                  "_modelAttribute": true,
                                  "field": "created_at",
                                  "description": ""
                              },
                              "remark": {
                                  "type": "string",
                                  "allowNull": true,
                                  "description": "审批备注"
                              }
                          },
                          "description": "审批情况列表"
                      }
                  },
                  "description": "项目状态列表"
              }
          }
      }
  }
}, {
  "url": "/api/v1/working_times/send_dingtalk_approval",
  "method": "post",
  "actionCode": "sendProjectWorkingDingtalkApproval",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "working_time_approval_relationship_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "started_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "ended_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/working_times/dingtalk_approval_status",
  "method": "get",
  "actionCode": "getProjectWorkingTimeDingtalkApprovalStatus",
  "param": {
      "started_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "ended_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "approver_status": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "审批状态 enum.DINGTALK.APPROVAL_SEND_STATUS",
              "fieldName": "approval_status",
              "_modelAttribute": true,
              "field": "approval_status",
              "description": "审批状态 enum.DINGTALK.APPROVAL_SEND_STATUS"
          },
          "scheduleTaskConfig": {
              "allowNull": true,
              "type": "object"
          }
      }
  }
}, {
  "url": "/api/v1/working_times/is_dingtalk_apprval_user",
  "method": "get",
  "actionCode": "getIsWorkingTimeDingtalkApprval",
  "param": {},
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "boolean",
          "allowNull": false,
          "description": "是否有工时审批"
      }
  }
}, {
  "url": "/api/v1/working_times/report_form_users",
  "method": "get",
  "actionCode": "getWorkingTimeReportFormByUsers",
  "param": {
      "started_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "ended_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "user_ids": {
          "required": true,
          "type": "string",
          "allowEmpty": true
      },
      "is_use_project_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "project_ids": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "工时报表数据",
          "entity": {
              "___name": "IUsersWorkingTimeReportForm",
              "user_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "名称"
              },
              "user_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "projects": {
                  "allowNull": true,
                  "type": "array",
                  "entity": {
                      "___name": "IProjectsWorkingTimeReportForm",
                      "project_id": {
                          "type": "INTEGER",
                          "allowNull": false,
                          "primaryKey": true,
                          "autoIncrement": true,
                          "comment": "",
                          "fieldName": "id",
                          "_modelAttribute": true,
                          "field": "id",
                          "description": ""
                      },
                      "project_main_id": {
                          "type": "INTEGER",
                          "allowNull": false,
                          "primaryKey": true,
                          "autoIncrement": true,
                          "comment": "",
                          "fieldName": "id",
                          "_modelAttribute": true,
                          "field": "id",
                          "description": ""
                      },
                      "seq_no": {
                          "type": "STRING",
                          "allowNull": true,
                          "comment": "项目编号",
                          "fieldName": "seq_no",
                          "_modelAttribute": true,
                          "field": "seq_no",
                          "description": "项目编号"
                      },
                      "project_name": {
                          "type": "STRING",
                          "allowNull": true,
                          "comment": "项目名称",
                          "fieldName": "name",
                          "_modelAttribute": true,
                          "field": "name",
                          "description": "项目名称"
                      },
                      "seq_no_project_name": {
                          "type": "string",
                          "allowNull": true,
                          "description": "报错信息"
                      },
                      "stages": {
                          "allowNull": true,
                          "type": "array",
                          "entity": {
                              "project_stage_id": {
                                  "type": "INTEGER",
                                  "allowNull": false,
                                  "primaryKey": true,
                                  "autoIncrement": true,
                                  "comment": "",
                                  "fieldName": "id",
                                  "_modelAttribute": true,
                                  "field": "id",
                                  "description": ""
                              },
                              "project_stage_name": {
                                  "type": "STRING",
                                  "allowNull": true,
                                  "comment": "阶段名称",
                                  "fieldName": "name",
                                  "_modelAttribute": true,
                                  "field": "name",
                                  "description": "阶段名称"
                              },
                              "plan_time_limit": {
                                  "type": "INTEGER",
                                  "allowNull": false,
                                  "defaultValue": 0,
                                  "comment": "计划时限",
                                  "fieldName": "plan_time_limit",
                                  "_modelAttribute": true,
                                  "field": "plan_time_limit",
                                  "description": "计划时限"
                              },
                              "actual_time_limit": {
                                  "type": "int",
                                  "allowNull": false,
                                  "description": "实际时限"
                              },
                              "time_limit_diff": {
                                  "type": "int",
                                  "allowNull": false,
                                  "description": "时限差"
                              },
                              "tasks": {
                                  "allowNull": true,
                                  "type": "array",
                                  "entity": {
                                      "task_id": {
                                          "type": "INTEGER",
                                          "allowNull": false,
                                          "primaryKey": true,
                                          "autoIncrement": true,
                                          "comment": "",
                                          "fieldName": "id",
                                          "_modelAttribute": true,
                                          "field": "id",
                                          "description": ""
                                      },
                                      "task_name": {
                                          "type": "TEXT",
                                          "allowNull": true,
                                          "comment": "任务名称",
                                          "fieldName": "name",
                                          "_modelAttribute": true,
                                          "field": "name",
                                          "description": "任务名称"
                                      },
                                      "execute_time": {
                                          "type": "int",
                                          "allowNull": false,
                                          "description": "次数"
                                      },
                                      "standard_time": {
                                          "type": "DECIMAL",
                                          "allowNull": false,
                                          "defaultValue": "0.00",
                                          "comment": "标准工时",
                                          "fieldName": "standard_time",
                                          "_modelAttribute": true,
                                          "field": "standard_time",
                                          "description": "标准工时"
                                      },
                                      "actual_time": {
                                          "type": "DECIMAL",
                                          "allowNull": false,
                                          "defaultValue": "0.00",
                                          "comment": "实际工时",
                                          "fieldName": "actual_time",
                                          "_modelAttribute": true,
                                          "field": "actual_time",
                                          "description": "实际工时"
                                      },
                                      "time_diff": {
                                          "type": "number",
                                          "allowNull": false,
                                          "description": "工时差"
                                      },
                                      "plan_time_limit": {
                                          "type": "INTEGER",
                                          "allowNull": false,
                                          "defaultValue": 0,
                                          "comment": "计划时限",
                                          "fieldName": "plan_time_limit",
                                          "_modelAttribute": true,
                                          "field": "plan_time_limit",
                                          "description": "计划时限"
                                      },
                                      "actual_time_limit": {
                                          "type": "int",
                                          "allowNull": false,
                                          "description": "实际时限"
                                      },
                                      "time_limit_diff": {
                                          "type": "int",
                                          "allowNull": false,
                                          "description": "时限差"
                                      },
                                      "task_owners": {
                                          "allowNull": true,
                                          "type": "array",
                                          "entity": {
                                              "user_id": {
                                                  "type": "INTEGER",
                                                  "allowNull": false,
                                                  "primaryKey": true,
                                                  "autoIncrement": true,
                                                  "comment": "",
                                                  "fieldName": "id",
                                                  "_modelAttribute": true,
                                                  "field": "id",
                                                  "description": ""
                                              },
                                              "user_name": {
                                                  "type": "STRING",
                                                  "allowNull": true,
                                                  "comment": "名称",
                                                  "fieldName": "name",
                                                  "_modelAttribute": true,
                                                  "field": "name",
                                                  "description": "名称"
                                              }
                                          },
                                          "description": "参与者信息列表"
                                      },
                                      "working_times": {
                                          "allowNull": true,
                                          "type": "array",
                                          "entity": {
                                              "user_id": {
                                                  "type": "INTEGER",
                                                  "allowNull": false,
                                                  "primaryKey": true,
                                                  "autoIncrement": true,
                                                  "comment": "",
                                                  "fieldName": "id",
                                                  "_modelAttribute": true,
                                                  "field": "id",
                                                  "description": ""
                                              },
                                              "user_name": {
                                                  "type": "STRING",
                                                  "allowNull": true,
                                                  "comment": "名称",
                                                  "fieldName": "name",
                                                  "_modelAttribute": true,
                                                  "field": "name",
                                                  "description": "名称"
                                              },
                                              "owner_type_name": {
                                                  "type": "string",
                                                  "allowNull": true,
                                                  "description": "执行人的类型"
                                              },
                                              "role_name": {
                                                  "type": "string",
                                                  "allowNull": true,
                                                  "description": "角色"
                                              },
                                              "remark": {
                                                  "type": "STRING",
                                                  "allowNull": true,
                                                  "comment": "工时备注",
                                                  "fieldName": "remark",
                                                  "_modelAttribute": true,
                                                  "field": "remark",
                                                  "description": "工时备注"
                                              },
                                              "week": {
                                                  "type": "int",
                                                  "allowNull": false,
                                                  "description": "周几"
                                              },
                                              "week_date": {
                                                  "type": "int",
                                                  "allowNull": false,
                                                  "description": "周的日期"
                                              },
                                              "actual_time": {
                                                  "type": "DECIMAL",
                                                  "allowNull": false,
                                                  "defaultValue": "0.00",
                                                  "comment": "实际工时",
                                                  "fieldName": "actual_time",
                                                  "_modelAttribute": true,
                                                  "field": "actual_time",
                                                  "description": "实际工时"
                                              },
                                              "finish_date": {
                                                  "type": "string",
                                                  "allowNull": true,
                                                  "description": "完成日期"
                                              }
                                          },
                                          "description": "工时信息列表"
                                      }
                                  },
                                  "description": "任务信息"
                              }
                          },
                          "description": "阶段信息列表"
                      }
                  },
                  "description": "项目信息列表"
              }
          }
      }
  }
}, {
  "url": "/api/v1/working_times/report_form_projects",
  "method": "get",
  "actionCode": "getWorkingTimeReportFormByProjects",
  "param": {
      "started_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "ended_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "project_ids": {
          "required": true,
          "type": "string",
          "allowEmpty": true
      },
      "is_contain_child_project": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "is_use_user_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "user_ids": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "工时项目报表数据",
          "entity": {
              "___name": "IProjectsWorkingTimeReportForm",
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "project_main_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "seq_no": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目编号",
                  "fieldName": "seq_no",
                  "_modelAttribute": true,
                  "field": "seq_no",
                  "description": "项目编号"
              },
              "project_name": {
                  "type": "STRING",
                  "allowNull": true,
                  "comment": "项目名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "项目名称"
              },
              "seq_no_project_name": {
                  "type": "string",
                  "allowNull": true,
                  "description": "报错信息"
              },
              "stages": {
                  "allowNull": true,
                  "type": "array",
                  "entity": {
                      "project_stage_id": {
                          "type": "INTEGER",
                          "allowNull": false,
                          "primaryKey": true,
                          "autoIncrement": true,
                          "comment": "",
                          "fieldName": "id",
                          "_modelAttribute": true,
                          "field": "id",
                          "description": ""
                      },
                      "project_stage_name": {
                          "type": "STRING",
                          "allowNull": true,
                          "comment": "阶段名称",
                          "fieldName": "name",
                          "_modelAttribute": true,
                          "field": "name",
                          "description": "阶段名称"
                      },
                      "plan_time_limit": {
                          "type": "INTEGER",
                          "allowNull": false,
                          "defaultValue": 0,
                          "comment": "计划时限",
                          "fieldName": "plan_time_limit",
                          "_modelAttribute": true,
                          "field": "plan_time_limit",
                          "description": "计划时限"
                      },
                      "actual_time_limit": {
                          "type": "int",
                          "allowNull": false,
                          "description": "实际时限"
                      },
                      "time_limit_diff": {
                          "type": "int",
                          "allowNull": false,
                          "description": "时限差"
                      },
                      "tasks": {
                          "allowNull": true,
                          "type": "array",
                          "entity": {
                              "task_id": {
                                  "type": "INTEGER",
                                  "allowNull": false,
                                  "primaryKey": true,
                                  "autoIncrement": true,
                                  "comment": "",
                                  "fieldName": "id",
                                  "_modelAttribute": true,
                                  "field": "id",
                                  "description": ""
                              },
                              "task_name": {
                                  "type": "TEXT",
                                  "allowNull": true,
                                  "comment": "任务名称",
                                  "fieldName": "name",
                                  "_modelAttribute": true,
                                  "field": "name",
                                  "description": "任务名称"
                              },
                              "execute_time": {
                                  "type": "int",
                                  "allowNull": false,
                                  "description": "次数"
                              },
                              "standard_time": {
                                  "type": "DECIMAL",
                                  "allowNull": false,
                                  "defaultValue": "0.00",
                                  "comment": "标准工时",
                                  "fieldName": "standard_time",
                                  "_modelAttribute": true,
                                  "field": "standard_time",
                                  "description": "标准工时"
                              },
                              "actual_time": {
                                  "type": "DECIMAL",
                                  "allowNull": false,
                                  "defaultValue": "0.00",
                                  "comment": "实际工时",
                                  "fieldName": "actual_time",
                                  "_modelAttribute": true,
                                  "field": "actual_time",
                                  "description": "实际工时"
                              },
                              "time_diff": {
                                  "type": "number",
                                  "allowNull": false,
                                  "description": "工时差"
                              },
                              "plan_time_limit": {
                                  "type": "INTEGER",
                                  "allowNull": false,
                                  "defaultValue": 0,
                                  "comment": "计划时限",
                                  "fieldName": "plan_time_limit",
                                  "_modelAttribute": true,
                                  "field": "plan_time_limit",
                                  "description": "计划时限"
                              },
                              "actual_time_limit": {
                                  "type": "int",
                                  "allowNull": false,
                                  "description": "实际时限"
                              },
                              "time_limit_diff": {
                                  "type": "int",
                                  "allowNull": false,
                                  "description": "时限差"
                              },
                              "task_owners": {
                                  "allowNull": true,
                                  "type": "array",
                                  "entity": {
                                      "user_id": {
                                          "type": "INTEGER",
                                          "allowNull": false,
                                          "primaryKey": true,
                                          "autoIncrement": true,
                                          "comment": "",
                                          "fieldName": "id",
                                          "_modelAttribute": true,
                                          "field": "id",
                                          "description": ""
                                      },
                                      "user_name": {
                                          "type": "STRING",
                                          "allowNull": true,
                                          "comment": "名称",
                                          "fieldName": "name",
                                          "_modelAttribute": true,
                                          "field": "name",
                                          "description": "名称"
                                      }
                                  },
                                  "description": "参与者信息列表"
                              },
                              "working_times": {
                                  "allowNull": true,
                                  "type": "array",
                                  "entity": {
                                      "user_id": {
                                          "type": "INTEGER",
                                          "allowNull": false,
                                          "primaryKey": true,
                                          "autoIncrement": true,
                                          "comment": "",
                                          "fieldName": "id",
                                          "_modelAttribute": true,
                                          "field": "id",
                                          "description": ""
                                      },
                                      "user_name": {
                                          "type": "STRING",
                                          "allowNull": true,
                                          "comment": "名称",
                                          "fieldName": "name",
                                          "_modelAttribute": true,
                                          "field": "name",
                                          "description": "名称"
                                      },
                                      "owner_type_name": {
                                          "type": "string",
                                          "allowNull": true,
                                          "description": "执行人的类型"
                                      },
                                      "role_name": {
                                          "type": "string",
                                          "allowNull": true,
                                          "description": "角色"
                                      },
                                      "remark": {
                                          "type": "STRING",
                                          "allowNull": true,
                                          "comment": "工时备注",
                                          "fieldName": "remark",
                                          "_modelAttribute": true,
                                          "field": "remark",
                                          "description": "工时备注"
                                      },
                                      "week": {
                                          "type": "int",
                                          "allowNull": false,
                                          "description": "周几"
                                      },
                                      "week_date": {
                                          "type": "int",
                                          "allowNull": false,
                                          "description": "周的日期"
                                      },
                                      "actual_time": {
                                          "type": "DECIMAL",
                                          "allowNull": false,
                                          "defaultValue": "0.00",
                                          "comment": "实际工时",
                                          "fieldName": "actual_time",
                                          "_modelAttribute": true,
                                          "field": "actual_time",
                                          "description": "实际工时"
                                      },
                                      "finish_date": {
                                          "type": "string",
                                          "allowNull": true,
                                          "description": "完成日期"
                                      }
                                  },
                                  "description": "工时信息列表"
                              }
                          },
                          "description": "任务信息"
                      }
                  },
                  "description": "阶段信息列表"
              }
          }
      }
  }
}, {
  "url": "/api/v1/working_times/report_form_analysis_users",
  "method": "get",
  "actionCode": "getReportFormAnalysisExcelByUsers",
  "param": {
      "started_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "ended_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "user_ids": {
          "required": true,
          "type": "string",
          "allowEmpty": true
      },
      "is_use_project_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "project_ids": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      },
      "export_type": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/working_times/report_form_analysis_projects",
  "method": "get",
  "actionCode": "getReportFormAnalysisExcelByProjects",
  "param": {
      "started_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "ended_at": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "project_ids": {
          "required": true,
          "type": "string",
          "allowEmpty": true
      },
      "is_contain_child_project": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "is_use_user_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "user_ids": {
          "required": false,
          "type": "string",
          "allowEmpty": true
      },
      "export_type": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "project_working_time",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": null
  }
}, {
  "url": "/api/v1/task_types/:id/gen-template",
  "method": "post",
  "actionCode": "generateTemplate",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "type": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "remark": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IProjectTemplateBaseId",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/projects/:id/task_types/with-template",
  "method": "post",
  "actionCode": "generateByTemplate",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "template_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/task_types/:id/applications",
  "method": "get",
  "actionCode": "getTaskTypeApplications",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "ITaskTypeApplications",
              "id": {
                  "required": true,
                  "type": "int"
              },
              "name": {
                  "required": true,
                  "type": "string",
                  "description": "应用名称"
              },
              "app_key": {
                  "required": true,
                  "type": "string",
                  "description": ""
              },
              "type": {
                  "required": true,
                  "type": "int",
                  "description": "类型"
              },
              "description": {
                  "required": true,
                  "type": "string",
                  "description": "描述"
              },
              "system_config": {
                  "required": true,
                  "type": "object",
                  "description": "配置信息"
              },
              "module_application_relationship_id": {
                  "required": true,
                  "type": "int",
                  "description": "关联ID"
              },
              "is_actived": {
                  "required": true,
                  "type": "int",
                  "description": "是否激活"
              },
              "config": {
                  "required": true,
                  "type": "object",
                  "description": "配置信息"
              },
              "order": {
                  "required": true,
                  "type": "int",
                  "description": "排序"
              }
          }
      }
  }
}, {
  "url": "/api/v1/task_types/:id/applications",
  "method": "put",
  "actionCode": "addApplication",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "applications": {
          "required": true,
          "type": "array"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/task_types",
  "method": "post",
  "actionCode": "addTaskType",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "setting": {
          "required": true,
          "type": "object"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "ITaskTypeModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目ID",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "description": "项目ID"
          },
          "name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "任务类型名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务类型名称"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "创建人",
              "fieldName": "created_by",
              "_modelAttribute": true,
              "field": "created_by",
              "description": "创建人"
          },
          "setting": {
              "type": "JSON",
              "allowNull": true,
              "comment": "配置",
              "fieldName": "setting",
              "_modelAttribute": true,
              "field": "setting",
              "description": "配置"
          },
          "unique_no": {
              "type": "STRING",
              "allowNull": false,
              "comment": "唯一编号",
              "fieldName": "unique_no",
              "_modelAttribute": true,
              "field": "unique_no",
              "description": "唯一编号"
          },
          "project_template_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "模版id",
              "fieldName": "project_template_id",
              "_modelAttribute": true,
              "field": "project_template_id",
              "description": "模版id"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/task_types",
  "method": "get",
  "actionCode": "getTaskTypes",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "entity": {
              "___name": "ITaskTypesItem",
              "id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "primaryKey": true,
                  "autoIncrement": true,
                  "comment": "",
                  "fieldName": "id",
                  "_modelAttribute": true,
                  "field": "id",
                  "description": ""
              },
              "company_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "",
                  "fieldName": "company_id",
                  "_modelAttribute": true,
                  "field": "company_id",
                  "description": ""
              },
              "project_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "项目ID",
                  "fieldName": "project_id",
                  "_modelAttribute": true,
                  "field": "project_id",
                  "description": "项目ID"
              },
              "name": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "任务类型名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "任务类型名称"
              },
              "created_by": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "comment": "创建人",
                  "fieldName": "created_by",
                  "_modelAttribute": true,
                  "field": "created_by",
                  "description": "创建人"
              },
              "setting": {
                  "type": "JSON",
                  "allowNull": true,
                  "comment": "配置",
                  "fieldName": "setting",
                  "_modelAttribute": true,
                  "field": "setting",
                  "description": "配置"
              },
              "unique_no": {
                  "type": "STRING",
                  "allowNull": false,
                  "comment": "唯一编号",
                  "fieldName": "unique_no",
                  "_modelAttribute": true,
                  "field": "unique_no",
                  "description": "唯一编号"
              },
              "project_template_id": {
                  "type": "INTEGER",
                  "allowNull": false,
                  "defaultValue": -1,
                  "comment": "模版id",
                  "fieldName": "project_template_id",
                  "_modelAttribute": true,
                  "field": "project_template_id",
                  "description": "模版id"
              },
              "is_admin": {
                  "required": true,
                  "type": "boolean",
                  "description": "是否管理员"
              }
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/task_types/:id",
  "method": "put",
  "actionCode": "modifyTaskType",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "required": true,
          "type": "string",
          "allowEmpty": false
      },
      "setting": {
          "required": true,
          "type": "object"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "ITaskTypeModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目ID",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "description": "项目ID"
          },
          "name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "任务类型名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务类型名称"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "创建人",
              "fieldName": "created_by",
              "_modelAttribute": true,
              "field": "created_by",
              "description": "创建人"
          },
          "setting": {
              "type": "JSON",
              "allowNull": true,
              "comment": "配置",
              "fieldName": "setting",
              "_modelAttribute": true,
              "field": "setting",
              "description": "配置"
          },
          "unique_no": {
              "type": "STRING",
              "allowNull": false,
              "comment": "唯一编号",
              "fieldName": "unique_no",
              "_modelAttribute": true,
              "field": "unique_no",
              "description": "唯一编号"
          },
          "project_template_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "模版id",
              "fieldName": "project_template_id",
              "_modelAttribute": true,
              "field": "project_template_id",
              "description": "模版id"
          }
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/task_types/:id",
  "method": "delete",
  "actionCode": "removeTaskType",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/projects/:project_id/task_types/:id",
  "method": "get",
  "actionCode": "getTaskType",
  "param": {
      "project_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "ITaskTypeModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "project_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "项目ID",
              "fieldName": "project_id",
              "_modelAttribute": true,
              "field": "project_id",
              "description": "项目ID"
          },
          "name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "任务类型名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "任务类型名称"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "创建人",
              "fieldName": "created_by",
              "_modelAttribute": true,
              "field": "created_by",
              "description": "创建人"
          },
          "setting": {
              "type": "JSON",
              "allowNull": true,
              "comment": "配置",
              "fieldName": "setting",
              "_modelAttribute": true,
              "field": "setting",
              "description": "配置"
          },
          "unique_no": {
              "type": "STRING",
              "allowNull": false,
              "comment": "唯一编号",
              "fieldName": "unique_no",
              "_modelAttribute": true,
              "field": "unique_no",
              "description": "唯一编号"
          },
          "project_template_id": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "模版id",
              "fieldName": "project_template_id",
              "_modelAttribute": true,
              "field": "project_template_id",
              "description": "模版id"
          }
      }
  }
}, {
  "url": "/api/v1/task_types/:task_type_id/forms",
  "method": "post",
  "actionCode": "addTaskTypeForm",
  "param": {
      "task_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "components": {
          "require": true,
          "type": "array",
          "min": 1,
          "itemType": "object",
          "rule": {
              "id": {
                  "required": true,
                  "type": "int",
                  "convertType": "int"
              },
              "setting": {
                  "required": true,
                  "type": "object"
              }
          }
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IFormModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "表单名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "表单名称"
          },
          "setting": {
              "type": "JSON",
              "allowNull": true,
              "comment": "表单配置",
              "fieldName": "setting",
              "_modelAttribute": true,
              "field": "setting",
              "description": "表单配置"
          },
          "unique_no": {
              "type": "STRING",
              "allowNull": false,
              "comment": "唯一编号",
              "fieldName": "unique_no",
              "_modelAttribute": true,
              "field": "unique_no",
              "description": "唯一编号"
          }
      }
  }
}, {
  "url": "/api/v1/task_types/:task_type_id/forms",
  "method": "get",
  "actionCode": "getTaskTypeForm",
  "param": {
      "task_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IFormModelConfig",
          "form_id": {
              "required": true,
              "type": "int",
              "description": "表单ID"
          },
          "name": {
              "required": true,
              "type": "int",
              "description": "表单名称"
          },
          "form_setting": {
              "required": true,
              "type": "object",
              "description": "表单配置信息"
          },
          "form_mount_setting": {
              "required": true,
              "type": "object",
              "description": "表单组件配置信息"
          },
          "components": {
              "required": true,
              "type": "array",
              "description": "表单组件"
          }
      }
  }
}, {
  "url": "/api/v1/task_types/:task_type_id/linkage",
  "method": "put",
  "actionCode": "taskTypeLinkage",
  "param": {
      "task_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "form_component_relationship_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      },
      "is_linkage": {
          "require": true,
          "type": "boolean"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IFormComponentRelationshipExtendModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "setting": {
              "type": "JSON",
              "allowNull": true,
              "comment": "表单配置",
              "fieldName": "setting",
              "_modelAttribute": true,
              "field": "setting",
              "description": "表单配置"
          }
      }
  }
}, {
  "url": "/api/v1/task_types/:task_type_id/linkage",
  "method": "get",
  "actionCode": "getTaskTypeLinkage",
  "param": {
      "task_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IFormComponentRelationshipExtendModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "setting": {
              "type": "JSON",
              "allowNull": true,
              "comment": "表单配置",
              "fieldName": "setting",
              "_modelAttribute": true,
              "field": "setting",
              "description": "表单配置"
          }
      }
  }
}, {
  "url": "/api/v1/task_types/:task_type_id/auths",
  "method": "post",
  "actionCode": "addTaskTypeAuths",
  "param": {
      "task_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "user_ids": {
          "required": true,
          "type": "array",
          "min": 1
      }
  },
  "tag": "task_type_auth_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/task_types/:task_type_id/auths",
  "method": "get",
  "actionCode": "getTaskTypeAuths",
  "param": {
      "task_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type_auth_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "ITaskTypeAuths",
          "project_manager": {
              "required": true,
              "type": "object",
              "description": "项目管理员"
          },
          "config_admins": {
              "required": true,
              "type": "array",
              "description": "配置管理员"
          },
          "task_type_owner": {
              "required": true,
              "type": "object",
              "description": "任务类型负责人"
          },
          "project_id": {
              "required": true,
              "type": "int",
              "description": "项目ID"
          }
      }
  }
}, {
  "url": "/api/v1/task_types/:task_type_id/auths/:id",
  "method": "delete",
  "actionCode": "removeTaskTypeAuths",
  "param": {
      "task_type_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "task_type_auth_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      }
  }
}, {
  "url": "/api/v1/working_time_approval_relationships",
  "method": "get",
  "actionCode": "getWorkingTimeApprovalRelationships",
  "param": {},
  "tag": "working_time_approval_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "type": "array",
          "description": "工时钉钉审批配置列表",
          "entity": {
              "___name": "IWorkingTimeApprovalRelationshipInfo",
              "dingtalk_approval_name": {
                  "type": "STRING",
                  "allowNull": false,
                  "defaultValue": "0",
                  "comment": "钉钉审批模板名称",
                  "fieldName": "name",
                  "_modelAttribute": true,
                  "field": "name",
                  "description": "钉钉审批模板名称"
              }
          }
      }
  }
}, {
  "url": "/api/v1/working_time_approval_relationships/:id",
  "method": "get",
  "actionCode": "getWorkingTimeApprovalRelationshipById",
  "param": {},
  "tag": "working_time_approval_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IWorkingTimeApprovalRelationshipInfo",
          "dingtalk_approval_name": {
              "type": "STRING",
              "allowNull": false,
              "defaultValue": "0",
              "comment": "钉钉审批模板名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "钉钉审批模板名称"
          }
      }
  }
}, {
  "url": "/api/v1/working_time_approval_relationships/:id",
  "method": "put",
  "actionCode": "updateWorkingTimeApprovalRelationship",
  "param": {
      "id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      },
      "name": {
          "required": false,
          "type": "string"
      },
      "config": {
          "required": false,
          "type": "object"
      },
      "dingtalk_approval_id": {
          "required": false,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "working_time_approval_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IWorkingTimeApprovalRelationshipModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "审批单名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "审批单名称"
          },
          "config": {
              "type": "JSON",
              "allowNull": true,
              "comment": "配置信息",
              "fieldName": "config",
              "_modelAttribute": true,
              "field": "config",
              "description": "配置信息"
          },
          "dingtalk_approval_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "钉钉审批模板id",
              "fieldName": "dingtalk_approval_id",
              "_modelAttribute": true,
              "field": "dingtalk_approval_id",
              "description": "钉钉审批模板id"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "创建人",
              "fieldName": "created_by",
              "_modelAttribute": true,
              "field": "created_by",
              "description": "创建人"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/working_time_approval_relationships",
  "method": "post",
  "actionCode": "addWorkingTimeApprovalRelationship",
  "param": {
      "name": {
          "required": true,
          "type": "string",
          "allowEmpty": true
      },
      "config": {
          "required": true,
          "type": "object"
      },
      "dingtalk_approval_id": {
          "required": true,
          "type": "int",
          "convertType": "int"
      }
  },
  "tag": "working_time_approval_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IWorkingTimeApprovalRelationshipModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "审批单名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "审批单名称"
          },
          "config": {
              "type": "JSON",
              "allowNull": true,
              "comment": "配置信息",
              "fieldName": "config",
              "_modelAttribute": true,
              "field": "config",
              "description": "配置信息"
          },
          "dingtalk_approval_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "钉钉审批模板id",
              "fieldName": "dingtalk_approval_id",
              "_modelAttribute": true,
              "field": "dingtalk_approval_id",
              "description": "钉钉审批模板id"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "创建人",
              "fieldName": "created_by",
              "_modelAttribute": true,
              "field": "created_by",
              "description": "创建人"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          }
      }
  }
}, {
  "url": "/api/v1/working_time_approval_relationships/:id",
  "method": "delete",
  "actionCode": "deleteWorkingTimeApprovalRelationship",
  "param": {},
  "tag": "working_time_approval_relationship",
  "body": {
      "code": {
          "type": "string",
          "allowNull": false
      },
      "message": {
          "type": "string",
          "allowNull": false
      },
      "current_stamp": {
          "type": "int",
          "allowNull": false
      },
      "data": {
          "___name": "IWorkingTimeApprovalRelationshipModel",
          "id": {
              "type": "INTEGER",
              "allowNull": false,
              "primaryKey": true,
              "autoIncrement": true,
              "comment": "",
              "fieldName": "id",
              "_modelAttribute": true,
              "field": "id",
              "description": ""
          },
          "company_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "",
              "fieldName": "company_id",
              "_modelAttribute": true,
              "field": "company_id",
              "description": ""
          },
          "name": {
              "type": "STRING",
              "allowNull": false,
              "comment": "审批单名称",
              "fieldName": "name",
              "_modelAttribute": true,
              "field": "name",
              "description": "审批单名称"
          },
          "config": {
              "type": "JSON",
              "allowNull": true,
              "comment": "配置信息",
              "fieldName": "config",
              "_modelAttribute": true,
              "field": "config",
              "description": "配置信息"
          },
          "dingtalk_approval_id": {
              "type": "INTEGER",
              "allowNull": false,
              "comment": "钉钉审批模板id",
              "fieldName": "dingtalk_approval_id",
              "_modelAttribute": true,
              "field": "dingtalk_approval_id",
              "description": "钉钉审批模板id"
          },
          "created_by": {
              "type": "INTEGER",
              "allowNull": false,
              "defaultValue": -1,
              "comment": "创建人",
              "fieldName": "created_by",
              "_modelAttribute": true,
              "field": "created_by",
              "description": "创建人"
          },
          "is_actived": {
              "type": "BOOLEAN",
              "allowNull": true,
              "defaultValue": 1,
              "comment": "",
              "fieldName": "is_actived",
              "_modelAttribute": true,
              "field": "is_actived",
              "description": ""
          },
          "is_deleted": {
              "type": "BOOLEAN",
              "allowNull": false,
              "defaultValue": 0,
              "comment": "",
              "fieldName": "is_deleted",
              "_modelAttribute": true,
              "field": "is_deleted",
              "description": ""
          },
          "deleted_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": "1970-01-01 00:00:00",
              "comment": "",
              "fieldName": "deleted_at",
              "_modelAttribute": true,
              "field": "deleted_at",
              "description": ""
          },
          "created_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "created_at",
              "_modelAttribute": true,
              "field": "created_at",
              "description": ""
          },
          "updated_at": {
              "type": "DATE",
              "allowNull": false,
              "defaultValue": {},
              "comment": "",
              "fieldName": "updated_at",
              "_modelAttribute": true,
              "field": "updated_at",
              "description": ""
          }
      }
  }
}];

module.exports = API_ROUTES;
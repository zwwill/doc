YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Alert",
        "Button",
        "Captcha",
        "Gotop",
        "H5MbInput",
        "H5Tab",
        "Loading",
        "Menu",
        "Pager",
        "PwdInput",
        "Quest",
        "SelectInput",
        "Slide",
        "SmsInput[待整理]",
        "Tab",
        "Toast",
        "_config.scss",
        "bCommon.scss",
        "bInput",
        "bMbInput"
    ],
    "modules": [
        "Module",
        "Sass",
        "Unit"
    ],
    "allModules": [
        {
            "displayName": "Module",
            "name": "Module",
            "description": "**单元组件 - 国际手机号输入框[bMbInput],继承自基础输入组件bInput**<br>\n国际手机号输入框封装组件<br>\n支持国际手机号输入框组件样式、校验国际手机号、报错提示、清空输入框等功能<br>\n**使用方法：**<br>\n```\n【引用关键字】\nrequire('urs-rui/src/module/bMbInput/bMbInput.js')\n```\n```\n【组件标签】\n<bMbInput />\n\n```",
            "classes": [
                {
                    "name": "H5MbInput"
                },
                {
                    "name": "H5Tab"
                },
                {
                    "name": "bMbInput"
                },
                {
                    "name": "PwdInput"
                },
                {
                    "name": "SmsInput[待整理]"
                }
            ]
        },
        {
            "displayName": "Sass",
            "name": "Sass",
            "description": "**SASS common文件**<br>\n包含reset样式和组件公用样式\n**使用方法：**<br>\n```\n【引用方法】\nrequire(\"@netease/urs-rui/src/scss/bCommon.scss\");\n```",
            "classes": [
                {
                    "name": "bCommon.scss"
                },
                {
                    "name": "_config.scss"
                }
            ]
        },
        {
            "displayName": "Unit",
            "name": "Unit",
            "description": "**单元组件 - hover menu菜单[bMenu]**<br>\n基础的bMenu封装组件<br>\n**使用方法：**<br>\n```\n【引用关键字】\nrequire('urs-rui/src/unit/bMenu/bMenu.js')\n```\n```\n【组件标签】\n<bMenu title=\"ddd_sh123@163.com\" open={isLogin} source={menuList} on-click={this.clickMenu($event)} on-select={this.onMenu($event)}></bMenu>\n\n```",
            "classes": [
                {
                    "name": "Alert"
                },
                {
                    "name": "Button"
                },
                {
                    "name": "Captcha"
                },
                {
                    "name": "Gotop"
                },
                {
                    "name": "bInput"
                },
                {
                    "name": "Loading"
                },
                {
                    "name": "Menu"
                },
                {
                    "name": "Pager"
                },
                {
                    "name": "Quest"
                },
                {
                    "name": "SelectInput"
                },
                {
                    "name": "Slide"
                },
                {
                    "name": "Tab"
                },
                {
                    "name": "Toast"
                }
            ]
        }
    ]
} };
});
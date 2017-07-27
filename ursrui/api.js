YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "MbInput",
        "captcha",
        "sms"
    ],
    "modules": [
        "Form",
        "ValidateRules"
    ],
    "allModules": [
        {
            "displayName": "Form",
            "name": "Form",
            "description": "Form表单；\n* 表单组件；",
            "classes": [
                {
                    "name": "MbInput"
                }
            ]
        },
        {
            "displayName": "ValidateRules",
            "name": "ValidateRules",
            "description": "ValidateRules 默认输入组件规则；\n* 数组形式；",
            "classes": [
                {
                    "name": "sms"
                },
                {
                    "name": "captcha"
                }
            ]
        }
    ]
} };
});
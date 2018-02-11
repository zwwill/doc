(function(){
	var code = window.name,
    html = getCode('html');
    code = getCode('script') || code;

	function getCode(type) {
	    var index = -1;
        if(type == 'script'){
            index = code.lastIndexOf('<'+ type + '>');
        }else{
            index = code.indexOf('<'+ type + '>');
        }

        if (index > -1) {
            return code.substring(index + type.length + 2, code.lastIndexOf('</'+ type + '>'));
        }
    }
    
    if(window.__st_render)
    {
    	window.__st_render(html,code);
    }
})();
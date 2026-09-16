var basePath = null;
var oXML  = new ActiveXObject("MSXML.DOMDocument");
oXML.async  = false;
if( oXML.load( local+"getMenuMapping.xml" ) ){
 oXML.setProperty("SelectionLanguage","XPath");
}

function initialize(menuNum,subMenuNum){
	if(menuNum!=undefined){
	 leftMenuView(menuNum,subMenuNum);
	}
}

function overImg(obj, img, menuNum){
	var imgUrl = local+"common/images/common/menu/"+img+"_over.gif";
	obj.src = imgUrl;
	topSubMenuView(menuNum);
	showDetails('topSubMenuDiv');
}

function outImg(obj, img){
	var imgUrl = local+"common/images/common/menu/"+img+".gif";
	obj.src = imgUrl;
	startTimer(obj);
	//document.getElementById("topSubMenuDiv").style.display = "none";
}

//<!--전반적인 png파일 표시--> 
function setPng24(obj) {
    obj.width=obj.height=1;
    obj.className=obj.className.replace(/\bpng24\b/i,'');
    obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+obj.src+"',sizingMethod='image');"
    obj.src='';
    return '';
}

//상단 메뉴의 서브메뉴 리스트 보이기
function topSubMenuView(num){
	var prodList= oXML.selectNodes("/Menu/Group");
	
	if(prodList[num]){
		var leftMargin = prodList[num].getAttribute("leftMargin");
		var menuHTML = "<table cellpadding='0' cellspacing='0' border='0' align='left'><tr>";
		var widSize = 0;
		var subList = prodList[num].selectNodes("Item");
		for(var i=0; i<subList.length;i++){
			widSize += eval(subList[i].getAttribute("menuWidth"));
			menuHTML += "<td width='"+subList[i].getAttribute("menuWidth")+"px'>";
			menuHTML += "<a href='"+local+subList[i].getAttribute("loadFile")+"'>"+subList[i].getAttribute("name")+"</a>";
			menuHTML += "</td>";
		}
		menuHTML += "</tr></table>";
		document.getElementById("topSubMenuTxtDiv").innerHTML = menuHTML;
		document.getElementById("topSubMenuDiv").style.display = "";
		document.getElementById("subMenuBg").style.width= widSize+"px";
		
		var menuWid = FindPosX(document.getElementById("topMenuTB"))+eval(leftMargin);
		document.getElementById("topSubMenuDiv").style.left= menuWid;
	}else{
		document.getElementById("topSubMenuDiv").style.display = "none";
	}
}

//왼쪽메뉴 뷰
function leftMenuView(num, subNum){
	var prodList= oXML.selectNodes("/Menu/Group");
	if(prodList[num]){
		var menuHTML = "<table cellpadding='0' cellspacing='0' border='0' class='leftMenuTxtTB2'>";
		var tdObjVal = " ";
		var className = " ";
		var subList = prodList[num].selectNodes("Item");
		for(var i=0; i<subList.length ;i++){
			tdObjVal = ' onmouseover="leftDepthOver(this)" onmouseout="leftDepthOut(this)"';
			className = " class='selectedDepth01'";
			if(i==subNum){
				tdObjVal = ' onmouseover="leftDepthOver(this)" onmouseout="leftDepthOut(this,\'depth\')"';
				className = " class='selectedDepth02'";
			}
			menuHTML += "<tr><td "+className+tdObjVal+" onclick='leftDepthClick(\""+local+subList[i].getAttribute("loadFile")+"\")'>";
			menuHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+subList[i].getAttribute("name");
			menuHTML += "</td></tr>";
		}
		menuHTML += "</table>";
		document.getElementById("depth01List").innerHTML = menuHTML;
	}
}

function leftDepthOver(obj){
	var classNameVal = "selectedDepth03";
	obj.className = classNameVal;
}

function leftDepthOut(obj, depth){
	var classNameVal = "selectedDepth01";
	if(depth){
		classNameVal = "selectedDepth02";
	}
	obj.className = classNameVal;
}

function leftDepthClick(locationUrl){
	document.location.href = locationUrl
}

function leftDepth(obj, depth){
	var classNameVal = "selectedDepth01";
	if(depth){
		classNameVal = "selectedDepth02";
	}
	obj.className = classNameVal;
}

/*
function leftMenuView(num, subNum){
	var prodList= oXML.selectNodes("/Menu/Group");
	if(prodList[num]){
		var menuHTML = "<ul class='localDepth01List'><li>";
		var className = " ";
		var subList = prodList[num].selectNodes("Item");
		for(var i=0; i<subList.length ;i++){
			menuHTML += "<ul>";
			className = " ";
			if(i==subNum){className = "class='selectedDepth02'";}
			menuHTML += "<a href='"+local+subList[i].getAttribute("loadFile")+"' "+className+">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+subList[i].getAttribute("name")+"</a>";
			menuHTML += "</ul>";
		}
		menuHTML += "</li></ul>";
		document.getElementById("depth01List").innerHTML = menuHTML;
	}
}*/

function FindPosX(obj) {
	var fObj = obj;
	var curleft = 0;
	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curleft += (obj.offsetLeft - obj.scrollLeft);
			obj = obj.offsetParent;
		}
	} else if (obj.x)
		curleft += obj.x;
	return curleft;
}

function FindPosY(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curtop += (obj.offsetTop - obj.scrollTop);
			obj = obj.offsetParent;
		}
	} else if (obj.y)
		curtop += obj.y;

	return curtop;
}


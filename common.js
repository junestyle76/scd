/**
 * 이미지 컨트롤
 **/
function imgPosition(img,imgSrc){
	var imgs = new Image(); 
	imgs.src = imgSrc.src;
	var wid = 0;
	var hei = 0;
	document.getElementById(img).src 	= imgSrc.src;	
}

/**
 * 기본정보, 상세보기 컨트롤
 **/
function viewProdDisplay(viewNum){
	if(viewNum==1){
		document.getElementById("basisDiv").style.display = "";
		document.getElementById("basisImg").src = local+"common/images/common/table/view_gubun01.gif";
		document.getElementById("infoDiv").style.display = "none";
		document.getElementById("infoImg").src = local+"common/images/common/table/view_gubun02_out.gif";
	}
	else{
		document.getElementById("basisDiv").style.display = "none";
		document.getElementById("basisImg").src = local+"common/images/common/table/view_gubun01_out.gif";
		document.getElementById("infoDiv").style.display = "";
		document.getElementById("infoImg").src = local+"common/images/common/table/view_gubun02.gif";
	}
	
}

var backAddA = null;

/*플래쉬에서 전달받기*/
function flashLoad(returnVal){
	if(backAddA){
		backAddA.className = "";
	}
	var addA = document.getElementById("addA_"+returnVal);
	if(addA){
		addA.className = "sele01";
		backAddA = addA;
	}
//	
//	var flashHTML = "";
//	flashHTML += '<object id="flashOJB" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="300" height="390">';
//	flashHTML += '  <param name=movie value="../common/images/flash/trade.swf">';
//	flashHTML += ' <param name=quality value=high>';
//	flashHTML += ' <param name="FlashVars" value="main='+returnVal+'">';
//	flashHTML += ' <embed src="../common/images/flash/trade.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="300" height="390">';
//	flashHTML += ' </embed> ';
//	flashHTML += '</object>';
//	document.getElementById("flashDiv").innerHTML = flashHTML;
}
function flashLoadOut(returnVal){
//	var addA1 = document.getElementById("addA_"+returnVal);
//	if(addA1){
//		addA1.className = "";
//	}
}
/*플래쉬로 값 보내기*/
function flashSendGo(returnVal){
	//alert(returnVal);
	//FlexSo.addParam("allowScriptAccess", "always");
	//document.getElementById("flashDiv").innerHTML = returnVal;
	//var flashOJB = document.getElementById("flashOJB");
	//flashOJB.addParam("FlashVars", "main=7"); 
	var flashHTML = "";
	flashHTML += '<object id="flashOJB" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="300" height="390">';
	flashHTML += '  <param name=movie value="../common/images/flash/trade.swf">';
	flashHTML += ' <param name=quality value=high>';
	flashHTML += ' <param name="FlashVars" value="main='+returnVal+'">';
	flashHTML += ' <embed src="../common/images/flash/trade.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="300" height="390">';
	flashHTML += ' </embed> ';
	flashHTML += '</object>';
	document.getElementById("flashDiv").innerHTML = flashHTML;
	
	//document.getElementById("flashOJB").SetVariable("main", "7");
}

function smsOpen(vUrl){
	var vWinName = "sms";
	var vOption = "scrollbars=yes,width=430,height=542";
	widOpen(vUrl,vWinName,vOption);
}

function emailOpen(vUrl){
	var vWinName = "email보내기";
	var vOption = "scrollbars=yes,width=700,height=685";
	widOpen(vUrl,vWinName,vOption); 
}

/* 윈도우 오픈 */
function widOpen(theURL,winName,features){
	window.open(theURL,winName,features); 
}

/* 윈도우 닫기 */
function closePopupWin(){
	window.close();
}

/* 약국찾기 검색조건 변경시 호출 */
function searchCondition_Change(obj){
	if(obj.value=="1"){
		document.getElementById("searchTb1").style.display = "";
		document.getElementById("searchTb2").style.display = "none";
		document.getElementById("searchCondition1").value = obj.value;
	}else{
		document.getElementById("searchTb1").style.display = "none";
		document.getElementById("searchTb2").style.display = "";
		document.getElementById("searchCondition2").value = obj.value;
	}
}
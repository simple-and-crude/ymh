document.write('<div id="readyui" style="width: 100%;height: 100%;top: 0;left: 0;position: fixed;background: #fff;z-index: 9999999;"><marquee style="width: 50%;font-size: xxx-large;position: absolute;top: 50%;transform: translateY(-50%);left: 25%;border-left-style: solid;border-right-style: solid;" Scrollamount=50>加载中. . .</marquee></div>');
if ((navigator.userAgent.match(/(phone|iPhone|ios|Android|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	pc = 0;
	document.write('<link rel="stylesheet" href="style/pe.css" />');
} else {
	pc = 1;
	document.write('<link rel="stylesheet" href="style/pc.css" />');
}
function sel() {
	copy.value = sresult.innerHTML;
	copy.select();
	document.execCommand("copy");
	sfcg.innerHTML = "成功！"
	setTimeout(function () {
		sfcg.innerHTML = "&nbsp;"
	}, 1000)
}
function clearui() {
	var sethei1 = window.innerHeight - (onecm.clientWidth * 2.4) - left.clientHeight;
	var sethei3 = window.innerWidth - (onecm.clientWidth * 14.2);
	if (yshei < sethei1) {
		what.style.height = sethei1
		sethei2 = window.innerHeight - (onecm.clientWidth * 1.8);
	} else {
		sethei2 = (onecm.clientWidth * 1.4) + sclogo.clientHeight + cmenu.clientHeight + yshei;
		what.style.height = yshei
		bwhat.style.height = "" + (onecm.clientWidth * 5) + "px"
	}
	bwhat.style.top = window.innerHeight - sethei1 - (onecm.clientWidth * 1.8) + "px";
	var sethei4 = sethei2 - 180;
	sresult.style.height = sethei4 + "px";
	if (sethei3 <= (onecm.clientWidth * 8) || pc == 0) {
		var pk = window.innerWidth - (onecm.clientWidth * 2);
		left.style.width = pk + "px";
		var sethei1 = window.innerHeight - (onecm.clientWidth * 2.4) - left.clientHeight;
		textresult.style.top = window.innerHeight - sethei1 - (onecm.clientWidth * 1) + "px";
		textresult.style.left = "0.8cm";
		textresult.style.width = pk - (onecm.clientWidth * 2) + "px"
		textresult.style.height = ""
		what.style.height = ""
		bwhat.style.width = pk + "px";
		bwhat.style.height = what.clientHeight + (onecm.clientWidth * 1.6) + "px"
		sresult.style.height = ""
		bwhat.style.top = window.innerHeight - sethei1 - (onecm.clientWidth * 1) + textresult.clientHeight + "px";
		blogo.style.display = "block"
		blogo.style.top = window.innerHeight - sethei1 - (onecm.clientWidth * 1) + textresult.clientHeight + bwhat.clientHeight + "px"
	} else {
		textresult.style.width = sethei3 + "px";
		textresult.style.top = "0.8cm"
		left.style.width = "10cm"
		bwhat.style.width = "10cm"
		textresult.style.left = "11.6cm";
		textresult.style.height = sethei2 + "px";
		blogo.style.display = "none"
	}
}
word = ["蛋", "蛋", "叉", "叉", "叉", "逼", "狗", "狗", "妈", "臭", "臭", "臭", "操", "他妈", "崽子", "奶子", "逼的", "妈的", "蛋子"]
wordm = 6
xn = 0
function iif() {
	var i = 0
	var xw = word[xn]
	var hw = word[un]
	if (xw == hw) { i = 1 }
	if (xw == "妈" && hw == "妈的") { i = 1 }
	if (xw == "蛋" && hw == "蛋子") { i = 1 }
	if (xw == "逼" && hw == "逼的") { i = 1 }
	if (xw == "他妈" && hw == "妈的") { i = 1 }
	if (xw == "他妈" && hw == "妈") { i = 1 }
	if (xw[1] == "子" && hw[1] == "子") { i = 1 }
	return i;
}
function start() {
	var num = snu.value;
	if (num == "随机") {
		num = Math.floor(Math.random() * 120) + 120
	}
	var num = parseInt(num);
	if (num > 0) {
		sresult.innerHTML = "";
	} else {
		sresult.innerHTML = "……";
	}
	while (num > 0) {
		if (num > 1) {
			un = Math.floor(Math.random() * word.length)
			k = iif()
			while (k) {
				un = Math.floor(Math.random() * word.length)
				k = iif()
			}
			xn = un;
			if (word.length - xn > wordm) {
				num--
			} else {
				num = num - 2
			}
		} else {
			un = Math.floor(Math.random() * (word.length - wordm))
			k = iif()
			while (k) {
				un = Math.floor(Math.random() * (word.length - wordm))
				k = iif()
			}
			xn = un;
			num--
		}
		sresult.innerHTML = sresult.innerHTML + word[xn];
	}
	clearui()
}
window.onload = function () {
	if (!pc) {
		logo.style.height = "2.2cm";
	}
	yshei = what.clientHeight
	clearui()
	readyui.style.display = "none";
};
window.onresize = function () {
	clearui();
};
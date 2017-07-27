;(function(root,factory,plug){
	factory.call(root,root.jQuery,plug);
})(window,function($,plug){

	//默认设置
	var __DEFAULT__ = {
		wheelBody: '.big-border', //转盘主体
		wheelSmall: '.small-border', //转盘内部

		starsNum: 16, //转盘边缘小黄点个数
		starsPostion: [[50, 0.5], [70, 6], [84.5, 18], [92.5, 32], [94.5, 50], [91, 68], [80.5, 80.5], [68, 91], [49, 94.5], [32, 92.5], [15, 82], [6, 70], [0, 50], [3.5, 32], [12, 15], [27, 5.5]], //小圆点坐标
		starsClass: ["stars1", "stars2"],

		shan: '.shan', //扇形部分
		prizeSetting: [
			{prizeName: "first", prizeIndex: 1},
			{prizeName: "second", prizeIndex: 2},
			{prizeName: "third", prizeIndex: 3},
			{prizeName: "fourth", prizeIndex: 4}
		],

		startBtn: '.middle', //开始按钮
		direction: 1, //0顺时针  1逆时针
		actionRan: 20 //默认转动圈数（需要转动的值 = 默认转动圈数*360 + 后台计算传过来的度数）
	}


	// 函数
	var __PROTOTYPE__ = {
		_init: function(){
			var that = this;
			adjustHeight(that);
			showStars(that);
		},

		_bindEvent: function(){
			var that = this;
			that.find(that.startBtn).on("click", function(){
				that.trigger("wheelStart", function(data){
					var index = 0;
					$.each(that.prizeSetting, function(key, val){
						if(val.prizeName == data){
							index = val.prizeIndex;
						}
					})
					var ra = that.actionRan*360 + index/that.find(that.shan).length*360 - 1/that.find(that.shan).length*360/2;

					if (that.direction==0) {
						that.find(that.wheelBody).css('webkitTransform','rotate('+ -ra +'deg)');
						that.find(that.startBtn).css('webkitTransform','rotate('+ ra +'deg)');
					} else{
						that.find(that.wheelBody).css('webkitTransform','rotate('+ ra +'deg)');
						that.find(that.startBtn).css('webkitTransform','rotate('+ -ra +'deg)');
					};

				});
			})
		},


	}


	// 私有函数
	function adjustHeight(that){
		// that.find(that.wheelBody).css('height', that.find(that.wheelBody).css('width'));
		that.find(that.wheelSmall).css('height', that.find(that.wheelSmall).css('width'));
	}

	function showStars(that){
		for(var i=0; i < that.starsNum; i++) {
			var oStar = $('<div></div>');
			oStar.addClass(that.starsClass[ i % that.starsClass.length]);
			oStar.css("left", that.starsPostion[i][0] + '%');
			oStar.css("top", that.starsPostion[i][1] + '%');
			that.find(that.wheelBody).append(oStar);
		}
	}



	// 定义插件
	$.fn[plug] = function(options){
		$.extend(this,__PROTOTYPE__,__DEFAULT__,options); //扩展功能
		this._init(); //初始化
		this._bindEvent(); //绑定事件
		return this;
	}
}, "jqueryWheel");
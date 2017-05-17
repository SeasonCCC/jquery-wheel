#jquery-wheel

## 简介

Jquery-wheel插件用于创建转盘



## 基本配置

- Html

需要给出基本的html结构（以下元素均可自定义命名）：

外层：<div id="wheel"></div>

转盘主体：<div class="big-border"></div>
转盘扇形结构：<div class="small-border g9">(扇形)</div>

中心点击按钮：<img class="middle" />

```html
<script type="text/javascript" src="./assets/js/jquery.min.js"></script>
<script type="text/javascript" src="./assets/js/jquery-wheel.js"></script>

	<div id="wheel">
		<div class="big-border">
			<div class="small-border g9">
				<div class="shan">
					<span>1元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%">
				</div>

				<div class="shan">
					<span>2元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%">
				</div>

				<div class="shan">
					<span>3元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%"></div>

				<div class="shan">
					<span>4元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%"></div>
				
				<div class="shan">
					<span>5元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%">
				</div>

				<div class="shan">
					<span>6元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%">				</div>

				<div class="shan">
					<span>7元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%">
				</div>

				<div class="shan">
					<span>8元现金</span>
					<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/monery.png" width="50%">
				</div>

				<div class="shan">
					<span>谢谢参与</span>
				</div>
				<img src="http://we.citygf.com/new/addons/citygf/template/mobile/resource/cjpage/dzp/images/middle.png" width="50%" class="middle">
			</div>
		</div>
	</div>
```







- Javascript

  注意：转盘生成前，必须确保转盘外层display不为none

  ```javascript
  $("#wheel").jqueryWheel({
      wheelBody: '.big-border', //转盘主体
      wheelSmall: '.small-border', //转盘内部

      starsNum: 16, //转盘边缘小黄点个数
      starsPostion: [[50, 0.5], [70, 6], [84.5, 18], [92.5, 32], [94.5, 50], [91, 68], [80.5, 80.5], [68, 91], [49, 94.5], [32, 92.5], [15, 82], [6, 70], [0, 50], [3.5, 32], [12, 15], [27, 5.5]], //小圆点坐标
      starsClass: ["stars1", "stars2"],

      shan: '.shan', //扇形部分
      prizeSetting: [ // 中奖设置（prizeName可随意设置，prizeIndex表示该奖品位于第几个扇形）
          {prizeName: "first", prizeIndex: 1},
          {prizeName: "second", prizeIndex: 2},
          {prizeName: "third", prizeIndex: 3},
          {prizeName: "fourth", prizeIndex: 4}
      ],

      startBtn: '.middle', //开始按钮
      direction: 0, // 0顺时针  1逆时针
      actionRan: 20 //默认转动圈数（需要转动的值 = 默认转动圈数*360 + 后台计算传过来的度数 - 1/扇形个数*2*360）
  }).on("wheelStart", function(event, showWheel){ //showWheel方法（prizeSetting中的prizeName）
      showWheel("first");
  });
  ```


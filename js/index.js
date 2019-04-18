$(function(){
	var node=`<div class="production">
							<div class="box">
								<img src="images/44.jpg" alt=""
									 class="productionImg">
								<div class="box-content">
									<div class="name">诸神之座</div>
									<div class="author">作者：小何流口水</div>
									<div class="desc">正文卷·共78章</div>
								</div>
								<div class="box-content2">
									<div class="word">首发价：78元/份</div>
									<div class="word">众筹份数：128份</div>
									<div class="word-remain">剩余份数：12份</div>
								</div>
								<a href="want3.html" class="want">我要众筹</a>
							</div>
							<div class="card">万象权证：11780C8324AE32C2</div>
						</div>
						<div class="production">
							<div class="box">
								<img src="images/55.jpg" alt=""
									 class="productionImg">
								<div class="box-content">
									<div class="name">超凡蚊暴君</div>
									<div class="author">作者：熊皮大衣</div>
									<div class="desc">正文卷·共78章</div>
								</div>
								<div class="box-content2">
									<div class="word">首发价：69元/份</div>
									<div class="word">众筹份数：99份</div>
									<div class="word-remain">剩余份数：11份</div>
								</div>
								<a href="want3.html" class="want">我要众筹</a>
							</div>
							<div class="card">万象权证：11780C8324AE32C2</div>
						</div>
						<div class="production">
							<div class="box">
								<img src="images/66.jpg" alt=""
									 class="productionImg">
								<div class="box-content">
									<div class="name">旅法师的学霸系统 </div>
									<div class="author">作者：半箱方便面</div>
									<div class="desc">正文卷·共306章</div>
								</div>
								<div class="box-content2">
									<div class="word">首发价：70元/份</div>
									<div class="word">众筹份数：128份</div>
									<div class="word-remain">剩余份数：30份</div>
								</div>
								<a href="want3.html" class="want">我要众筹</a>
							</div>
							<div class="card">万象权证：11780C8324AE32C2</div>
						</div>`
	var node1=`<div class="production">
							<div class="box">
								<img src="containerImage/4cb2b8296bc79b74a88645ec462edc3db69a22a13484d-OcreEm_fw658.png" alt=""
									 class="productionImg">
								<div class="box-content">
									<div class="name">少年百科知识报第4期（总第2440期）</div>
									<div class="author">作者</div>
									<div class="desc">故事梗概...</div>
								</div>
								<div class="box-content2">
									<div class="word">首发价：188元/份</div>
									<div class="word">最新价：288元/份</div>
									<div class="word-remain">涨幅：53%</div>
								</div>
								<div class="box2">
									<a href="buy1.html" class="btn buy">买入</a>
									<a href="sale1.html" class="btn sale">卖出</a>
								</div>
							</div>
							<div class="card">万象权证：3325B0DB992DC6000</div>
						</div>`
	var node2=`<div class="production">
							<div class="box">
								<img src="images/chengm.png" alt="" class="productionImg">
								<div class="box-content">
									<div class="name">沉默的天空</div>
									<div class="author">张踴</div>
									<div class="desc">少年百科知识报第7期（总第2443期）</div>
								</div>
								<div class="box-content2">
									<div class="word">众筹额度：2000元</div>
									<div class="word">出售报价：60元</div>
									<div class="word-remain">涨幅：50份</div>
								</div>
								<div class="box3">
									<div class="word2">IP热度：2651</div>
									<div class="word2">类型：文学</div>
								</div>
							</div>
							<div class="card">万象权证：3325B0DB992DC6000</div>
						</div>`
	$('#more1').on('click',function(){
		$('.more1-loading img').css({display:'block'})
		setTimeout(function(){
			$('.item1 .top-box1>.production:last').append(node)
			$('.more1-loading img').css({display:'none'})
		},1000)
		
	})
	$('#more2').on('click',function(){
		$('.more2-loading img').css({display:'block'})
		setTimeout(function(){
			$('.item1 .top-box2>.production:last').append(node1)
			$('.more2-loading img').css({display:'none'})
		},1000)
		
	})
	$('#more3').on('click',function(){
		$('.more3-loading img').css({display:'block'})
		setTimeout(function(){
			$('.item1 .top-box3>.production:last').append(node2)
			$('.more3-loading img').css({display:'none'})
		},1000)
		
	})
})
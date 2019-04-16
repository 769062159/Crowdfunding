$(function(){
	var node=`<div class="production">
						<div class="box">
							<img src="containerImage/4cb2b8296bc79b74a88645ec462edc3db69a22a13484d-OcreEm_fw658.png" alt=""
								 class="productionImg">
							<div class="box-content">
								<div class="name">作品名</div>
								<div class="author">作者</div>
								<div class="desc">故事梗概...</div>
							</div>
							<div class="box-content2">
								<div class="word">首发价：XX元/份</div>
								<div class="word">众筹份数：XX份</div>
								<div class="word-remain">剩余份数：XX份</div>
							</div>
							<div class="want">我要众筹</div>
						</div>
						<div class="card">万象权证：XXXXXXXXXXX</div>
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
			$('.item1 .top-box2>.production:last').append(node)
			$('.more2-loading img').css({display:'none'})
		},1000)
		
	})
	$('#more3').on('click',function(){
		$('.more3-loading img').css({display:'block'})
		setTimeout(function(){
			$('.item1 .top-box3>.production:last').append(node)
			$('.more3-loading img').css({display:'none'})
		},1000)
		
	})
})
document.addEventListener('DOMContentLoaded',()=>{

			let banner = document.querySelector('.banner');
			let ul = banner.children[0];

			// 无缝滚动关键1：复制第一张到最后
			ul.appendChild(ul.children[0].cloneNode(true));

			// 图片数量
			let len = ul.children.length;

			// 默认索引值
			let index = 0;

			// 添加分页效果
			let page = document.createElement('div');
			page.className = 'page';
			for(let i=0;i<len-1;i++){
				let span = document.createElement('span');
				span.innerText = i+1;
				if(i === index){
					span.className = 'active';
				}
				page.appendChild(span);
			}
			// 写入页面
			banner.appendChild(page);

			// 添加左右按钮
			let btnPrev = document.createElement('span');
			btnPrev.className = 'btn-prev';
			btnPrev.innerHTML = '<';
			let btnNext = document.createElement('span');
			btnNext.className = 'btn-next';
			btnNext.innerHTML = '>';
			banner.appendChild(btnPrev);
			banner.appendChild(btnNext);


			// 1）设置ul宽度，达到水平排列的效果
			ul.style.width = banner.clientWidth*len + 'px';

			// 每隔3s显示一张图片
			let timer = setInterval(autoPlay,3000);


			// 鼠标移入移出
			banner.onmouseenter = function(){
				clearInterval(timer);
			}
			banner.onmouseleave = function(){
				timer = setInterval(autoPlay,3000);
			}


			// 点击页码切换
			page.onclick = function(e){
				if(e.target.tagName.toLowerCase() === 'span'){
					index = e.target.innerText-1;
					show();
				}
			}

			banner.onclick = function(e){
				// 上一张
				if(e.target.className === 'btn-prev'){
					index--;

					show();
				}else if(e.target.className === 'btn-next'){
					index++;

					show();
				}
			}


			function autoPlay(){
				index++;

				show();

			}

			function show(){
				// 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
				if(index>=len){
					ul.style.left = 0;
					index = 1;
				}else if(index<0){
					index = len-2;
				}

				animate(ul,{left:-index * banner.clientWidth});

				// 显示页码高亮
				// 去除其他高亮，添加当前高亮
				for(let i=0;i<len-1;i++){
					if(i===index){
						page.children[i].className = 'active';
					}else{
						page.children[i].className = '';
					}
				}

				// 当到达复制图片动画时，高亮显示第一个页码
				if(index === len-1){
					page.children[0].className = 'active';
				}

			}
			
		});
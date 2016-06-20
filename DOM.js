
function show_pattern(){
		var top_pos = 25, left_pos = 25;
		var width = 500, height = 500;
		var color = ["red","blue","orange","green","yellow","purple","pink"];
		var the_body = document.getElementById("theBody");
		while(width > 50){			
			var random_num = Math.floor(Math.random()*color.length);
			var this_div = document.createElement("div");
			this_div.style.top = top_pos +"px";
			this_div.style.left = left_pos+"px";
			this_div.style.height = height+"px";
			this_div.style.width = width+"px";
			this_div.style.background = color[random_num];
			the_body.appendChild(this_div);
			top_pos += 10;
			left_pos += 10;
			height -= 20;
			width -= 20;
		}
	}
	
let vm = new Vue({
	el: "#app",
	data: {
		timeSc: "计时生成",
		timeScPan: true,
		list: null,
		cont: "",
		kan: "",
		min: "",
		max: "",
		wei: true,
		xu: true,
		jieWei: true,
		jieXu: true,
		timer: null,
		logo: "./Image/logo_js.png",
		isLogo: true,
	},
	methods: {
		shuSc() {
			this.list = new Array();
			if (this.jieWei == true) {
				this.weiSc();
			} else {
				this.chonSc();
			}
			if (this.jieXu == true) {
				this.list.sort(function(a, b){
					return a - b;
				});
			}
		},
		
		jieWeiTot() {
			this.jieWei = true;
		},
		
		jieWeiTof() {
			this.jieWei = false;
		},
		
		jieXuTot() {
			this.jieXu = true;
		},
		
		jieXuTof() {
			this.jieXu = false;
		},
		
		isShu (shu) {
			if (shu > 0) return parseInt(shu);
			return 1;
		},
		
		isMax (shu) {
			if (shu > this.isShu(this.min)) return parseInt(shu) + 1;
			return this.isShu(this.min) + 100;
		},
		
		isAdd(shu) {
			if (shu % this.isShu(this.kan) == 0) {
				return shu;
			} else {
				return this.isAdd(parseInt(Math.random() * (this.isMax(this.max) - this.isShu(this.min)) + this.isShu(this.min)));
			}
		},
		
		isKan(shu) {
			if (shu > 0) return parseInt(shu) ;
			return 1; 
		},
		
		weiSc() {
			let set = new Set(); 
			while (this.isContMax(set)) {
				set.add(this.isAdd(parseInt(Math.random() * (this.isMax(this.max) - this.isShu(this.min)) + this.isShu(this.min))));
			}
			this.list = Array.from(set);
		},
		
		isContMax(set) {
			if (this.isShu(this.cont) < (this.isMax(this.max) - this.isShu(this.min)) / this.isKan(this.kan)) {
				if (set.size < this.isShu(this.cont)) return true;
				else return false;
			} else {
				if (set.size < parseInt((this.isMax(this.max) - this.isShu(this.min)) / this.isKan(this.kan))) return true;
				else return false;
			}
		},
		
		chonSc() {
			for (var i = 0; i < this.isShu(this.cont); i++) {
				this.list.push(this.isAdd(parseInt(Math.random() * (this.isMax(this.max) - this.isShu(this.min)) + this.isShu(this.min))));
			}
		},
		
		butTimeSc() {

			if (this.timeScPan == true) {
				console.log("1111");
				if (this.timer != null) {
					 window.clearInterval(this.timer);
					 this.timer = null;
				} 
				this.timeSc = "停止计时";
				
				if (this.timer == null) {
					this.timer = window.setInterval(() => {
						this.shuSc();
					}, 100);
				}
				this.timeScPan = false;
			} else {
				console.log("0000");
				this.timeSc = "计时生成";
				this.timeScPan = true;
				if (this.timer != null) {
					 window.clearInterval(this.timer);
				} 
				this.timer = null;
			}
		},
		
		logoKae() {
			console.log(this.isLogo);
			if (this.isLogo == true) {
				this.logo = "./Image/logo_js_nk.png";
				this.isLogo = false;
			} else {
				this.logo = "./Image/logo_js.png";
				this.isLogo = true;
			}
		}
	},
	
});

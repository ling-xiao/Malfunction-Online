function pccs_change(v){
	var pccs=new province_city_county_select();
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(pccs.s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(pccs.s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(pccs.defaultValue[v],pccs.defaultValue[v]);
		if(v && document.getElementById(pccs.s[v-1]).selectedIndex>0 || !v){
			if(typeof(pccs.Items[str]) != "undefined"){
				ar = pccs.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}
				if(v){
					options[0].selected = true; 
				}
			}
		}
		if(++v<pccs.s.length){
			pccs_change(v);
		}
	}
}

function province_city_county_select(){}

province_city_county_select.prototype={
	s:["s_province","s_city","s_county"],
	defaultValue:["Malfunction reason-Level 1","Malfunction reason-Level 2","Malfunction reason-Level 3"],
	Items:{},
	add:function(id,iArray){
		this.Items[id] = iArray;
	},
	init:function(){  //初始化函数
		this.add("0",["Skid_Compression","Air_treatment","Separation","Control","Utilities","Booster"]);
		this.add("0_0",["Compressor","Motor","Control panel","After-cooler"]);
		this.add("0_0_0",["Skid Compression_Compressor_Air filter","Skid Compression_Compressor_bearing","Skid Compression_Compressor_Oil treatment","Skid Compression_Compressor_Heater exchanger","Skid Compression_Compressor_Air fan","Skid Compression_Compressor_Calorstat","Skid Compression_Compressor_Condensate drain","Skid Compression_Compressor_Others"]);
		this.add("0_0_1",["Skid Compression_Motor_Bearing","Skid Compression_Motor_Windings","Skid Compression_Motor_Others"]);
		this.add("0_0_2",["XX"]);
		this.add("0_0_3",["XX"]);
		this.add("0_1",["Cyclone seperator","Filters","Carbon tower","Purification bottles","Purge","Dryer"]);
		this.add("0_1_0",["Air treatment_Cyclone seperator"]);
		this.add("0_1_1",["Air treatment_Filters"]);
		this.add("0_1_2",["Air treatment_Carbon tower"]);
		this.add("0_1_3",["Air treatment_Purification bottles"]);
		this.add("0_1_4",["Air treatment_Purge"]);
		this.add("0_1_5",["Air treatment_Dryer_Compressor","Air treatment_Dryer_Transducer","Air treatment_Dryer_Refrigerating medium","Air treatment_Dryer_Exchanger","Air treatment_Dryer_Cooler","Air treatment_Dryer_Fan","Air treatment_Dryer_HMI","Air treatment_Dryer_Electrical equipment","Air treatment_Dryer_Condensate drain","Air treatment_Dryer_Others"]);
		
		
		
		for(var j=0;j<this.s.length-1;j++){
			document.getElementById(this.s[j]).onchange=new Function("pccs_change("+(j+1)+")");
		}
		pccs_change(0);
	}
};

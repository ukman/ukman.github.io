var electionData = [
{state:'Alabama', electors:9, obama:795696, romney:1255925, johnson:12328, stein:3397, others:6992},
{state:'Alaska', electors:3, obama:122640, romney:164676, johnson:7392, stein:2917, others:2870},
{state:'Arizona', electors:11, obama:1025232, romney:1233654, johnson:32100, stein:7816, others:452},
{state:'Arkansas', electors:6, obama:394409, romney:647744, johnson:16276, stein:9305, others:1734},
{state:'California', electors:55, obama:7854285, romney:4839958, johnson:143221, stein:85638, others:115445},
{state:'Colorado', electors:9, obama:1323101, romney:1185243, johnson:35545, stein:7508, others:18123},
{state:'Connecticut', electors:7, obama:905083, romney:634892, johnson:12580, stein:863, others:5542},
{state:'Delaware', electors:3, obama:242584, romney:165484, johnson:3882, stein:1940, others:31},
{state:'District of Columbia', electors:3, obama:267070, romney:21381, johnson:2083, stein:2458, others:772},
{state:'Florida', electors:29, obama:4237756, romney:4163447, johnson:44726, stein:8947, others:19303},
{state:'Georgia', electors:16, obama:1773827, romney:2078688, johnson:45324, stein:1516, others:695},
{state:'Hawaii', electors:4, obama:306658, romney:121015, johnson:3840, stein:3184, others:0},
{state:'Idaho', electors:4, obama:212787, romney:420911, johnson:9453, stein:4402, others:4721},
{state:'Illinois', electors:20, obama:3019512, romney:2135216, johnson:56229, stein:30222, others:835},
{state:'Indiana', electors:11, obama:1152887, romney:1420543, johnson:50111, stein:625, others:368},
{state:'Iowa', electors:6, obama:822544, romney:730617, johnson:12926, stein:3769, others:12324},
{state:'Kansas', electors:6, obama:440726, romney:692634, johnson:20456, stein:714, others:5441},
{state:'Kentucky', electors:8, obama:679370, romney:1087190, johnson:17063, stein:6337, others:7252},
{state:'Louisiana', electors:8, obama:809141, romney:1152262, johnson:18157, stein:6978, others:7527},
{state:'Maine', electors:4, obama:401306, romney:292276, johnson:9352, stein:8119, others:2127},
{state:'Maryland', electors:10, obama:1677844, romney:971869, johnson:30195, stein:17110, others:10309},
{state:'Massachusetts', electors:11, obama:1921290, romney:1188314, johnson:30920, stein:20691, others:6552},
{state:'Michigan', electors:16, obama:2564569, romney:2115256, johnson:7774, stein:21897, others:21465},
{state:'Minnesota', electors:10, obama:1546167, romney:1320225, johnson:35098, stein:13023, others:22048},
{state:'Mississippi', electors:6, obama:562949, romney:710746, johnson:6676, stein:1588, others:3625},
{state:'Missouri', electors:10, obama:1223796, romney:1482440, johnson:43151, stein:0, others:7936},
{state:'Montana', electors:3, obama:201839, romney:267928, johnson:14165, stein:0, others:116},
{state:'Nebraska', electors:5, obama:302081, romney:475064, johnson:11109, stein:0, others:6125},
{state:'Nevada', electors:6, obama:531373, romney:463567, johnson:10968, stein:0, others:9010},
{state:'New Hampshire', electors:4, obama:369561, romney:329918, johnson:8212, stein:324, others:2957},
{state:'New Jersey', electors:14, obama:2125101, romney:1477568, johnson:21045, stein:9888, others:6690},
{state:'New Mexico', electors:5, obama:415335, romney:335788, johnson:27788, stein:2691, others:2156},
{state:'New York', electors:29, obama:4485741, romney:2490431, johnson:47256, stein:39982, others:8670},
{state:'North Carolina', electors:15, obama:2178391, romney:2270395, johnson:44515, stein:0, others:12071},
{state:'North Dakota', electors:3, obama:124827, romney:188163, johnson:5231, stein:1361, others:3046},
{state:'Ohio', electors:18, obama:2827710, romney:2661433, johnson:49493, stein:18574, others:23630},
{state:'Oklahoma', electors:7, obama:443547, romney:891325, johnson:0, stein:0, others:0},
{state:'Oregon', electors:7, obama:970488, romney:754175, johnson:24089, stein:19427, others:21091},
{state:'Pennsylvania', electors:20, obama:2990274, romney:2680434, johnson:49991, stein:21341, others:11630},
{state:'Rhode Island', electors:4, obama:279677, romney:157204, johnson:4388, stein:2421, others:2359},
{state:'South Carolina', electors:9, obama:865941, romney:1071645, johnson:16321, stein:5446, others:4765},
{state:'South Dakota', electors:3, obama:145039, romney:210610, johnson:5795, stein:0, others:2371},
{state:'Tennessee', electors:11, obama:960709, romney:1462330, johnson:18623, stein:6515, others:10400},
{state:'Texas', electors:38, obama:3308124, romney:4569843, johnson:88580, stein:24657, others:2647},
{state:'Utah', electors:6, obama:251813, romney:740600, johnson:12572, stein:3817, others:8638},
{state:'Vermont', electors:3, obama:199239, romney:92698, johnson:3487, stein:594, others:3272},
{state:'Virginia', electors:13, obama:1971820, romney:1822522, johnson:31216, stein:8627, others:20305},
{state:'Washington', electors:12, obama:1755396, romney:1290670, johnson:42202, stein:20928, others:16320},
{state:'West Virginia', electors:5, obama:238269, romney:417655, johnson:6302, stein:4406, others:3806},
{state:'Wisconsin', electors:10, obama:1620985, romney:1407966, johnson:20439, stein:7665, others:11379},
{state:'Wyoming', electors:3, obama:69286, romney:170962, johnson:5326, stein:0, others:3487},
];
var populationData = {
		'California' :38332521,
		'Texas' :26448193,
		'New York' :19651127,
		'Florida' :19552860,
		'Illinois' :12882135,
		'Pennsylvania' :12773801,
		'Ohio' :11570808,
		'Georgia' :9992167,
		'Michigan' :9895622,
		'North Carolina' :9848060,
		'New Jersey' :8899339,
		'Virginia' :8260405,
		'Washington' :6971406,
		'Massachusetts' :6692824,
		'Arizona' :6626624,
		'Indiana' :6570902,
		'Tennessee' :6495978,
		'Missouri' :6044171,
		'Maryland' :5928814,
		'Wisconsin' :5742713,
		'Minnesota' :5420380,
		'Colorado' :5268367,
		'Alabama' :4833722,
		'South Carolina' :4774839,
		'Louisiana' :4625470,
		'Kentucky' :4395295,
		'Oregon' :3930065,
		'Oklahoma' :3850568,
		'Puerto Rico' :3615086,
		'Connecticut' :3596080,
		'Iowa' :3090416,
		'Mississippi' :2991207,
		'Arkansas' :2959373,
		'Utah' :2900872,
		'Kansas' :2893957,
		'Nevada' :2790136,
		'New Mexico' :2085287,
		'Nebraska' :1868516,
		'West Virginia' :1854304,
		'Idaho' :1612136,
		'Hawaii' :1404054,
		'Maine' :1328302,
		'New Hampshire' :1323459,
		'Rhode Island' :1051511,
		'Montana' :1015165,
		'Delaware' :925749,
		'South Dakota' :844877,
		'Alaska' :735132,
		'North Dakota' :723393,
		'District of Columbia' :646449,
		'Vermont' :626630,
		'Wyoming' :582658,
};

var incomeData = {
		'Maryland' :69272,
		'New Jersey' :68342,
		'Connecticut' :67034,
		'Alaska' :66953,
		'Hawaii' :64098,
		'Massachusetts' :64081,
		'New Hampshire' :60567,
		'Virginia' :59330,
		'District of Columbia' :59290,
		'California' :58931,
		'Delaware' :56860,
		'Washington' :56548,
		'Minnesota' :55616,
		'Colorado' :55430,
		'Utah' :55117,
		'New York' :54659,
		'Rhode Island' :54119,
		'Illinois' :53966,
		'Nevada' :53341,
		'Wyoming' :52664,
		'Vermont' :51618,
		'Wisconsin' :49993,
		'Pennsylvania' :49520,
		'Arizona' :48745,
		'Oregon' :48457,
		'Texas' :48259,
		'Iowa' :48044,
		'North Dakota' :47827,
		'Kansas' :47817,
		'Georgia' :47590,
		'Nebraska' :47357,
		'Maine' :45734,
		'Indiana' :45424,
		'Ohio' :45395,
		'Michigan' :45255,
		'Missouri' :45229,
		'South Dakota' :45043,
		'Idaho' :44926,
		'Florida' :44736,
		'North Carolina' :43674,
		'New Mexico' :43028,
		'Louisiana' :42492,
		'South Carolina' :44625,
		'Montana' :42322,
		'Tennessee' :41725,
		'Oklahoma' :41664,
		'Alabama' :40489,
		'Kentucky' :40072,
		'Arkansas' :40489,
		'West Virginia' :37435,
		'Mississippi' :36646,
};

var areaData = {
		'Alaska' : 665384.04,
		'Texas' : 268596.46,
		'California' : 163694.74,
		'Montana' : 147039.71,
		'New Mexico' : 121590.3,
		'Arizona' : 113990.3,
		'Nevada' : 110571.82,
		'Colorado' : 104093.67,
		'Oregon' : 98378.54,
		'Wyoming' : 97813.01,
		'Michigan' : 96713.51,
		'Minnesota' : 86935.83,
		'Utah' : 84896.88,
		'Idaho' : 83568.95,
		'Kansas' : 82278.36,
		'Nebraska' : 77347.81,
		'South Dakota' : 77115.68,
		'Washington' : 71297.95,
		'North Dakota' : 70698.32,
		'Oklahoma' : 69898.87,
		'Missouri' : 69706.99,
		'Florida' : 65757.7,
		'Wisconsin' : 65496.38,
		'Georgia' : 59425.15,
		'Illinois' : 57913.55,
		'Iowa' : 56272.81,
		'New York' : 54554.98,
		'North Carolina' : 53819.16,
		'Arkansas' : 53178.55,
		'Alabama' : 52420.07,
		'Louisiana' : 52378.13,
		'Mississippi' : 48431.78,
		'Pennsylvania' : 46054.35,
		'Ohio' : 44825.58,
		'Virginia' : 42774.93,
		'Tennessee' : 42144.25,
		'Kentucky' : 40407.8,
		'Indiana' : 36419.55,
		'Maine' : 35379.74,
		'South Carolina' : 32020.49,
		'West Virginia' : 24230.04,
		'Maryland' : 12405.93,
		'Hawaii' : 10931.72,
		'Massachusetts' : 10554.39,
		'Vermont' : 9616.36,
		'New Hampshire' : 9349.16,
		'New Jersey' : 8722.58,
		'Connecticut' : 5543.41,
		'Delaware' : 2488.72,
		'Rhode Island' : 1544.89,
};

$(document).ready(function(){

	$.each(electionData, function(idx, value){
		value.total = 1;
		value.usa = 1;

		var population = populationData[value.state];
		if(!population) {
			console.log("No pupolation for ", value.state);
		}
		value.population = population;

		var income = incomeData[value.state];
		if(!income) {
			console.log("No income for ", value.state);
		}
		value.income = income;

		var area = areaData[value.state];
		if(!area) {
			console.log("No area for ", value.state);
		}
		value.area = area;

		value.state = {id : value.state, label:value.state};
	});
	
	var populationRanges = [{id:1, label:"Small"}, {id:2, label:"Normal"}, {id:3, label:"Big"}, {id:4, label:"Very Big"}];
	range(electionData, "population", populationRanges);
	
	var incomeRanges = [{id:1, label:"Low"}, {id:2, label:"Middle"}, {id:3, label:"High Middle"}, {id:4, label:"Rich"}];
	range(electionData, "income", incomeRanges);
	
	var areaRanges = [{id:1, label:"Tiny"}, {id:2, label:"Small"}, {id:3, label:"Wide"}, {id:4, label:"Huge"}];
	range(electionData, "area", areaRanges);
	
	var dimensions = {
	    state : {
	        label :'State', 
	    },
	    usa : {
	        label :'USA', 
	        values : function(context) {
	            return [
	                {id:1, label:'USA'}, 
	            ];
	        },
	    },
	    total : {
	        label :'Total', 
	        values : function(context) {
	            return [
	                {id:1, label:'Total'}, 
	            ];
	        },
	    },
	    population_ranged : {
	        label :'Population', 
	        values : function(context) {
	            return populationRanges;
	        },
	    },
	    
	    income_ranged : {
	        label :'Income', 
	        values : function(context) {
	            return incomeRanges;
	        },
	    },
	    
	    area_ranged : {
	        label :'Area', 
	        values : function(context) {
	            return areaRanges;
	        },
	    },
	};
	
	var opts = {
			data : electionData,
			dimensions : dimensions,
			verticalDimensions : ["total"],
			horizontalDimensions : ["usa", "population_ranged", "income_ranged", "area_ranged", "state"],
			valueDataFields : ['obama', 'romney'],
			// configuration : false,
			resizable : true,
			resizableWidth : true,
			resizableHeight : false,
			dataCellRenderer : function(items, colContext, rowContext, opts) {
				var html = '';
				var className;
				var obama = items["default"].sum.obama;
				var romney = items["default"].sum.romney;
				if(obama > romney) {
					className = "obama-won";
				} else if(obama < romney) {
					className = "romney-won";
				}
				var label = "";
				if(obama) {
					label = "<div class='obama-result'>Obama : " + obama + "</div>";
				}
				if(romney) {
					label = label + "<div class='romney-result'>Romney : " + romney + "</div>";
				}
				label = '';
				html = "<div class='election-box " + className + "'>" + label + "</div>"
				return html;
				
			},
		};
	
	$("#pivot").cypivot(opts);
	
	$("#b1").click(function(){
		$("#pivot").cypivot('reconfig', opts);
	});
});

function range(arr, field, rangeNames) {
	var clonedArr = arr.slice(0);
	clonedArr.sort(function(a,b){
		return a[field] - b[field];
	});
	var portionSize = clonedArr.length / rangeNames.length;
	$.each(clonedArr, function(idx, value){
		var nameIdx = Math.floor(idx / portionSize);
		var rangeName = rangeNames[nameIdx];
		value[field + "_ranged"] = rangeName;
	});
}
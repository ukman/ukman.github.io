var tableCount = 0;
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=0AuYLuqmFOSWAdDluZ3JkTU5jaHhNU2dDU1BDU1lXZFE#gid=0';

$(document).ready(function(){
	// Load an entire sheet.
	var spreadsheet = getParam("spreadsheet");
	if(!spreadsheet || spreadsheet.trim().length == 0) {
		spreadsheet = mySpreadsheet;
	}
	$('#spreadsheet').val(spreadsheet);
	loadDimensions(spreadsheet);
});

function loadDimensions(spreadsheetUrl) {
	var t = tableCount++;
	$("#invisible").html("<table id='table-" + t + "'></table>");
	$('#table-' + t).sheetrock({
		url: spreadsheetUrl,
		chunkSize : 1, // one record just for column info 
		dataHandler : function(spreadSheetData) {
			// console.log("spreadSheetData", spreadSheetData);
			initPivot(spreadSheetData, spreadsheetUrl);
		},
	});
}

function convertSpreadSheetData2Pojo(spreadSheetData) {
	var data = [];
	for(var i = 0; i < spreadSheetData.table.rows.length; i++) {
		var dataItem = {};
		data.push(dataItem);
		for(var j = 0; j < spreadSheetData.table.cols.length; j++) {
			var dimId = spreadSheetData.table.cols[j].id;
			var value = spreadSheetData.table.rows[i].c[j].v;
			dataItem[dimId] = value;
			if(dimId.indexOf('sum-') == 0) {
				dataItem[dimId.substring(4)] = value;
			}
		}
	}
	// console.log('Data ', data);
	return data;
}

function initPivot(spreadSheetData, spreadSheetUrl) {
	var data = convertSpreadSheetData2Pojo(spreadSheetData);
	
	var dimensions = {}, vDims=[], hDims=[];
	var valueDataFieldName;
	for(var j = 0; j < spreadSheetData.table.cols.length; j++) {
		var dimId = spreadSheetData.table.cols[j].id;
		if(j < spreadSheetData.table.cols.length - 1) {
			var label = spreadSheetData.table.cols[j].label;
			dimensions[dimId] = {label:label};
			if(j % 2 == 0) {
				vDims.push(dimId);
			} else {
				hDims.push(dimId);
			}
		} else {
			valueDataFieldName = dimId;	
		}
	}
	// console.log('Dimensions ', dimensions);
	
	$("#pivot").cypivot({
		data : data,
		dimensions : dimensions,
		verticalDimensions : vDims,
		horizontalDimensions : hDims,
		valueDataFields : [spreadSheetData.table.cols[spreadSheetData.table.cols.length - 1].id],
		// configuration : true,
		resizable : true,
		resizableWidth : true,
		resizableHeight : false,
		dataProvider : function(opts, context, visibleDims, callback) {
			var t = tableCount++;
			$("#invisible").append("<table id='table-" + t + "'></table>");
			var groupFields = '';
			for(var i = 0; i < visibleDims.length; i++) {
				if(i > 0) {
					groupFields += ", ";
				}
				groupFields += visibleDims[i];
			}
			var where = '';
			for(var key in context) {
				if(where != '') {
					where = ' and ' + where;
				}
				where = key + ' = ' + addQuotesIfNeeded(context[key].id) + where;
			}
			var sql = 'select ' + groupFields + ', sum(' + valueDataFieldName + ') '+
			(where.length > 0 ? 'where ' + where + ' ' : '') + 
			'group by ' + groupFields;
			console.log("sql", sql);
			
			$('#table-' + t).empty().sheetrock({
				url: spreadSheetUrl,
				sql: sql, 
				resetStatus : true,
				rowHandler2 : function() {
					console.log("RH", arguments);
				},
				dataHandler : function(spreadSheetData) {
					var newData = convertSpreadSheetData2Pojo(spreadSheetData);
					console.log("spreadSheetData", spreadSheetData);
					console.log("newData", newData);
					// initPivot(newData);
					callback(newData);
					$('#table-' + t).remove();
				},
			});
		},
	});
}	
function addQuotesIfNeeded(s) {
	if("" + parseInt(s) == s) {
		return s;
	} else {
		return '"' + s + '"';
	}
}

function getParam(sname) {
	var params = location.search.substr(location.search.indexOf("?") + 1);
	var sval = "";
	params = params.split("&");
	// split param and value into individual pieces
	for (var i=0; i<params.length; i++) {
		temp = params[i].split("=");
	    if([temp[0]] == sname) { 
	    	sval = temp[1]; 
	    }
	}
	return decodeURIComponent(sval);
}


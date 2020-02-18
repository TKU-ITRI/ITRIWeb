



var PorderNo;
function init(){
    // Create
    $("#pOrderCreate_Content").load("/res/modalCreate/pOrderCreate.html");
<<<<<<< HEAD
    
    $("#purchase_Content").load("/Views/ProductionManage/Purchase.html");
     
=======
   
    $("#purchase_Content").load("/Views/ProductionManage/Purchase.html");
    $("#gon_Content").load("/Views/ProductionManage/gon.html");
>>>>>>> fcda453f510fb406601d30cb8aded36e0b9fa6b9

    // Edit

}

function init2(){
    $("#purchase2_Content").load("/res/modalCreate/purchaseCreate.html");
    $("#assemblyCreate_Content").load("/res/modalCreate/assemblyCreate.html");
    $("#workOrderCreate_Content").load("/res/modalCreate/workOrderCreate.html");
    $("#orderOutCreate_Content").load("/res/modalCreate/orderOutCreate.html");
    $("#orderSelfCreate_Content").load("/res/modalCreate/orderSelfCreate.html");
}
function gonCreate(id){
    PorderNo = id
    console.log(PorderNo);
    $("#gon").modal("show");
    
}
function pOrderCreate(){
    $("#pOrderCreate").modal("show");
}

function purchaseCreate(){
    var No=PorderNo;
    $("#gon").modal("hide");
    gonCreateContent(No);
    $("#purchase").modal("show");
}

function confirm(){
    alert("123");
    $("#purchase").modal("hide");
    $("#gon").modal("show");
}
function purchase2Create(){
    $("#purchase2Create").modal("show");
}
function assemblyCreate(){
    $("#assemblyCreate").modal("show");
}
function workOrderCreate(){
    $("#workOrderCreate").modal("show");
}
function orderOutCreate(){
    $("#orderOutCreate").modal("show");
}
function orderSelfCreate(){
    
    $("#orderSelfCreate").modal("show");
}
function machineCreate(){
    $("#machineCreate").modal("show");
}

function materialCreate(){
    $("#materialCreate").modal("show");
}

function jigCreate(){
    $("#jigCreate").modal("show");
}



function peopleEdit(id){
    $("#peopleEdit_title").text(id + " 編輯頁面")
    $("#peopleEdit").modal("show");
}

function machineEdit(id){
    
    $("#machineEdit_title").text(id + " 編輯頁面")
    $("#machineEdit").modal("show");
}

function cutterEdit(id){
    $("#cutterEdit_title").text(id + " 編輯頁面")

    $("#cutterEdit").modal("show");
}



function materialEdit(id){
    $("#materialEdit_title").text(id + " 編輯頁面")

    $("#materialEdit").modal("show");
}

function jigEdit(id){
    $("#jigEdit_title").text(id + " 編輯頁面")

    $("#jigEdit").modal("show");
}


function pOrderCreateContent(){
    alert("ddd");
    // $("#pOrderTable").prepend("<button class=\"btn btn-secondary btn-round btn-block\" data-toggle=\"modal\" data-target=\".animate\" data-ui-class=\"a-fadeUp\" >"+"123"+
    // "<a onclick=\"purchaseCreate()\">新增</a>"+
    // "</button>");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/pOrder/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'pOutOrderId': $('#pOutOrderIdCreate').val(),
            'pInOrderId': $('#pInOrderIdCreate').val(),
            'pOrderClientNo': $('#pOrderClientNoCreate').val(),
            'pOrderPredictDate': $('#pOrderPredictDateCreate').val(),
            'pOrderCompleteDate': $('#pOrderCompleteDateCreate').val(),
            
        }),
        success: function () {
            pOrderTable.draw();
            $("#pOrderCreate").modal("hide");
        }

    })
}


function purchaseCreateContent(){
    alert("ddd");
    // $("#pOrderTable").prepend("<button class=\"btn btn-secondary btn-round btn-block\" data-toggle=\"modal\" data-target=\".animate\" data-ui-class=\"a-fadeUp\" >"+"123"+
    // "<a onclick=\"purchaseCreate()\">新增</a>"+
    // "</button>");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/purchaseOrder/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'purchaseOrderList': $('#purchaseOrderListCreate').val(),
            'purchaseOrderMemberName': $('#purchaseOrderMemberNameCreate').val(),
            'purchaseOrderPredictDate': $('#purchaseOrderPredictDateCreate').val(),
            'purchaseOrderCompleteDate': $('#purchaseOrderCompleteDateCreate').val()
            
        }),
        success: function () {

            purchaseTable2.draw();
            $("#purchase2Create").modal("hide");
        }

    })
}

function assemblyCreateContent(){
    alert("ddd");
    // $("#pOrderTable").prepend("<button class=\"btn btn-secondary btn-round btn-block\" data-toggle=\"modal\" data-target=\".animate\" data-ui-class=\"a-fadeUp\" >"+"123"+
    // "<a onclick=\"purchaseCreate()\">新增</a>"+
    // "</button>");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/assemblyList/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'aListImage': $('#aListImageCreate').val(),
            'aListMemberName': $('#aListMemberNameCreate').val(),
            'aListTool': $('#aListToolCreate').val(),
            'aListPredictDate': $('#aListPredictDateCreate').val(),
            'aListCompleteDateCreate': $('#aListCompleteDateCreate').val()
            
        }),
        success: function () {

            assemblyTable.draw();
            $("#assemblyCreate").modal("hide");
        }

    })
}

function orderOutCreateContent(){
    alert("ddd");
    // $("#pOrderTable").prepend("<button class=\"btn btn-secondary btn-round btn-block\" data-toggle=\"modal\" data-target=\".animate\" data-ui-class=\"a-fadeUp\" >"+"123"+
    // "<a onclick=\"purchaseCreate()\">新增</a>"+
    // "</button>");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderoutsource/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'oOrderImage': $('#oOrderImageCreate').val(),
            'oOrderSchedule': $('#oOrderScheduleCreate').val(),
            'oOrderMethod': $('#oOrderMethodCreate').val(),
            'oOrderContractor': $('#oOrderContractorCreate').val(),
            'oOrderPredictDate': $('#oOrderPredictDateCreate').val(),
            'oOrderCompleteDate': $('#oOrderCompleteDateCreate').val()
            
        }),
        success: function () {
            orderOutTable.draw();
            $("#orderOutCreate").modal("hide");
        }

    })
}

function orderSelfCreateContent(){
    alert("ddd");
    // $("#pOrderTable").prepend("<button class=\"btn btn-secondary btn-round btn-block\" data-toggle=\"modal\" data-target=\".animate\" data-ui-class=\"a-fadeUp\" >"+"123"+
    // "<a onclick=\"purchaseCreate()\">新增</a>"+
    // "</button>");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderselfmade/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'sOrderImage': $('#sOrderImageCreate').val(),
            'sOrderSchedule': $('#sOrderScheduleCreate').val(),
            'oOrderMethod': $('#sOrderMethodCreate').val(),
            'oOrderContractor': $('#oOrderContractorCreate').val(),
            'sOrderMemberName': $('#sOrderMemberNameCreate').val(),
            'sOrderMachine': $('#sOrderMachineCreate').val(),
            'sOrderTool': $('#sOrderToolCreate').val(),
            'sOrderProgram': $('#sOrderProgramCreate').val(),
            'sOrderSetting': $('#sOrderSettingCreate').val(),
            'sOrderCount': $('#sOrderCountCreate').val(),
            'sOrderMaterial': $('#sOrderMaterialCreate').val(),
            'sOrderPredictDate': $('#sOrderPredictDateCreate').val(),
            'sOrderCompleteDate': $('#sOrderCompleteDateCreate').val()
            
        }),
        success: function () {
            orderSelfTable.draw();
            $("#orderSelfCreate").modal("hide");
        }

    })
}
function gonCreateContent(No){
    alert("aaa");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/gon/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'porderNo': No,
            'createDate': $('#createDateCreate').val(),
            'modifyDate': $('#modifyDateCreate').val()      
        }),
        success: function () {
            
        }
    })
}
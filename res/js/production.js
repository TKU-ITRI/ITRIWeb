



var PorderNo;
var GonNo;
function init(){
    // Create
    // $("#pOrderCreate_Content").load("/Views/ProductionManage/test.html");
   
    $("#purchase_Content").load("/Views/ProductionManage/Purchase.html");
    $("#gon_Content").load("/Views/ProductionManage/gon.html");
    //Edit
    $("#pOrderEdit_Content").load("/res/modalEdit/pOrderEdit.html");
}

function init2(){
    // Create
    $("#purchase2Create_Content").load("/res/modalCreate/purchaseCreate.html");
    $("#assemblyCreate_Content").load("/res/modalCreate/assemblyCreate.html");
    $("#orderOutCreate_Content").load("/res/modalCreate/orderOutCreate.html");
    $("#orderSelfCreate_Content").load("/res/modalCreate/orderSelfCreate.html");
    // Edit
    $("#purchase2Edit_Content").load("/res/modalEdit/memberEdit.html");
    $("#assemblyEdit_Content").load("/res/modalEdit/assemblyEdit.html");
    $("#orderOutEdit_Content").load("/res/modalEdit/orderOutEdit.html");
    $("#orderSelfEdit_Content").load("/res/modalEdit/orderSelfEdit.html");
}

function pOrderCreate(){
    $("#pOrderCreate").modal("show");
    
}

function gonCreate(id){
    PorderNo = id
    console.log("I am porderNo:"+PorderNo);
    GetGonTable();
    
}

function purchaseCreate(){
    
    gonCreateContent(PorderNo);
    $("#purchase").modal("show");
  
}

function purchase2Create(){
    $("#pGonNo").val(GonNo);
    console.log('i am p'+GonNo);
    $("#purchase2Create").modal("show");
}

function assemblyCreate(){
    $("#aGonNo").val(GonNo);
    console.log('i am a'+GonNo);
    $("#assemblyCreate").modal("show");
}

function orderOutCreate(){
    $("#oGonNo").val(GonNo);
    console.log('i am o'+GonNo);
    $("#orderOutCreate").modal("show");
}

function orderSelfCreate(){
    $("#sGonNo").val(GonNo);
    console.log('i am s'+GonNo);
    $("#orderSelfCreate").modal("show");
}

function confirm(){
    alert("456");
    $("#purchase").modal("hide");
    $("#gon").modal("show");
}

// Edit
function pOrderEdit(id){
    $("#pOrderEdit_title").text(id + " 編輯頁面")
    $("#pOrderEdit").modal("show");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/pOrder/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#pOrderIdEdit").val(e.id);
            $("#pOutOrderIdEdit").val(e.pOutOrderId);
            $("#pInOrderIdEdit").val(e.pInOrderId);
            $("#pOrderClientNoEdit").val(e.pOrderClientNo);
            $("pOrderPredictDateEdit").val(e.pOrderPredictDate);
            $('#pOrderCompleteDateEdit').val(e.pOrderCompleteDate);
        }

    })
}

function gonEdit(id){
    $("#gonEdit_title").text(id + " 編輯頁面")
    $("#gonEdit").modal("show");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/gon/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#gonIdEdit").val(e.id);
            $("#porderNoEdit").val(e.porderNo);
            $('#createDateEdit').val(e.createDate);
            $('#modifyDateEdit').val(e.modifyDate);
        }

    })
}

function purchase2Edit(id){
    $("#purchase2Edit_title").text(id + " 編輯頁面")
    $("#purchase2Edit").modal("show");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/purchaseOrder/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#purchase2OrderIdEdit").val(e.id);
            $("#purchase2OrderListEdit").val(e.purchaseOrderList);
            $("#purchase2OrderMemberNameEdit").val(e.purchaseOrderMemberName);
            $("#purchase2OrderCompleteDateEdit").val(e.purchaseOrderCompleteDate);
            $("#pGonNoEdit").val(e.pGonNo);
        }

    })
}

function assemblyEdit(id){
    $("#assemblyEdit_title").text(id + " 編輯頁面")
    $("#assemblyEdit").modal("show");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/assemblyList/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#assemblyIdEdit").val(e.id);
            $('#aListImageEdit').val(e.aListImage);
            $('#aListMemberNameEdit').val(e.aListMemberName);
            $('#aListToolEdit').val(e.aListTool);
            $('#aListPredictDateEdit').val(e.aListPredictDate);
            $('#aListCompleteDateEdit').val(e.aListCompleteDate);
            $("#aGonNoEdit").val(e.aGonNo);
        }

    })
}

function orderOutEdit(id){
    $("#orderOutEdit_title").text(id + " 編輯頁面")

    $("#orderOutEdit").modal("show");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderoutsource/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#oOrderIdEdit").val(e.id);
            $('#oOrderImageEdit').val(e.oOrderImage);
            $('#oOrderScheduleEdit').val(e.oOrderSchedule);
            $('#oOrderMethodEdit').val(e.oOrderMethod);
            $('#oOrderContractorEdit').val(e.oOrderContractor);
            $('#oOrderPredictDateEdit').val(e.oOrderPredictDate);
            $('#oOrderCompleteDateEdit').val(e.oOrderCompleteDate);
            $("#oGonNoEdit").val(e.oGonNo);
        }
    })
}

function orderSelfEdit(id){
    $("#orderSelfEdit_title").text(id + " 編輯頁面")
    $("#orderSelfEdit").modal("show");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderselfmade/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#sOrderIdEdit").val(e.id);
            $('#sOrderImageEdit').val(e.sOrderImage);
            $('#sOrderScheduleEdit').val(e.sOrderSchedule);
            $('#sOrderMethodEdit').val(e.sOrderMethod);
            $('#sOrderContractorEdit').val(e.sOrderContractor);
            $('#sOrderMemberNameEdit').val(e.sOrderMemberName);
            $('#sOrderMachineEdit').val(e.sOrderMachine);
            $('#sOrderToolEdit').val(e.sOrderTool);
            $('#sOrderProgramEdit').val(e.sOrderProgram);
            $('#sOrderSettingEdit').val(e.sOrderSetting);
            $('#sOrderCountEdit').val(e.sOrderCount);
            $('#sOrderMaterialEdit').val(e.sOrderMaterial);
            $('#sOrderPredictDateEdit').val(e.sOrderPredictDate);
            $('#sOrderCompleteDateEdit').val(e.sOrderCompleteDate);
            $("#sGonNoEdit").val(e.sGonNo);
        }
    })
}

//create_content
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
function pOrderEditContent() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/pOrder/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#pOrderIdEdit').val(),
            'pOutOrderId': $('#pOutOrderIdEdit').val(),
            'pInOrderId': $('#pInOrderIdEdit').val(),
            'pOrderClientNo': $('#pOrderClientNoEdit').val(),
            'pOrderPredictDate': $('#pOrderPredictDateEdit').val(),
            'pOrderCompleteDate': $('#pOrderCompleteDateEdit').val(),
            
        }),
        success: function () {
            pOrderTable.draw();
            $("#pOrderEdit").modal("hide");
        }
    })
}
function pOrderDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/pOrder/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                pOrderTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}

function gonCreateContent(PorderNo){
    alert("aaa");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/gon/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'porderNo': PorderNo,
            'createDate': $('#createDateCreate').val(),
            'modifyDate': $('#modifyDateCreate').val(),      
        }),
        success: function (e) {
                console.log('api call back:'+e);
                GonNo=e;   
        }
    })
}
function gonEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/gon/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#gonIdEdit').val(),
            'porderNo': $('#porderNoEdit'),
            'createDate': $('#createDateEdit').val(),
            'modifyDate': $('#modifyDateEdit').val()
            
        }),
        success: function () {
            gonTable.draw();
            $("#gonEdit").modal("hide");
        }
    })
}
function gonDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/gon/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                gonTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}

function purchase2CreateContent(){
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
            'purchaseOrderList': $('#purchase2OrderListCreate').val(),
            'purchaseOrderMemberName': $('#purchase2OrderMemberNameCreate').val(),
            'purchaseOrderPredictDate': $('#purchase2OrderPredictDateCreate').val(),
            'purchaseOrderCompleteDate': $('#purchase2OrderCompleteDateCreate').val(),
            'pGonNo':GonNo
        }),
        success: function () {

            purchaseTable2.draw();
            $("#purchase2Create").modal("hide");
        }

    })
}
function purchase2EditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/purchaseOrder/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#purchase2OrderIdEdit').val(),
            'purchaseOrderList': $('#purchase2OrderListEdit').val(),
            'purchaseOrderMemberName': $('#purchase2OrderMemberNameEdit').val(),
            'purchaseOrderPredictDate': $('#purchase2OrderPredictDateEdit').val(),
            'purchaseOrderCompleteDate': $('#purchase2OrderCompleteDateEdit').val(),
            'pGonNo':$('pGonNoEdit').val(),
        }),
        success: function () {
            purchaseTable2.draw();
            $("#purchase2Edit").modal("hide");
        }
    })
}
function purchase2Delete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/purchaseOrder/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                purchaseTable2.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
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
            'aListCompleteDateCreate': $('#aListCompleteDateCreate').val(),
            'aGonNo':GonNo
            
        }),
        success: function () {

            assemblyTable.draw();
            $("#assemblyCreate").modal("hide");
        }

    })
    
    
}
function assemblyEditContent() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/assemblyList/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#assemblyIdEdit').val(),
            'aListImage': $('#aListImageEdit').val(),
            'aListMemberName': $('#aListMemberNameEdit').val(),
            'aListTool': $('#aListToolEdit').val(),
            'aListPredictDate': $('#aListPredictDateEdit').val(),
            'aListCompleteDateEdit': $('#aListCompleteDateEdit').val(),
            'aGonNo':$('aGonNoEdit').val(),
        }),
        success: function () {
            assemblyTable.draw();
            $("#assemblyEdit").modal("hide");
        }
    })
}
function assemblyDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/assemblyList/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                assemblyTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
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
            'oOrderCompleteDate': $('#oOrderCompleteDateCreate').val(),
            'oGonNo':GonNo
            
        }),
        success: function () {
            orderOutTable.draw();
            $("#orderOutCreate").modal("hide");
        }
    })    
}
function orderOutEditContent() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderoutsource/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#oOrderIdEdit').val(),
            'oOrderImage': $('#oOrderImageEdit').val(),
            'oOrderSchedule': $('#oOrderScheduleEdit').val(),
            'oOrderMethod': $('#oOrderMethodEdit').val(),
            'oOrderContractor': $('#oOrderContractorEdit').val(),
            'oOrderPredictDate': $('#oOrderPredictDateEdit').val(),
            'oOrderCompleteDate': $('#oOrderCompleteDateEdit').val(),
            'oGonNo':$('oGonNoEdit').val(),
        }),
        success: function () {
            orderOutTable.draw();
            $("#orderOutEdit").modal("hide");
        }
    })
}
function orderOutDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/orderoutsource/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                orderOutTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
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
            'sOrderMethod': $('#sOrderMethodCreate').val(),
            'sOrderContractor': $('#sOrderContractorCreate').val(),
            'sOrderMemberName': $('#sOrderMemberNameCreate').val(),
            'sOrderMachine': $('#sOrderMachineCreate').val(),
            'sOrderTool': $('#sOrderToolCreate').val(),
            'sOrderProgram': $('#sOrderProgramCreate').val(),
            'sOrderSetting': $('#sOrderSettingCreate').val(),
            'sOrderCount': $('#sOrderCountCreate').val(),
            'sOrderMaterial': $('#sOrderMaterialCreate').val(),
            'sOrderPredictDate': $('#sOrderPredictDateCreate').val(),
            'sOrderCompleteDate': $('#sOrderCompleteDateCreate').val(),
            'sGonNo':GonNo
            
        }),
        success: function () {
            orderSelfTable.draw();
            $("#orderSelfCreate").modal("hide");
        }

    })
}
function orderSelfEditContent() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderselfmade/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#sOrderIdEdit').val(),
            'sOrderImage': $('#sOrderImageEdit').val(),
            'sOrderSchedule': $('#sOrderScheduleEdit').val(),
            'sOrderMethod': $('#sOrderMethodEdit').val(),
            'sOrderContractor': $('#sOrderContractorEdit').val(),
            'sOrderMemberName': $('#sOrderMemberNameEdit').val(),
            'sOrderMachine': $('#sOrderMachineEdit').val(),
            'sOrderTool': $('#sOrderToolEdit').val(),
            'sOrderProgram': $('#sOrderProgramEdit').val(),
            'sOrderSetting': $('#sOrderSettingEdit').val(),
            'sOrderCount': $('#sOrderCountEdit').val(),
            'sOrderMaterial': $('#sOrderMaterialEdit').val(),
            'sOrderPredictDate': $('#sOrderPredictDateEdit').val(),
            'sOrderCompleteDate': $('#sOrderCompleteDateEdit').val(),
            'sGonNo':$('sGonNoEdit').val(),
        }),
        success: function () {
            orderSelfTable.draw();
            $("#orderSelfEdit").modal("hide");
        }
    })
}
function orderSelfDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/orderselfmade/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                orderSelfTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}


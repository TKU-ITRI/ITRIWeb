




function init(){
    // Create
    $("#pOrderCreate_Content").load("/res/modalCreate/pOrderCreate.html");
    
    $("#purchase_Content").load("/Views/ProductionManage/Purchase.html");
     

    // Edit

}

function init2(){
    $("#purchase2_Content").load("/res/modalCreate/purchaseCreate.html");
    $("#assemblyCreate_Content").load("/res/modalCreate/assemblyCreate.html");
    $("#workOrderCreate_Content").load("/res/modalCreate/workOrderCreate.html");
}

function pOrderCreate(){
    $("#pOrderCreate").modal("show");
}

function purchaseCreate(){
    $("#purchase").modal("show");
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
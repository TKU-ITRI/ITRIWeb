




function init(){
    // Create
    $("#orderCreate_Content").load("/res/modalCreate/orderCreate.html");
   
    $("#purchase_Content").load("/Views/ProductionManage/Purchase.html");

    // Edit

}
function orderCreate(){
    $("#orderCreate").modal("show");
}

function purchaseCreate(){
    $("#purchase").modal("show");
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


function orderCreateContent(){
    $("#orderTable").prepend("<button class=\"btn btn-secondary btn-round btn-block\" data-toggle=\"modal\" data-target=\".animate\" data-ui-class=\"a-fadeUp\" >"+"123"+
    "<a onclick=\"\">新增</a>"+
    "</button>");
    /*$.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/order/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'P_Out_order_Id': $('#P_Out_order_Id').val(),
            'P_In_order_Id': $('#P_In_order_Id').val(),
            'P_order_client': $('#P_order_client').val(),
            'P_order_predict_date': $('#P_order_predict_date').val(),
            'P_order_complete_date': $('#P_order_complete_date').val(),
        }),
        success: function () {
            orderTable.draw();
            $("#orderCreate").modal("hide");
        }

    })*/
}
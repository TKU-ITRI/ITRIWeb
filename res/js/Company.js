function DeleteCompany(id, msg) { // 變更狀態
    var confirmStatus = confirm("是否刪除此帳號?");
    if (confirmStatus) {
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/cm/Delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                "id": id
            }),
            success: function () {
                dataTables.draw();
            }
        });
    }
}
function changeCMStatus(id, msg) { // 變更狀態
    var confirmStatus = confirm("是否" + msg + "?");
    if (confirmStatus) {
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/cm/TurnStatus",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                "id": id
            }),
            success: function () {
                dataTables.draw();
            }
        });
    }
}
function createCompany() { // 建立會員初始化



    
    $("#txtactiveCreate").append('<option value="1">啟用</option>');
    $("#txtactiveCreate").append('<option value="0">停用</option>');
    alert("ddd");
    $('#CMCreate').modal('show');

}
function createCompanyCommit() { // 建立初始化
     //if ($('#txtloginCreate').val().search(emailRule) == -1) return alert("帳號格式不正確");
    //if ($('#txtnameCreate').val() == "") return alert("暱稱不正確");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cm/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'companyName': $('#txtcompanyNameCreate').val(),
            'active': $('#txtactiveCreate').val(),
        }),
        success: function () {
            dataTables.draw();
            $('#CMCreate').modal('hide');
        }

    })
    $('#CMCreate').modal('show');
}
function editCompany(id, title) { // 編輯會員初始化
    $('#CMEditLabel').html('編輯 ' + title);

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cm/GetById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "Id": id
        }),
        success: function (e) {
            console.log(e.status);
            $("#txtidEdit").val(id);
            $('#txtcompanyNameEdit').val(e.companyName);
            $('#txtactiveEdit').val(e.active);
        }
    });
    $('#CMEdit').modal('show');

}

function CompanyManager(id, title) { // 編輯會員初始化
    $('#CompanyManagerLabel').html('編輯 ' + title);
    CompanyId = id;

    $('#CompanyManager').modal('show');

}
function editCompanyCommit() { // 編輯會員送出
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cm/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'Id': $("#txtidEdit").val(),
            'CompanyName': $("#txtcompanyNameEdit").val(),
            'Active': $("#txtactiveEdit").val(),
        }),
        success: function () {
            dataTables.draw();
            $('#AMEdit').modal('hide');
        }
    });
}
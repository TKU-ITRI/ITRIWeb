




function init() {
    // Create
    $("#peopleCreate_Content").load("/res/modalCreate/peopleCreate.html");
    $("#cutterCreate_Content").load("/res/modalCreate/cutterCreate.html");
    $("#machineCreate_Content").load("/res/modalCreate/machineCreate.html");
    $("#jigCreate_Content").load("/res/modalCreate/jigCreate.html");
    $("#materialCreate_Content").load("/res/modalCreate/materialCreate.html");

    // Edit
    $("#peopleEdit_Content").load("/res/modalEdit/peopleEdit.html");
    $("#cutterEdit_Content").load("/res/modalEdit/cutterEdit.html");
    $("#machineEdit_Content").load("/res/modalEdit/machineEdit.html");
    $("#jigEdit_Content").load("/res/modalEdit/jigEdit.html");
    $("#materialEdit_Content").load("/res/modalEdit/materialEdit.html");

}
function peopleCreate() {
    $("#peopleCreate").modal("show");
}

function cutterCreate() {
    $("#cutterCreate").modal("show");
}

function machineCreate() {
    $("#machineCreate").modal("show");
}

function materialCreate() {
    $("#materialCreate").modal("show");
}

function jigCreate() {
    $("#jigCreate").modal("show");
}



function peopleEdit(id) {
    $("#peopleEdit_title").text(id + " 編輯頁面")
    $("#peopleEdit").modal("show");
}

function machineEdit(id) {
    $("#machineEdit_title").text(id + " 編輯頁面")
    $("#machineEdit").modal("show");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/machine/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {   
            $("#machineIdEdit").val(e.id);

            $("#machineClassEdit").val(e.machineClass);
            $("#machineNameEdit").val(e.machineName);
            $("#machineNoEdit").val(e.machineNo);
            $("#machineBrandEdit").val(e.machineBrand);
            $("#machineSizeEdit").val(e.machineSize);

        }

    })
   
}

function cutterEdit(id) {
    $("#cutterEdit_title").text(id + " 編輯頁面")

    $("#cutterEdit").modal("show");
}



function materialEdit(id) {
    $("#materialEdit_title").text(id + " 編輯頁面")

    $("#materialEdit").modal("show");
}

function jigEdit(id) {
    $("#jigEdit_title").text(id + " 編輯頁面")

    $("#jigEdit").modal("show");
}

function machineCreateContent() {
    alert("ddd");
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/machine/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'machineClass': $('#machineClassCreate').val(),
            'machineName': $('#machineNameCreate').val(),
            'machineNo': $('#machineNoCreate').val(),
            'machineBrand': $('#machineBrandCreate').val(),
            'machineSize': $('#machineSizeCreate').val(),
        }),
        success: function () {
            machineTable.draw();
            $("#machineCreate").modal("hide");
        }

    })

}
function machineEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/machine/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#machineIdEdit').val(),
            'machineClass': $('#machineClassEdit').val(),
            'machineName': $('#machineNameEdit').val(),
            'machineNo': $('#machineNoEdit').val(),
            'machineBrand': $('#machineBrandEdit').val(),
            'machineSize': $('#machineSizeEdit').val(),
        }),
        success: function () {
            machineTable.draw();
            $("#machineEdit").modal("hide");
        }
    })
}

function machineDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/machine/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                machineTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}
function cutterCreateContent() {
    alert("ddd");
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cutter/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'cutterClass': $('#cutterClassCreate').val(),
            'cutterName': $('#cutterNameCreate').val(),
            'cutterNo': $('#cutterNoCreate').val(),
            'cutterBrand': $('#cutterBrandCreate').val(),
            'cutterSize': $('#cutterSizeCreate').val(),
            'cutterStatus': $('#cutterStatusCreate').val()
        }),
        success: function () {
            cutterTable.draw();
            $("#cutterCreate").modal("hide");
        }

    })
}
function cutterDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/cutter/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                cutterTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}

function jigCreateContent() {
    alert("ddd");
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/jig/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'jigName': $('#jigNameCreate').val(),
            'jigNo': $('#jigNoCreate').val(),
            'jigClass': $('#jigClassCreate').val(),
            'jigUse': $('#jigUseCreate').val(),
        }),
        success: function () {
            jigTable.draw();
            $("#jigCreate").modal("hide");
        }

    })

}
function jigDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/jig/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                jigTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}

function materiaCreateContent() {
    alert("ddd");
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/materia/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'materiaClass': $('#materiaClassCreate').val(),
            'materiaCount': $('#materiaCountCreate').val(),
            'materiaNo': $('#materiaNoCreate').val(),
            'materiaStatus': $('#materiaStatusCreate').val(),
            'materiaSize': $('#materiaSizeCreate').val(),
            'materiaTableCreateDate':$('#materiaTableCreateDateCreate').val(),
            'materiaTableModifyDate':$('#materiaTableModifyDateCreate').val()
        }),
        success: function () {
            materiaTable.draw();
            $("#meteriaCreate").modal("hide");
        }

    })

}
function materiaDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/materia/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                materiaTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}
function PeopleCreateContent() {
    alert("ddd");
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/member/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'memberNumber': $('#memberNumberCreate').val(),
            'memberName': $('#memberNameCreate').val(),
            'memberDuties': $('#memberDutiesCreate').val(),
            'memberSubDuties': $('#memberSubDutiesCreate').val(),
            'memberHiringDay':$('#memberHiringDayCreate').val(),
            'memberFiringDay':$('#memberFiringDayCreate').val(),
        }),
        success: function () {
            PeopleTable.draw();
            $("#PeopleCreate").modal("hide");
        }

    })

}
function peopleDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/member/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                peopleTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}
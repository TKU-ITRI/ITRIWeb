function init(){
    console.log($("#memberName").val());
    $("#memberName").val(getCookie("nickName"));
}
;(function (){

    var vm = new Vue ({
        el : "#warp",
        data : function (){
            return {
                handleMybutton : "确定",
                flag : false,
                flagTwo : false,
                handleClose : "取消",
                handleTrue : "确定",
                myTishi : "确认操作",
                textareaValue : "",
                textareaValueTwo : "请输入内容！",
            }
        },
        methods:{
            handleButton : function(){
                if(this.textareaValue==""){ 
                    this.flagTwo= !this.flagTwo;
                }else{
                    this.flag = !this.flag;
                }
            },

            handleNo : function (){
                this.flag =!this.flag;
                this.textareaValue="";
            },
            handleYes : function () { 
                this.flag = !this.flag;
                this.textareaValue="";
            },
            handleYestwo:function(){
                this.flagTwo= !this.flagTwo;
            },
        },
    });






})();
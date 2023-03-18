export default class SPAManager{


    _model;
    userSettings;


    homeContent(){
        $("#mainContainer").html(this._model.homeContent);
        // window.location.hash = "home";
    }

    createContent(){
        $("#mainContainer").html(this._model.createContent);
        // window.location.hash = "home";
    }

    editContent(){
        $("#mainContainer").html(this._model.editContent);
        // window.location.hash = "home";
    }

    loginSignupContent(){
        $("#mainContainer").html(this._model.loginSignupContent);
        // window.location.hash = "home";
    }

    defaultContent(){
        $("#mainContainer").html(this._model.defaultContent);
        // window.location.hash = "home";
    }



    updateView(){
        $('title').html(`${window.location.hash.split('#')[1]} Page`);
        window.scrollTo(0, 0);
        $("#mainMenu").css("display", "none");
        this.setTriggers();
    }


    constructor(_model){
        this._model = _model;
        $(document).ready(e => {
            this.updateView();
            if($("#mainContainer").innerHTML == null){
                $("#mainContainer").html(this.defaultContent());
            }
        });

        $(window).on("hashchange", e => {
            console.log("Hello from routeTo()" + window.location.hash);
            switch(window.location.hash){
                case "#HOME":
                    this.homeContent();
                    break;
                case "#CREATE":
                    this.createContent();
                    break;
                case "#EDIT":
                    this.editContent();
                    break;
                case "#LOGIN":
                    this.loginSignupContent();
                    break;
                case "#SIGNUP":
                    this.loginSignupContent();
                    break;
                default:
                    break;
            }
            this.updateView();
        });

        $("#hamburger").on("click", e =>{
            if($("#mainMenu").css("display") == "none"){
                $("#mainMenu").css("display", "block");
            }else if($("#mainMenu").css("display") == "block"){
                $("#mainMenu").css("display", "none");
            }
        });


        $(window).on("resize", e => {
            var pageWidth = e.currentTarget.innerWidth;
            if(pageWidth >= 960){

            }else{

            }
        });

        this.setTriggers();
    }

    setTriggers(){
        $(".imageContainerSection img").mouseenter(e => {
            $(".overlayImageContainer").css("display", "block");
        });
        $(".overlayImageContainer").mouseleave(e => {
            $(".overlayImageContainer").css("display", "none");
        });
    }
}
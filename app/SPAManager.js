export default class SPAManager{


    _model;
    gm;
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

    detailsPage(page){
        switch(page){
            case "capcom":
                $("#mainContainer").html(this._model.detailsPage);
                this.updatePage();
                break;
            case "bethesda":
                break;
            case "blizzard":
                break;
            case "ea":
                break;
            case "fromSoftware":
                break;
            case "naughtyDog":
                break;
            case "nintendo":
                break;
            case "rockstar":
                break;
            case "scottCawthon":
                break;
            case "squareEnix":
                break;
            default:
                break;
        }
    }


    updatePage(){
        $("#galleryTitle").html(this.gm.objectData["Developers"][this.gm.dataCounter]["Games"][0]["title"]);
        $("#galleryImage").attr("src", `${this.gm.objectData["Developers"][this.gm.dataCounter]["Games"][0]["image"]}`);
        $("#galleryPublisher").html(this.gm.objectData["Developers"][this.dataCounter]["Games"][0]["publisher"]);
        $("#galleryGenre").html(this.gm.objectData["Developers"][this.dataCounter]["Games"][0]["genre"]);
        $("#galleryPlatforms").html(this.gm.objectData["Developers"][this.dataCounter]["Games"][0]["platforms"]);
    }



    updateView(){
        $('title').html(`${window.location.hash.split('#')[1]} Page`);
        window.scrollTo(0, 0);
        $("#mainMenu").css("display", "none");
        this.setTriggers();
    }


    constructor(_model, gallery){
        this._model = _model;
        this.gm = gallery;
        $(document).ready(e => {
            this.updateView();
            if($("#mainContainer").innerHTML == null){
                $("#mainContainer").html(this.defaultContent());
            }
            // window.location = $(location).attr("href").split("#")[0];
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
                case "#DETAILS":
                    console.log($("#galleryImage").attr("src").split("/")[3].split(".")[0]);
                    this.detailsPage($("#galleryImage").attr("src").split("/")[3].split(".")[0]);
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



/*
        {
            "title":"Monster Hunter Rise",
            "publisher":"Capcom",
            "genre":"Fighting",
            "platforms":"Switch/PS4/XBOX/PC",
            "image":"assets/images/mhrise.jpg"
        },
        {
            "title":"Super Smash Bros. Ultimate",
            "publisher":"Nintendo",
            "genre":"Fighting",
            "platforms":"Switch",
            "image":"assets/images/ssbu.jpg"
        },
        {
            "title":"Monster Hunter Generations Ultimate",
            "publisher":"Capcom",
            "genre":"Fighting",
            "platforms":"Switch",
            "image":"assets/images/mhgu.jpg"
        },
        {
            "title":"Super Mario Odyssey",
            "publisher":"Nintendo",
            "genre":"Platformer",
            "platforms":"Switch",
            "image":"assets/images/smo.jpg"
        },
        {
            "title":"Legend of Zelda: Breath of the Wild",
            "publisher":"Nintendo",
            "genre":"Adventure/Puzzle",
            "platforms":"Switch",
            "image":"assets/images/lozbotw.jpg"
        },
        {
            "title":"Metroid Prime Remastered",
            "publisher":"Nintendo",
            "genre":"Adventure",
            "platforms":"Switch",
            "image":"assets/images/mpr.jpg"
        },
        {
            "title":"Super Mario Kart 8 Deluxe",
            "publisher":"Nintendo",
            "genre":"Racing",
            "platforms":"Switch",
            "image":"assets/images/smk8d.jpg"
        },
        {
            "title":"Monster Hunter World",
            "publisher":"Capcom",
            "genre":"Fighting",
            "platforms":"PS4/XBOX/PC",
            "image":"assets/images/mhworld.jpg"
        },
        {
            "title":"Bloodborne",
            "publisher":"FromSoftware",
            "genre":"RPG",
            "platforms":"PS4",
            "image":"assets/images/bb.jpg"
        },
        {
            "title":"Pokemon Shield",
            "publisher":"Nintendo",
            "genre":"RPG",
            "platforms":"Switch",
            "image":"assets/images/ps.jpg"
        }
*/
function save(){
    var user={};
    var matrix={};
    user["username"]=document.getElementsByName("username")[0].value;
    user["password"]=document.getElementsByName("password")[0].value;
    var alphabets="ABCDEFGHIJ";
    for(var i = 0; i < 10; i++) {
        for (var j=0;j<7;j++){
            console.log(alphabets[i]+"_"+(j+1).toString());
            matrix[alphabets[i]+"_"+(j+1).toString()]=document.getElementsByName(alphabets[i]+"_"+(j+1).toString())[0].value;
        }
    }
    chrome.storage.local.set(user);
    chrome.storage.local.set(matrix);
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName("save")[0].addEventListener('click', function (){save();});
});

function clear(){
    chrome.storage.local.clear();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName("clear")[0].addEventListener('click', function (){
        clear();
        var alphabets="ABCDEFGHIJ";
        keys=["username","password"]
        for (i=0;i<2;i++){
            clear_value(keys[i])
        }
        for(var i = 0; i < 10; i++) {
            for (var j=0;j<7;j++){
                key=alphabets[i]+"_"+(j+1).toString();
                clear_value[key];
            }
        }
    });
});
function clear_value(key){
    document.getElementsByName(key)[0].value="";
}

function fill_value(key){
    return function(arg){
        if (arg[key]){
            document.getElementsByName(key)[0].value=arg[key];
        }
    };
}

function load(){
    chrome.storage.local.get("username",fill_value("username"));
    chrome.storage.local.get("password",fill_value("password"));
    var alphabets="ABCDEFGHIJ";
    for(var i = 0; i < 10; i++) {
        for (var j=0;j<7;j++){
            key=alphabets[i]+"_"+(j+1).toString();
            chrome.storage.local.get(key,fill_value(key));
        }
    }
    console.log("loaded")
}
window.onload=load;
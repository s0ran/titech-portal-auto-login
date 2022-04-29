function fill_value(doc_key,stor_key){
    return function(arg){
        if (arg[stor_key]){
            if (document.getElementsByName(doc_key)[0].value!=arg[stor_key]){
				document.getElementsByName(doc_key)[0].value=arg[stor_key];
				return true;
			}
        }
		return false;
    };
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fill(){
	var duration=100;
	await chrome.storage.local.get(["username"],fill_value("usr_name","username"));
	await sleep(duration);
	await chrome.storage.local.get(["password"],fill_value("usr_password","password"));
	await sleep(duration);
	return true
};
console.log("call fill_user");

fill().then(()=>{
		console.log("filled")
		document.getElementsByName('login')[0].submit();
		console.log("login")
	}
)

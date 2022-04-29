function fill_value(doc_key,stor_key=null){
    stor_key=stor_key||doc_key;
    return function(arg){
        if (arg[stor_key]){
            //console.log(arg[key]);
            document.getElementsByName(doc_key)[0].value=arg[stor_key];
        }
    };
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function fill(matrix){
	var duration=100;
    index1=document.querySelector("#authentication > tbody > tr:nth-child(5) > th:nth-child(1)").textContent
	stor_key1=index1[1]+"_"+index1[3];
	await chrome.storage.local.get(stor_key1,fill_value("message3",stor_key1));
	await sleep(duration);
    index2=document.querySelector("#authentication > tbody > tr:nth-child(6) > th:nth-child(1)").textContent
	stor_key2=index2[1]+"_"+index2[3];
	await chrome.storage.local.get(stor_key2,fill_value("message4",stor_key2));
	await sleep(duration);
    index3=document.querySelector("#authentication > tbody > tr:nth-child(7) > th:nth-child(1)").textContent
	stor_key3=index3[1]+"_"+index3[3];
	await chrome.storage.local.get(stor_key3,fill_value("message5",stor_key3));
	await sleep(duration);
}

fill().then(()=>{
	console.log("filled")
	document.getElementsByName('login')[0].submit();
	console.log("login")
})

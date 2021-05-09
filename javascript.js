const prompt = require('prompt-sync')({sigint: true});

var counter=0;


function view(counter){
    return "Count: " + counter + "\n" + "(+)(-)\n" + "(q) for quit\n";
}

function update(msg,counter){
    if(msg=="+"){
        return counter+=1;
    }

    if(msg=="-"){
        return counter-=1;
    }

}

function app(counter){
    while(true){
        const currentView=view(counter);
        console.clear();
        console.log(view(counter));
        const msg=prompt("What would you do? ");

        if(msg=="q"){
            break;
        }

        counter=update(msg,counter);
    }

}

app(counter);
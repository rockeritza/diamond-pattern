for(i=1;i<=5;i++){
    let text="";
    for(k=1;k<=5-i;k++){
        process.stdout.write(' ')
    }
    for(j=1;j<=2*i-1;j++){
        
        text+="*";
        
    }
    console.log(text);
}
for(i=4;i>=1;i--){
    let write=""
    for(k=5;k>i;k--){
        process.stdout.write(' ')
    }
    for(j=2*i-1;j>=1;j--){
        write+="*";
    }
    console.log(write);
}
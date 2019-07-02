var output = '';

for (var i = 0; i <= 10; i++) {
    for (j = 0; j < i; j++) {
        output += "*";
    }
        output += "\n"  //node 에서는 \n이 <br> 태그와 같음
}


        // document.write(output);
        console.log(output);
        

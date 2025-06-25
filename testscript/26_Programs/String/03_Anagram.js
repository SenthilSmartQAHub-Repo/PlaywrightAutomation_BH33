const { getCompileCacheDir } = require("module");
const { listenerCount } = require("process");



var s1='CBt'

var s2='CAB'

  var output1=s1.split('').sort().join('') ;//    ABC

 var output2=s2.split('').sort().join('')  //  ABC


 if(output1==output2)
 {
    console.log("Anagram")
 }
 else{
    console.log("not Anagram")
 }


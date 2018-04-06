var a = [1,2,1,2,3,4,3];
var b = [];
for(var i=0;i<a.length;i++){
    if(b.indexOf(a[i])==-1) {
        b.push(a[i])
    }
}
console.log(b)
console.log([1,2]+'123')
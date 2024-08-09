function asd(a,b)
{
    function myfun()
    {
        c=a+b;
        return c;
    }
    return myfun;
}
console.log(asd(10,20));
let x=asd(10,20);
let y=x()
console.log(y);
console.dir(x);

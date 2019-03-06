function laugh(num) {
    ret="";
    for (let times = 0; times < num; times++) {
        ret=ret+"ha";
    }
    ret+="!";
    return ret;
}

console.log(laugh(3));
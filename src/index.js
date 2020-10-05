module.exports = function toReadable (n) {
    if (!n && n!=0) throw new Error;
    let english='', string=String(n);
    if (n<0) {
      english+="negative";
      n=n*(-1);
    }
    if (n>=100) {
        string=string.substring(0,1);
        switch (string) {
            case '1': english+="one "; break;
            case '2': english+="two "; break;
            case '3': english+="three "; break;
            case '4': english+="four "; break;
            case '5': english+="five "; break;
            case '6': english+="six "; break;
            case '7': english+="seven "; break;
            case '8': english+="eight "; break;
            case '9': english+="nine "; break;
        }
        english+="hundred ";
        n=n-Number(string)*100;
        string=String(n);
    }
    if (n>=22 && n<=99) {
        string=string.substring(0,1);
        switch (string) {
            case '2': english+="twenty "; break;
            case '3': english+="thirty "; break;
            case '4': english+="forty "; break;
            case '5': english+="fifty "; break;
            case '6': english+="sixty "; break;
            case '7': english+="seventy "; break;
            case '8': english+="eighty "; break;
            case '9': english+="ninety "; break;
        }
        n=n-Number(string)*10;
        string=String(n);
    }
    if (n>=10 && n<=21) {
        string=string.substring(0,2);
        switch (string) {
            case '10': english+="ten"; break;
            case '11': english+="eleven"; break;
            case '12': english+="twelve"; break;
            case '13': english+="thirteen"; break;
            case '14': english+="fourteen"; break;
            case '15': english+="fifteen"; break;
            case '16': english+="sixteen"; break;
            case '17': english+="seventeen"; break;
            case '18': english+="eighteen"; break;
            case '19': english+="nineteen"; break;
            case '20': english+="twenty"; break;
            case '21': english+="twenty one"; break;
        }
        n="go away";
    }
    if (n<10 && n!="go away") {
      string=string.split('');
      for (let i of string) {
        switch (i) {
            case '1': english+="one"; break;
            case '2': english+="two"; break;
            case '3': english+="three"; break;
            case '4': english+="four"; break;
            case '5': english+="five"; break;
            case '6': english+="six"; break;
            case '7': english+="seven"; break;
            case '8': english+="eight"; break;
            case '9': english+="nine"; break;
            case '0': english+="zero"; break;
            default: english+=i; break;
        }
      }
    }
    english=english.replace(" zero",'');
    return english;
}

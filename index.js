exports.NumToStr = function(num){
    var dv = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "ก้าว"];//1-9
    var cs = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "ร้อยพัน", "ล้าน"];//chục, trăm, ngàn
    var hc = ["", "สิบ","ยี่สิบ","สามสิบ","สี่สิบ","ห้าสิบ","ห้กสิบ","เจ็ดสิบ","แปดสิบ","ก้าวสิบ"];
    
    num = num.toString(); 
    num = num.replace(/[\, ]/g,''); 
    if (num != parseFloat(num)){
        return 'not a number'; 
    }
    var x = num.indexOf('.'); 
    if (x === -1){ 
        x = num.length; 
    }
    if (x > 15) {
        return 'too big'; 
    }
    var int_section = num.split(".")[0];
    var real_section = num.split(".")[1];
    int_section = int_section.split("").reverse().join("");
    int_section = int_section.split("");
    var output = new Array();
    if(x <= 5){
        for(var i = 0; i < int_section.length; i++){
            switch(i){
                case 0:
                    if(typeof int_section[i + 1] !== "undefined"){
                        if(int_section[i + 1] === "1"){
                            if(int_section[i] === "1"){
                            }else{
                                output.push(dv[int_section[i]]);
                            }
                        }else if(int_section[i + 1] === "2"){
                            //don't put any thing
                        }else{
                            if(int_section[i] === "1"){
                                if(int_section[i + 1] === "0"){
                                    output.push(dv[int_section[i]]);
                                }
                            }
                            else{
                                output.push(dv[int_section[i]]);
                            }
                        }
                    }else{
                        output.push(dv[int_section[i]]);
                    }
                    break;
                case 1:
                    if(int_section[i - 1] === "1"){
                        if(int_section[i] !== "0"){
                            output.push(hc[int_section[i]] + "เอ็ด");
                        } //สิบเอ็ดหนึ่ง - 9341
                    }else if(int_section[i - 1] === "0"){
                        output.push(hc[int_section[i]]);
                    }else{
                        if(int_section[i] === "2"){
                            output.push("ยี่สิบ" + dv[int_section[i - 1]]);
                        }else{
                            output.push(hc[int_section[i]]);
                        }
                    }
                    break;
                case 2:
                    if(int_section[i] !== "0"){
                        output.push(dv[int_section[i]] + cs[2]);
                    }
                    break;
                case 3:
                    if(int_section[i] !== "0"){
                        output.push(dv[int_section[i]] + cs[3]);
                    }
                    break;
                case 4:
                    if(int_section[i] !== "0"){
                        output.push(dv[int_section[i]] + cs[4]);
                    }
                    break;
            }
        }
    }else{
        //cho cac so tu 100k tro len
        //nguyen tac chia bo 3 so
        for(var i = 0; i < int_section.length; i++){            
            switch(i){
                case 0:
                case 3:
                    if(typeof int_section[i + 1] !== "undefined"){
                        if(int_section[i + 1] === "1"){
                            if(int_section[i] === "1"){
                            }else{
                                output.push(dv[int_section[i]]);
                            }
                        }else if(int_section[i + 1] === "2"){
                            //don't put any thing
                        }else{
                            if(int_section[i] === "1"){
                                if(int_section[i + 1] === "0"){
                                    output.push(dv[int_section[i]]);
                                }
                            }
                            else{
                                output.push(dv[int_section[i]]);
                            }
                        }
                    }else{
                        output.push(dv[int_section[i]]);
                    }
                    break;
                case 1:
                case 4:
                    if(int_section[i - 1] === "1"){
                        if(int_section[i] !== "0"){
                            output.push(hc[int_section[i]] + "เอ็ด");
                        } //สิบเอ็ดหนึ่ง - 9341
                    }else if(int_section[i - 1] === "0"){
                        output.push(hc[int_section[i]]);
                    }else{
                        if(int_section[i] === "2"){
                            output.push("ยี่สิบ" + dv[int_section[i - 1]]);
                        }else{
                            output.push(hc[int_section[i]]);
                        }
                    }
                    break;
                case 2:
                case 5:
                    if(int_section[i] !== "0"){
                        output.push(dv[int_section[i]] + cs[2]);
                    }
                    if(i === 2){
                        output.push("พัน");
                    }
                    if(i === 5){
                        var isSoChan = true;
                        if(output.length === 0){
                            output.push(dv[int_section[i]] + "ร้อยพัน");
                        }
                    }
                    break;
                case 6:
                    if(int_section[i] !== "0"){
                        output.push(dv[int_section[i]] + cs[6]);
                    }
                    break;
            }
        }
    }
    var result = output.reverse();
    return result.join("");

}
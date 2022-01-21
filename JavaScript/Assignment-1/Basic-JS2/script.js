var names = ["Neeta sapkota", "neha shiwakoti", "Srijana Khatiwada ", "Smrity Dhakal",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elisha Bista",
    "Rachana kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
   "Kritika Baral",
    "Nrijana Thulung"];

    console.log("----------First Question---------------\n");
    
    var result = names.map(function(value, index)
    {
        var splitted = names[index].split(" ");
        var obj = {};
        obj.id = index+1;
        obj.firstName = splitted[0];
        obj.lastName = splitted[1];
        return obj;
    });
    
    console.log(result);

    
    console.log("\n----------Second Question---------------\n");
    
    function find(alphabet)
    {


        var counting = result.filter(function(value, index)
        {
            initial = value.firstName[0].toLowerCase();
            return initial == alphabet;
        });
        // console.log(counting);
        var countingLength = counting.length;
        var totalLength = result.length - countingLength;
        console.log(alphabet + ' -> '+ countingLength + ' and ' + totalLength);
    }
    
    find('s');
    find('a');
    
    var man = {
        name: "Rahul",
        age: 20,
        height: "6(ft)"
    }
    
    console.log("\n----------Third Question---------------\n");
    

    var newObj = result;
    var changeFormat = newObj.reduce(function(acc, value, index)
    {
        delete value.id;
        acc[index+1] = value;
        return acc;
        
    }, {});
    console.log(changeFormat);
    
    
    
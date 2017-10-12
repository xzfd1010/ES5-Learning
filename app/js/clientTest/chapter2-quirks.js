// toString是prototype上的方法，
{
    var hasDontEnumQuirk = function () {
        var o = {
            toString: function () {
            }
        }

        for (var prop in o) {
            if (prop == "toString") {
                return false
            }
        }

        return true
    }

    console.log(hasDontEnumQuirk())
}

{
    var hasEnumShadowsQuirk = function(){
        var o = {
            toString:function(){}
        }

        var count = 0

        for(var prop in o){
            if(prop == "toString"){
                count++
            }
        }

        return (count > 1)
    }
    console.log(hasEnumShadowsQuirk())
}
Value
	= _ value:(Array / Object / String / Null / Bool / Number) _ {
    	return value;
    }

Object "object"
	= "{" _ pairs:(KVPair (_ "," _ KVPair)*)? _ "}" {
    	const obj = {};
        if (pairs !== null) {
        	obj[pairs[0].key] = pairs[0].value;
            pairs[1].forEach(
            	pair => obj[pair[3].key] = pair[3].value
            );
        }
    	return obj;
    }
KVPair
	= key:String _ ":" value:Value {
    	return {key, value};
    }

Array "array"
	= "[" _ values:(Value (_ "," _ Value)*)? _ "]" {
    	if (values === null) {
        	return [];
        }
		return [values[0]].concat(values[1].map(i => i[3]))
    }

Null "null"
	= "null" {return null;}

Bool "bool"
	= "true" {return true;}
    / "false" {return false;}

Number "number"
	= num:$(Sign? (Int / Dec / Int Dec) Exp?) {
    	return parseFloat(num);
    }

Sign = "-"
Int = [0-9]+
Dec = "." [0-9]+
Exp = "e" ("-" / "+")? [0-9]+

String "string"
	= '"' text:StringChar* '"' {
    	//text[1] = text[1].join('')
        return text.join('')
    	//return JSON.parse(text);
    }
StringChar
	= "\\" seq:(
    	"\\"
        / '"'
        / "/"
        / "n" {return "\n";}
        / "r" {return "\r";}
        / "b" {return "\b";}
        / "t" {return "\t";}
        / "f" {return "\f";}
        / "x" hex:$(HEX HEX) {
        	return String.fromCharCode(
            	parseInt(hex, 16)
            );
        }
        / "u" hex:$(HEX HEX HEX HEX) {
        	return String.fromCharCode(
            	parseInt(hex, 16)
            );
        }
    ) {return seq}
    / [^"\\]

HEX "Hex Digit"
	= [0-9a-z]i

_ "whitespace"
  = [ \t\n\r]*

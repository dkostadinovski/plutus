(function(window, undefined) {
  var dictionary = {
    "ed205419-fde0-4641-81fa-fcd9dc1ec94f": "Profile_Eric",
    "a8afc11b-e372-4e12-b9fc-68c6d41eaf7c": "Card_Leclerc",
    "de5f9009-bc9b-4e75-951f-4901f9f6752c": "Profile_Stan",
    "916be54d-d6ba-4130-8a30-a466f0fd68f5": "Card_Spar",
    "70bb128e-46f2-4626-8d71-4815e1caf146": "Loading screen",
    "86c31dae-51fa-4336-9977-03d301215055": "Card_Hervis",
    "6f10d2c8-a8c8-473a-a031-25e88c8fb2e0": "CreditCard",
    "5ed58689-a662-498f-bb37-78bc2364d80f": "List of friends",
    "02b3a664-30f0-4df1-bbd7-fa3265b67423": "Camera",
    "8a638ee1-d936-47c6-b4d7-1fa17ca84294": "Home",
    "45d769b1-c24d-40fd-ab4d-704dfb328e09": "Profile_Erica_Fake",
    "95adc887-3e85-4566-95d6-d7b6077c8c85": "Login",
    "a36283d8-cc3a-4307-a687-abe25f9ab54c": "Profile_Kyle",
    "15a8e3fb-723d-4750-9ab0-07da9f274227": "Card_PC",
    "dc4ad004-0af0-4c96-8163-8fe8a80fbd99": "Profile_Kenny",
    "0fbedd9c-b498-42f5-956d-a86d2a9b575b": "White",
    "1e8a452c-0c3e-434b-9a69-9f88c989dab1": "MainTemplate",
    "default": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
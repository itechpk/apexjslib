(function (window) {
  function ilib() {
    var lib = {};
    const version = 1;
    const undefined = "undefined";

    lib.ver = version;
    lib.version = function () {
      return this.ver;
    };

    lib.log = function (data, extra) {
      console.log(d);
      if (typeof extra == "boolean" && extra) {
        console.log("+++++++ extra info starts +++++++");
        console.log("Type of : " + typeof data);
        console.log("Length : " + data.length);
        console.log("+++++++ extra info ends.. +++++++");
      }
    };

    ilib.i_item_exists = function item_exists(jqselctor) {
      if (typeof jqselctor != undefined) {
        if ($(jqselctor).length > 0) {
          return true;
        } else {
          this.log("Sent Item (" + jqselctor + ") is not a Jquery Selectable");
          return false;
        }
      } else {
        this.log("Please send a jQuery selector to check existance.");
        return false;
      }
    };

    lib.i_item_on = function (jqselctor) {
      if (item_exists(jqselctor)) {
        $(jqselctor).prop("disabled", false);
      }
    };

    lib.i_item_off = function (jqselctor) {
      if (item_exists(jqselctor)) {
        $(jqselctor).prop("disabled", true);
      }
    };

    lib.i_item_show = function (jqselctor) {
      if (item_exists(jqselctor)) {
        $(jqselctor).show();
      }
    };

    lib.i_item_hide = function (jqselctor) {
      if (item_exists(jqselctor)) {
        $(jqselctor).hide();
      }
    };

    return lib;
  }

  if (typeof window.$i === "undefined") {
    window.$i = ilib();
  }
});

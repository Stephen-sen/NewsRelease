 $(document).ready(function() {
    getProvinces();
  });

  function getProvinces() {
    var pro = "";
    for ( var i = 0; i < provinces.length; i++) {
      pro += "<option>" + provinces[i] + "</option>";
    }
    $('#province').empty().append(pro);
    getCities();
  }
  function getCities() {
    var proIndex = $('#province').get(0).selectedIndex;
    showCities(proIndex);
    getCounties();
  }
  function showCities(proIndex) {
    var cit = "";
    if (cities[proIndex] == null) {
      $('#city').empty();
      return;
    }
    for ( var i = 0; i < cities[proIndex].length; i++) {
      cit += "<option>" + cities[proIndex][i] + "</option>";
    }
    $('#city').empty().append(cit);
  }
  function getCounties() {
    var proIndex = $('#province').get(0).selectedIndex;
    var citIndex = $('#city').get(0).selectedIndex;
    showCounties(proIndex, citIndex);
  }
  function showCounties(proIndex, citIndex) {
    var cou = "";
    if (counties[proIndex][citIndex] == null) {
      $('#district').empty();
      return;
    }
    for ( var i = 0; i < counties[proIndex][citIndex].length; i++) {
      cou += "<option>" + counties[proIndex][citIndex][i] + "</option>";
    }
    $('#district').empty().append(cou);
  }
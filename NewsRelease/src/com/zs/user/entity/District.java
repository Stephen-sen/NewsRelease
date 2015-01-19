package com.zs.user.entity;

public class District {
private String id;
private String districtName;
private City cityName;
private String flag;
public String getId() {
  return id;
}
public void setId(String id) {
  this.id = id;
}
public String getDistrictName() {
  return districtName;
}
public void setDistrictName(String districtName) {
  this.districtName = districtName;
}

public City getCityName() {
  return cityName;
}
public void setCityName(City cityName) {
  this.cityName = cityName;
}
public String getFlag() {
  return flag;
}
public void setFlag(String flag) {
  this.flag = flag;
}

}

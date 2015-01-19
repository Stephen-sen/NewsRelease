package com.zs.user.entity;

public class City {
private String id;
private String cityName;
private Province provinceName;
private String flag;
public String getId() {
  return id;
}
public void setId(String id) {
  this.id = id;
}
public String getCityName() {
  return cityName;
}


public Province getProvinceName() {
  return provinceName;
}
public void setProvinceName(Province provinceName) {
  this.provinceName = provinceName;
}
public void setCityName(String cityName) {
  this.cityName = cityName;
}
public String getFlag() {
  return flag;
}
public void setFlag(String flag) {
  this.flag = flag;
}
}

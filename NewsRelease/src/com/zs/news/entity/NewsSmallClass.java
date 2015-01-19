package com.zs.news.entity;

import com.zs.user.entity.User;

public class NewsSmallClass {
private String id;
private String typeName;
private String info;
private User user;
private NewsBigClass bigClassType;
private String createDate;
private String flag;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getTypeName() {
	return typeName;
}
public void setTypeName(String typeName) {
	this.typeName = typeName;
}
public User getUser() {
  return user;
}
public void setUser(User user) {
  this.user = user;
}
public NewsBigClass getBigClassType() {
  return bigClassType;
}
public void setBigClassType(NewsBigClass bigClassType) {
  this.bigClassType = bigClassType;
}
public String getInfo() {
	return info;
}
public void setInfo(String info) {
	this.info = info;
}
public String getCreateDate() {
  return createDate;
}
public void setCreateDate(String createDate) {
  this.createDate = createDate;
}
public String getFlag() {
	return flag;
}
public void setFlag(String flag) {
	this.flag = flag;
}

}

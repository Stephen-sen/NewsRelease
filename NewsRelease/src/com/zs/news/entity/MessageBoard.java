package com.zs.news.entity;


import com.zs.user.entity.User;

public class MessageBoard {
private String id;
private User user;
private String messageContext;
private String dateTime;
private String flag;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}

public String getMessageContext() {
	return messageContext;
}
public void setMessageContext(String messageContext) {
	this.messageContext = messageContext;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}

public String getDateTime()
{
	return dateTime;
}
public void setDateTime(String dateTime)
{
	this.dateTime = dateTime;
}
public String getFlag() {
	return flag;
}
public void setFlag(String flag) {
	this.flag = flag;
}


}

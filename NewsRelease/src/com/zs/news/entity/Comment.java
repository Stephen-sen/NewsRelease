package com.zs.news.entity;

import java.util.Date;

import com.zs.user.entity.User;

public class Comment {
private String id;
private News news;
private User user;
private String context;
private String dateTime;
private String flag;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public News getNews() {
	return news;
}
public void setNews(News news) {
	this.news = news;
}

public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public String getContext() {
	return context;
}
public void setContext(String context) {
	this.context = context;
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

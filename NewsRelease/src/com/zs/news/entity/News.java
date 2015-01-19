package com.zs.news.entity;


import com.zs.user.entity.User;


public class News {
private String id;
private String title;
private String http;
private String intro;
private String newImg;
private String content;
private String source;
private String createDate;
private User user;
private NewsSmallClass type;
private Modular modular;
private Integer readTimes;
private Integer commentTimes;
private String flag;


public String getId() {
  return id;
}
public void setId(String id) {
  this.id = id;
}
public String getHttp() {
  return http;
}
public void setHttp(String http) {
  this.http = http;
}
public String getIntro() {
  return intro;
}
public void setIntro(String intro) {
  this.intro = intro;
}

public String getContent()
{
	return content;
}
public void setContent(String content)
{
	this.content = content;
}

public String getCreateDate()
{
	return createDate;
}
public void setCreateDate(String createDate)
{
	this.createDate = createDate;
}
public String getFlag() {
  return flag;
}
public void setFlag(String flag) {
  this.flag = flag;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}

public String getSource()
{
	return source;
}
public void setSource(String source)
{
	this.source = source;
}
public String getNewImg()
{
	return newImg;
}
public void setNewImg(String newImg)
{
	this.newImg = newImg;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public NewsSmallClass getType() {
	return type;
}
public void setType(NewsSmallClass type) {
	this.type = type;
}
public Modular getModular() {
  return modular;
}
public void setModular(Modular modular) {
  this.modular = modular;
}
public Integer getReadTimes() {
	return readTimes;
}
public void setReadTimes(Integer readTimes) {
	this.readTimes = readTimes;
}
public Integer getCommentTimes() {
	return commentTimes;
}
public void setCommentTimes(Integer commentTimes) {
	this.commentTimes = commentTimes;
}

}

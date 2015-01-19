package com.zs.user.entity;

public class UserRole {
private String id;
private User user;
private Role role;
private String flag;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public Role getRole() {
	return role;
}
public void setRole(Role role) {
	this.role = role;
}
public String getFlag() {
	return flag;
}
public void setFlag(String flag) {
	this.flag = flag;
}

}

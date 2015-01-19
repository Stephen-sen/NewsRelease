package com.zs.user.entity;



public class RoleMenu {
	private String id;
	private String roleMenuStr;
	private Menu menu;
	private Role role;
	private String flag;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public Menu getMenu()
	{
		return menu;
	}
	public void setMenu(Menu menu)
	{
		this.menu = menu;
	}
	public Role getRole()
	{
		return role;
	}
	public void setRole(Role role)
	{
		this.role = role;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public String getRoleMenuStr()
	{
		return roleMenuStr;
	}
	public void setRoleMenuStr(String roleMenuStr)
	{
		this.roleMenuStr = roleMenuStr;
	}
	
}

package com.zs.user.entity;

import java.io.Serializable;

public class Menu implements Serializable{
	private String id;
	/**
	 * 菜单名称
	 */
	private String name;
	/**
	 * 菜单描述
	 */
	private String description;
	/**
	 * 菜单logo
	 */
	private String logo;
	/**
	 * 跳转URL
	 */
	private String url;
	/**
	 * 菜单类别  00:根菜单     01：菜单夹      02：菜单项
	 */
	private String menuType; 
	/**
	 * 上级id
	 */
	private String preId;
	
	private String buttonCode;

	private String flag;

	public String getId()
	{
		return id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getLogo()
	{
		return logo;
	}

	public void setLogo(String logo)
	{
		this.logo = logo;
	}

	public String getUrl()
	{
		return url;
	}

	public void setUrl(String url)
	{
		this.url = url;
	}

	public String getMenuType()
	{
		return menuType;
	}

	public void setMenuType(String menuType)
	{
		this.menuType = menuType;
	}

	public String getPreId()
	{
		return preId;
	}

	public void setPreId(String preId)
	{
		this.preId = preId;
	}

	public String getButtonCode()
	{
		return buttonCode;
	}

	public void setButtonCode(String buttonCode)
	{
		this.buttonCode = buttonCode;
	}

	public String getFlag()
	{
		return flag;
	}

	public void setFlag(String flag)
	{
		this.flag = flag;
	}
	
}

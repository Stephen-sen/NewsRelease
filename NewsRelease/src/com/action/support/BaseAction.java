package com.action.support;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.opensymphony.xwork2.ActionSupport;
import com.zs.news.entity.Comment;
import com.zs.news.entity.MessageBoard;
import com.zs.news.entity.Modular;
import com.zs.news.entity.News;
import com.zs.news.entity.NewsBigClass;
import com.zs.news.entity.NewsSmallClass;
import com.zs.user.entity.Admin;
import com.zs.user.entity.City;
import com.zs.user.entity.District;
import com.zs.user.entity.Menu;
import com.zs.user.entity.Province;
import com.zs.user.entity.Role;
import com.zs.user.entity.RoleMenu;
import com.zs.user.entity.User;
import com.zs.user.entity.UserRole;

public class BaseAction extends ActionSupport implements ServletRequestAware,
		ServletResponseAware {

	protected HttpServletRequest request;
	protected HttpServletResponse response;
	protected User user;
	protected Province province;
	protected Admin admin;
	protected City city;
	protected District district;
	protected Menu menu;
	protected Role role;
	protected RoleMenu roleMenu;
	protected UserRole userRole;

	protected Comment comment;
	protected MessageBoard messageBoard;
	protected News news;
	protected NewsBigClass newsBigClass;
	protected NewsSmallClass newsSmallClass;
	protected Modular modular;
	
	protected JSONArray result;

	public JSONArray getResult() {
    return result;
  }

  public void setResult(JSONArray result) {
    this.result = result;
  }

  public void setServletRequest(HttpServletRequest req) {
		this.request = req;
	}

	public void setServletResponse(HttpServletResponse res) {
		this.response = res;
	}

	public HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public HttpServletResponse getResponse() {
		return response;
	}

	public void setResponse(HttpServletResponse response) {
		this.response = response;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Province getProvince() {
		return province;
	}

	public void setProvince(Province province) {
		this.province = province;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public District getDistrict() {
		return district;
	}

	public void setDistrict(District district) {
		this.district = district;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public RoleMenu getRoleMenu() {
		return roleMenu;
	}

	public void setRoleMenu(RoleMenu roleMenu) {
		this.roleMenu = roleMenu;
	}

	public UserRole getUserRole() {
		return userRole;
	}

	public void setUserRole(UserRole userRole) {
		this.userRole = userRole;
	}

	public Comment getComment() {
		return comment;
	}

	public void setComment(Comment comment) {
		this.comment = comment;
	}


	public MessageBoard getMessageBoard()
	{
		return messageBoard;
	}

	public void setMessageBoard(MessageBoard messageBoard)
	{
		this.messageBoard = messageBoard;
	}

	public News getNews() {
		return news;
	}

	public void setNews(News news) {
		this.news = news;
	}

	public NewsBigClass getNewsBigClass() {
		return newsBigClass;
	}

	public void setNewsBigClass(NewsBigClass newsBigClass) {
		this.newsBigClass = newsBigClass;
	}


	public NewsSmallClass getNewsSmallClass() {
		return newsSmallClass;
	}

	public void setNewsSmallClass(NewsSmallClass newsSmallClass) {
		this.newsSmallClass = newsSmallClass;
	}

  public Modular getModular() {
    return modular;
  }

  public void setModular(Modular modular) {
    this.modular = modular;
  }

}

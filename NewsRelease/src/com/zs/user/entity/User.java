package com.zs.user.entity;

import java.util.Date;


public class User {
	private String id;
	private String userName;
	private String nickName;
	private String passWord;
	private String qrmm;
	private String sex;
	private Integer age;
	private String birthDate;
	private String email;
	private String tel;
	private String qq;
	private String headImg;
	private String address;
	private String registDate;
	private String province;
	private String city;
	private String district;
	private String flag;
	private String loginDate;
	private Integer loginTimes;
	
	private String birthYear;
	private String birthMonth;
	private String birthDay;
	private String verify;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	
	
	public Integer getLoginTimes()
	{
		return loginTimes;
	}
	public void setLoginTimes(Integer loginTimes)
	{
		this.loginTimes = loginTimes;
	}
	public String getQrmm() {
		return qrmm;
	}
	public void setQrmm(String qrmm) {
		this.qrmm = qrmm;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	
	public String getLoginDate()
	{
		return loginDate;
	}
	public void setLoginDate(String loginDate)
	{
		this.loginDate = loginDate;
	}
	public String getBirthDate() {
    return birthDate;
  }
  public void setBirthDate(String birthDate) {
    this.birthDate = birthDate;
  }
  public String getBirthYear() {
    return birthYear;
  }
  public void setBirthYear(String birthYear) {
    this.birthYear = birthYear;
  }
  public String getBirthMonth() {
    return birthMonth;
  }
  public void setBirthMonth(String birthMonth) {
    this.birthMonth = birthMonth;
  }
  public String getBirthDay() {
    return birthDay;
  }
  public void setBirthDay(String birthDay) {
    this.birthDay = birthDay;
  }
  public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
	
	public String getAddress() {
    return address;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  
  public String getProvince() {
    return province;
  }
  public void setProvince(String province) {
    this.province = province;
  }
  public String getCity() {
    return city;
  }
  public void setCity(String city) {
    this.city = city;
  }
  
  public String getDistrict() {
    return district;
  }
  public void setDistrict(String district) {
    this.district = district;
  }
  public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getHeadImg()
	{
		return headImg;
	}
	public void setHeadImg(String headImg)
	{
		this.headImg = headImg;
	}
	
	public String getRegistDate()
	{
		return registDate;
	}
	public void setRegistDate(String registDate)
	{
		this.registDate = registDate;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public String getVerify()
	{
		return verify;
	}
	public void setVerify(String verify)
	{
		this.verify = verify;
	}
}

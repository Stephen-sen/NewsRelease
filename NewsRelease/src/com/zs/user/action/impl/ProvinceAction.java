package com.zs.user.action.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.action.support.BaseAction;
import com.zs.user.entity.Province;
import com.zs.user.service.impl.ProvinceService;

@Controller
public class ProvinceAction extends BaseAction{

  @Autowired
  private ProvinceService provinceService;
	 
	 public void saveProvince(Province province){
	   province.setFlag("Y");
	   provinceService.saveProvince(province);
	 }
	  
	 public void updateProvince(Province province){
	   province.setFlag("Y");
	   provinceService.updateProvince(province);
	 }
}

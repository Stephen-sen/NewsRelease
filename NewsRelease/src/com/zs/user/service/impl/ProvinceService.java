package com.zs.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zs.user.dao.impl.ProvinceDao;
import com.zs.user.dao.impl.UserDaoImpl;
import com.zs.user.entity.Province;
import com.zs.user.entity.User;

@Service
public class ProvinceService {

	@Autowired
	private ProvinceDao provinceDao;
	
	public void saveProvince(Province province){
		provinceDao.saveProvince(province);
	}
	
	public void updateProvince(Province province){
		try{
				provinceDao.updateProvince(province);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}
	
	public Province findProvince(String provinceId){
		return provinceDao.findProvince(provinceId);
	}
}

package com.zs.user.dao.impl;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.user.entity.Province;

@Repository
public class ProvinceDao extends BaseDao{
	
	public void saveProvince(Province province){
		try{
			this.getHibernateTemplate().save(province);
//			this.getHibernateTemplate().evict(province);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
public String updateProvince(Province province){
		try{
		  Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();
      session.clear();
			this.getHibernateTemplate().update(province);
//			this.getHibernateTemplate().evict(province);
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return null;
		
	}

public Province findProvince(String provinceId){
	try{
		return (Province) this.getHibernateTemplate().get(Province.class, provinceId);
	}
	catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	
	return null;
	
}

}

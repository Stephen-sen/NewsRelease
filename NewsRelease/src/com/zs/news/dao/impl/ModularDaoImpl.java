package com.zs.news.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.news.dao.ModularDao;
import com.zs.news.entity.Modular;
@Repository
public class ModularDaoImpl extends BaseDao implements ModularDao {

  @Override
  public List<Modular> ModularList() {
    // TODO Auto-generated method stub
    return this.getHibernateTemplate().find("from Modular");
  }

  @Override
  public void insertModular(Modular modular) {
    // TODO Auto-generated method stub
    this.getHibernateTemplate().save(modular);

  }

  @Override
  public void updateModular(Modular modular) {
    // TODO Auto-generated method stub
	  Session session = this.getHibernateTemplate().getSessionFactory().getCurrentSession();
	  session.clear();
    this.getHibernateTemplate().update(modular);

  }

  @Override
  public void deleteModular(Modular modular) {
    // TODO Auto-generated method stub
    this.getHibernateTemplate().delete(modular);

  }

  @Override
  public Modular findModular(String modular) {
    // TODO Auto-generated method stub
    return this.getHibernateTemplate().get(Modular.class, modular);
  }

}

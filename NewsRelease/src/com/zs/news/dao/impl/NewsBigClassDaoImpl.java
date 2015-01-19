package com.zs.news.dao.impl;

import java.util.List;

import org.hibernate.classic.Session;
import org.springframework.stereotype.Repository;

import com.zs.base.dao.BaseDao;
import com.zs.news.dao.NewsBigClassDao;
import com.zs.news.entity.NewsBigClass;
@Repository
public class NewsBigClassDaoImpl extends BaseDao implements NewsBigClassDao {

  @Override
  public List<NewsBigClass> NewsBigClassList() {
    // TODO Auto-generated method stub
    return this.getHibernateTemplate().find("from NewsBigClass");
  }

  @Override
  public void insertBigClass(NewsBigClass bigClass) {
    // TODO Auto-generated method stub
    this.getHibernateTemplate().save(bigClass);
  }

  @Override
  public void updateBigClass(NewsBigClass bigClass) {
    // TODO Auto-generated method stub
    Session session = this.getHibernateTemplate().getSessionFactory().getCurrentSession();
    session.clear();
    this.getHibernateTemplate().update(bigClass);

  }

  @Override
  public void deleteBigClass(NewsBigClass bigClass) {
    // TODO Auto-generated method stub
    this.getHibernateTemplate().delete(bigClass);

  }

  @Override
  public NewsBigClass findBigClass(String bigClassId) {
    // TODO Auto-generated method stub
    return this.getHibernateTemplate().get(NewsBigClass.class, bigClassId);
  }

}

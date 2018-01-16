package com.ssh.oa.base;

import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.Resource;


import org.hibernate.Session;
import org.hibernate.SessionFactory;

@SuppressWarnings("unchecked")
public class BaseDaoImpl<T> implements BaseDao<T>{

	@Resource
	private SessionFactory sessionFactory;
	private Class<T> clazz;
	
	public BaseDaoImpl() {
		 //使用反射机制获取T的真实类型
		 ParameterizedType pt = ( ParameterizedType)this.getClass().getGenericSuperclass();
		 this.clazz =(Class<T>) pt.getActualTypeArguments()[0];
		 //System.out.println("---------" + clazz);
	}
	//获取session
	protected Session getSession(){
		return sessionFactory.getCurrentSession();
	}
	public void save(T t) throws Exception {
		getSession().save(t);
	}

	public void delete(Integer id) throws Exception {
		Object object = getById(id);
		if(object != null){
			  getSession().delete(object);		
		}
	}

	public void update(T t) throws Exception {
		  T tmp =(T) getSession().merge(t);
          getSession().update(tmp);		
	}

	public T getById(Integer id) throws Exception {
	     if(id == null){
	    	 return null;
	     }else{
	    	 return  (T) getSession().get(clazz, id);
	     }
	}

	public List<T> getByIds(Long[] ids) throws Exception {
		if(ids == null || ids.length == 0){
			return Collections.EMPTY_LIST;
		}else{
			return getSession().createQuery(
					"FROM " +clazz.getSimpleName() +" WHERE id IN (:ids)")
					.setParameterList("ids", ids)
					.list();
		}
	}

	public List<T> findAll() throws Exception {
		return getSession().createQuery(
				"FROM " + clazz.getSimpleName())
				.list();
	}

}

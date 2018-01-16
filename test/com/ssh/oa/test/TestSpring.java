package com.ssh.oa.test;

import org.hibernate.SessionFactory;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class TestSpring {
  
	  private ApplicationContext applicationContext  = new ClassPathXmlApplicationContext("applicationContext.xml");
	
	  @Test
	  public void testBean()throws Exception{
		 TestAction testAction =  (TestAction) applicationContext.getBean("testAction");
		 System.out.println(testAction);
	  }
	  
	  @Test
	  public void testSessionFactory()throws Exception{
		     SessionFactory factory = (SessionFactory) applicationContext.getBean("sessionFactory");
		     System.out.println(factory);
	  }
}

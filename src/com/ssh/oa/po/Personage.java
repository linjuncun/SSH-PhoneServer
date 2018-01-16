package com.ssh.oa.po;

/**
 * 个人信息
 * @author Administrator
 *
 */
public class Personage {

		private int id;                                  //主键
		private String name;                        //姓名
		private String sex;                           //性别
		private String company;                  //公司
		private String number;                    //账号
		private String inviter;                      //邀请人
		private String photoName;             //图片名称
		
		public String getPhotoName() {
			return photoName;
		}
		public void setPhotoName(String photoName) {
			this.photoName = photoName;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getSex() {
			return sex;
		}
		public void setSex(String sex) {
			this.sex = sex;
		}
		public String getCompany() {
			return company;
		}
		public void setCompany(String company) {
			this.company = company;
		}
		public String getNumber() {
			return number;
		}
		public void setNumber(String number) {
			this.number = number;
		}
		public String getInviter() {
			return inviter;
		}
		public void setInviter(String inviter) {
			this.inviter = inviter;
		}
		
}

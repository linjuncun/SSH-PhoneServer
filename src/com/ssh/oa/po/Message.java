package com.ssh.oa.po;

import java.io.Serializable;

public class Message implements Serializable {

		private int id;
		
		private String date;
		
		private String user_id;
		
		private String user_message;

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getDate() {
			return date;
		}

		public void setDate(String date) {
			this.date = date;
		}

		public String getUser_id() {
			return user_id;
		}

		public void setUser_id(String user_id) {
			this.user_id = user_id;
		}

		public String getUser_message() {
			return user_message;
		}

		public void setUser_message(String user_message) {
			this.user_message = user_message;
		}
}

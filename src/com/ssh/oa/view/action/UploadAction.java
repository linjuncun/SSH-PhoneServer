package com.ssh.oa.view.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class UploadAction extends ActionSupport {
	
    private String filename;
	
	private File file;
	
	private String fileFileName;
	
	private String fileContentType;
	
	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public String getFileFileName() {
		return fileFileName;
	}

	public void setFileFileName(String fileFileName) {
		this.fileFileName = fileFileName;
	}

	public String getFileContentType() {
		return fileContentType;
	}

	public void setFileContentType(String fileContentType) {
		this.fileContentType = fileContentType;
	}
	
	@Override
	public String execute() throws Exception {
		
		String root = ServletActionContext.getServletContext().getRealPath("/images");
	    
		if(file != null){
		InputStream is = new FileInputStream(file);
		File destFile = new File(root,fileFileName);
		OutputStream os = new FileOutputStream(destFile);
		
		byte[] buffer = new byte[1024];
		
		int length = 0;
		
		while(-1 != (length = is.read(buffer))){
			os.write(buffer,0,length);
		}
		System.out.println("*********************" + fileFileName);
		ActionContext.getContext().put("fileFileName", fileFileName);
		os.close();
		is.close();
		 return SUCCESS;
		}else{
			ActionContext.getContext().put("eroorMessage","上传失败");
			return "eroor";
		}
	}
}

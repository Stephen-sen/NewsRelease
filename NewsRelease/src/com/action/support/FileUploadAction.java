package com.action.support;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import org.apache.struts2.ServletActionContext;
public class FileUploadAction extends BaseAction {
    /**
     * @fields serialVersionUID
     */
    private static final long serialVersionUID = 1L;
    private List<File> fileName;//这里的"fileName"一定要与表单中的文件域名相同  
    private List<String> fileNameContentType;//格式同上"fileName"+ContentType  
    private List<String> fileNameFileName;//格式同上"fileName"+FileName  
    private String savePath;//文件上传后保存的路径
    /**
	 * 上传文件
	 */
    public void upload() throws Exception {//intentionPicture
       String uploadFileName="";
       File dir=new File(getSavePath()); 
       String savePath=getSavePath();//保存上传文件的地址
       if(!dir.exists()){ 
           dir.mkdirs(); 
       } 
       List<File> files=getFileName(); 
       for(int i=0;i<files.size();i++){ 
           FileOutputStream fos=new FileOutputStream(getSavePath()+"\\"+getFileNameFileName().get(i)); 
           FileInputStream fis=new FileInputStream(getFileName().get(i)); 
           byte []buffers=new byte[1024]; 
           int len=0; 
           while((len=fis.read(buffers))!=-1){ 
              fos.write(buffers,0,len); 
           } 
           fos.close();
           fis.close();
           uploadFileName=getFileNameFileName().get(i);
       } 
       //设置响应内容的字符串编码
       ServletActionContext.getResponse().setCharacterEncoding("UTF-8");
       ServletActionContext.getResponse().setContentType("text/plain");
        ServletActionContext.getResponse().getWriter().print(uploadFileName+","+savePath+"\\"+uploadFileName);
    }
    /* (non-Javadoc)下载文件
     * @see com.opensymphony.xwork2.ActionSupport#execute()
     */
    @Override
    public String execute() throws Exception {
       // TODO Auto-generated method stub
       return "success";
    }
       public InputStream getInputStream() {
           return ServletActionContext.getServletContext().getResourceAsStream("/" + fileName);
       }
    /* (non-Javadoc)
     * @see org.apache.struts2.interceptor.ServletRequestAware#setServletRequest(javax.servlet.http.HttpServletRequest)
     */
    public void setServletRequest(HttpServletRequest req) {
       this.request=req;
    }
    public List<File> getFileName() {
       return fileName;
    }
    public void setFileName(List<File> fileName) {
       this.fileName = fileName;
    }
    public List<String> getFileNameContentType() {
       return fileNameContentType;
    }
    public void setFileNameContentType(List<String> fileNameContentType) {
       this.fileNameContentType = fileNameContentType;
    }
    public List<String> getFileNameFileName() {
       return fileNameFileName;
    }
    public void setFileNameFileName(List<String> fileNameFileName) {
       this.fileNameFileName = fileNameFileName;
    }
    @SuppressWarnings("deprecation")
    public String getSavePath() {
       return request.getRealPath(savePath); 
    }
    public void setSavePath(String savePath) {
       this.savePath = savePath;
    }
}
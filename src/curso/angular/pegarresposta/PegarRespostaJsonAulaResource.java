package curso.angular.pegarresposta;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@WebServlet("/pessoas/")
public class PegarRespostaJsonAulaResource extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public PegarRespostaJsonAulaResource() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		response.setHeader("Cache-Control", "nocache");
		response.setCharacterEncoding("utf-8");
		
		JsonObject jsonObject = new JsonObject();
		
		if(request.getParameter("codPessoa") != ""){
		System.out.println("getId() \nParâmetro da URL - >" +request.getParameter("codPessoa"));
		
		jsonObject = new JsonObject();
		jsonObject.addProperty("codPessoa", request.getParameter("codPessoa"));
		jsonObject.addProperty("nome", "João");
		jsonObject.addProperty("cidade", "Recife");
		
		response.getWriter().write(jsonObject.toString());
		
		}else {
			
			System.out.println("getTodos()");
			
			JsonArray jsonArray = new JsonArray();
			
			jsonObject = new JsonObject();
			jsonObject.addProperty("codPessoa", 10);
			jsonObject.addProperty("nome", "João");
			jsonObject.addProperty("cidade", "Recife");
			jsonArray.add(jsonObject);
			
			jsonObject = new JsonObject();
			jsonObject.addProperty("codPessoa", 20);
			jsonObject.addProperty("nome", "Fernanda");
			jsonObject.addProperty("cidade", "Curitiba");
			jsonArray.add(jsonObject);
			
			response.getWriter().write(jsonArray.toString());
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}

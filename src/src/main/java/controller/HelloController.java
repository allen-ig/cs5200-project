package controller;

import models.HelloObject;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import repositories.HelloRepository;

import java.util.List;

@RestController
public class HelloController {

	@RequestMapping("/api/hello/string")
	public String sayHello() {
		return "Hello Yanchi Li!";
	}

	@RequestMapping("/api/hello/object")
	public HelloObject sayHelloObject() {
		HelloObject obj = new HelloObject("Hello Yanchi Li!");
		return obj;
	}

	@Autowired
	HelloRepository helloRepository;

	@RequestMapping("/api/hello/insert")
	public HelloObject insertHelloObject() {
		HelloObject obj = new HelloObject("Hello Yanchi Li!");
		helloRepository.save(obj);
		return obj;
	}

	@RequestMapping("/api/hello/insert/{msg}")
	public HelloObject insertMessage(@PathVariable("msg") String message) {
		HelloObject obj = new HelloObject(message);
		helloRepository.save(obj);
		return obj;
	}

	@RequestMapping("/api/hello/select/all")
	public List<HelloObject> selectAllHelloObjects() {
		List<HelloObject> hellos = (List<HelloObject>)helloRepository.findAll();
		return hellos;
	}

}

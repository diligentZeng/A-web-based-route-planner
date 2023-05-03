package org.programmierprojekt.server;

import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.programmierprojekt.graph.Graph;

@SpringBootApplication
public class ProgramierprojectApplication {
	static Graph graph;

	public static void main(String[] args) {
		try (Scanner myInput = new Scanner(System.in)) {
			System.out.println("Please enter the path of your graph");
			String dataset = myInput.next();
			graph = new Graph(dataset);
		}
        SpringApplication.run(ProgramierprojectApplication.class, args);
	}

}

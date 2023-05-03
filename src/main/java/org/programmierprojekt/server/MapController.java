package org.programmierprojekt.server;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.programmierprojekt.graph.*;
import static org.programmierprojekt.server.ProgramierprojectApplication.graph;

/*
 * Rest Controller of the server 
 */
@RestController
public class MapController {
	

	/*
	 * return the nearest node after received request from front page
	 */
	@PostMapping("/nearestNode")
	@ResponseBody
	public TwoDimensionalTreeNode findNearestNode(@RequestParam(value = "x") double x,
			@RequestParam(value = "y") double y) {
		return graph.findNearestNeighbour(x, y);
	}
	
	/*
	 * return a shortest path by call the function minDist of the Graph class when received a start and end index. 
	 */

	@PostMapping(value = "/minDist")
	@ResponseBody
	public List<double[]> getMinDist(@RequestParam(value = "startIndex") int startIndex,
			@RequestParam(value = "endIndex") int endIndex) {
		List<double[]> routine = new ArrayList<double[]> ();
		graph.minDist(null, routine, startIndex, endIndex);
		return routine;
	}

}

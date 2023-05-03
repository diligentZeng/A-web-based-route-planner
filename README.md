# Programmierprojekt:Routeplanner
<html>
  <body>
  <p style="text-align:right">Leon Kirasic 3530881</p>
  <p style="text-align:right">Sichun Zheng 3202876</p>
  <p style="text-align:right">Yang Fu 3595130</p>
</body>
</html>



## Introduction
A simple map service which can realize following three functions:
1.find and mark the nearest coordinate by clicking the map. 
2.display a shortest path from start point to destination. 
3.reset the map and begin a new search.

## Requirements

- Java 17
- Gradle 7.3

the file to be read in can be found here <br/>
https://fmi.uni-stuttgart.de/alg/research/stuff/

## Usage

run the following code in terminal:
     
      bash run.sh



**Note that germany map is huge, we therefore need 6 GB maximal heap size for JVM by passing _-Xmx6g_**

As for convenience, we set maximal heap size as 6 GB for all the cases in _run.sh_
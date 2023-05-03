export _JAVA_OPTIONS="-Xmx6g"

./gradlew clean assemble

java -jar "build/libs/programmierprojekt2022-1.0-SNAPSHOT.jar" 

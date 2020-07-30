# Getting Started

如果您是Java开发人员-空手道要求[Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)8（至少为1.8.0_112或更高版本），然后选择[ Maven](http://maven.apache.org)，[Gradle](https://gradle.org)，[Eclipse](＃eclipse-quickstart)或[IntelliJ](https://github.com/intuit/karate/wiki/ IDE-Support＃intellij-community-edition)。 请注意，Karate在OpenJDK上可以正常工作,支持8-12的任何Java版本。如果您是编程或测试自动化的新手，请参阅此视频以获取[仅使用（免费）IntelliJ社区版入门](https://youtu.be/W-af7Cd8cMc).如果您对编程或测试自动化没有太多经验,建议您使用[Visual Studio Code Karate-plugin](https://marketplace.visualstudio.com/items?itemName=kirkslota.karate-runner)
Visual Studio Code也可以用于Java（或Maven）项目。

# Karate MAVEN

Karate的设计使您可以在[Apache]（https://hc.apache.org/index.html）或[Jersey]（https://jersey.java.net）HTTP客户端实现之间进行选择。

```xml
    <dependencies>
        <dependency>
            <groupId>com.intuit.karate</groupId>
            <artifactId>karate-apache</artifactId>
            <version>0.9.5</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.intuit.karate</groupId>
            <artifactId>karate-junit5</artifactId>
            <version>0.9.5</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
```


